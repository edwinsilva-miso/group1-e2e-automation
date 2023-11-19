const compareImages = require("resemblejs/compareImages");
const config = require("./config.json");
const fs = require("fs");

const { screenShotsPath, options } = config;

// Here we will define the tests to be used in the VRT
const tests = [
  {
    // Name of the scenario folder where the screenshots are located for the old version
    OLD_VERSION_FOLDER:
      "Visualizar mi perfil v4",
    // Name of the scenario folder where the screenshots are located for the latest version
    LASTEST_VERSION_FOLDER: "Visualizar mi perfil",
    // Name of the scenario
    SCENARIO_NAME: "(1) - Visualizar mi perfil",
  },
  {
    OLD_VERSION_FOLDER: "Visualizar post v4",
    LASTEST_VERSION_FOLDER: "Visualizar post",
    SCENARIO_NAME: "(2) - Visualizar post",
  },
  {
    OLD_VERSION_FOLDER: "Crear tag publico exitoso v4",
    LASTEST_VERSION_FOLDER: "Crear tag publico exitoso",
    SCENARIO_NAME: "(3) - Crear tag publico exitoso",
  },
  {
    OLD_VERSION_FOLDER: "Crear tag interno existoso v4",
    LASTEST_VERSION_FOLDER: "Crear tag interno existoso",
    SCENARIO_NAME: "(4) - Crear tag interno existoso",
  },
  {
    OLD_VERSION_FOLDER: "Programar publicación de post v4",
    LASTEST_VERSION_FOLDER: "Programar publicación de post",
    SCENARIO_NAME: "(5) - Programar publicación de post",
  },
  {
    OLD_VERSION_FOLDER: "Crear un Tag fallido (No se llena el formulario) v4",
    LASTEST_VERSION_FOLDER: "Crear un Tag fallido (No se llena el formulario)",
    SCENARIO_NAME: "(6) - Crear un Tag fallido (No se llena el formulario)",
  },
  {
    OLD_VERSION_FOLDER: "Crear un Tag exitoso (Con meta-data) v4",
    LASTEST_VERSION_FOLDER: "Crear un Tag exitoso (Con meta-data)",
    SCENARIO_NAME: "(7) - Crear un Tag exitoso (Con meta-data)",
  },
  {
    OLD_VERSION_FOLDER: "Crear página con publicación programada v4",
    LASTEST_VERSION_FOLDER: "Crear página con publicación programada",
    SCENARIO_NAME: "(8) - Crear página con publicación programada",
  },
  {
    OLD_VERSION_FOLDER: "Crear página con publicación al instante v4",
    LASTEST_VERSION_FOLDER: "Crear página con publicación al instante",
    SCENARIO_NAME: "(9) - Crear página con publicación al instante",
  },
  {
    OLD_VERSION_FOLDER: "Crear un miembro exitoso v4",
    LASTEST_VERSION_FOLDER: "Crear un miembro exitoso",
    SCENARIO_NAME: "(10) - Crear un miembro exitoso",
  },
  {
    OLD_VERSION_FOLDER: "Crear borrador de post v4",
    LASTEST_VERSION_FOLDER: "Crear borrador de post",
    SCENARIO_NAME: "(11) - Crear borrador de post",
  },
];


// Function to count the number of files in a directory
function countFiles(dir) {
  const files = fs.readdirSync(dir);

  // Filter out files from the list of items (excluding directories)
  const fileCount = files.filter((file) => {
    return fs.statSync(`${dir}/${file}`).isFile();
  }).length;
  return fileCount;
}

async function executeTest() {
  let resultInfo = {};
  let datetime = new Date().toISOString().replace(/:/g, ".");
  let j = 0;
  //Iterate over the tests
  for (let test of tests) {
    j++;
    const firstTestPath = `${screenShotsPath}/${test.OLD_VERSION_FOLDER}`;
    const secondTestPath = `${screenShotsPath}/${test.LASTEST_VERSION_FOLDER}`;

    const numberOfScreenshots = Math.min(
      countFiles(`${screenShotsPath}/${test.OLD_VERSION_FOLDER}`),
      countFiles(`${screenShotsPath}/${test.LASTEST_VERSION_FOLDER}`)
    );
    resultInfo[test.SCENARIO_NAME] = {};
    //Iterate over the screenshots
    for (let i = 1; i <= numberOfScreenshots; i++) {
      const data = await compareImages(
        fs.readFileSync(`${firstTestPath}/ss-${i}.png`),
        fs.readFileSync(`${secondTestPath}/ss-${i}.png`),
        options
      );
      const directoryPath = `vrt/results/${datetime}/${test.SCENARIO_NAME}`;
      if (!fs.existsSync(directoryPath)) {
        fs.mkdirSync(directoryPath, { recursive: true });
      }
      fs.writeFileSync(`${directoryPath}/compare-${i}.png`, data.getBuffer());

      resultInfo[test.SCENARIO_NAME][i] = {
        scenarioPosition: j,
        isSameDimensions: data.isSameDimensions,
        dimensionDifference: data.dimensionDifference,
        rawMisMatchPercentage: data.rawMisMatchPercentage,
        misMatchPercentage: data.misMatchPercentage,
        diffBounds: data.diffBounds,
        analysisTime: data.analysisTime,
        beforeUrl: `../../../${firstTestPath}/ss-${i}.png`,
        afterUrl: `../../../${secondTestPath}/ss-${i}.png`,
        diffUrl: `${test.SCENARIO_NAME}/compare-${i}.png`,
      };
    }
  }
  fs.writeFileSync(
    `vrt/results/${datetime}/report.html`,
    createReport(datetime, resultInfo)
  );
  fs.copyFileSync("vrt/index.css", `vrt/results/${datetime}/index.css`);
  console.log(
    "------------------------------------------------------------------------------------"
  );
  console.log("Execution finished. Check the report under the results folder");
  return resultInfo;
}

function step(n, info) {
  return `
  <h3>Step ${n}</h3>
  <p>Mis Match Percentage: ${info.misMatchPercentage}</p>
  <div class="imgline">
    <div class="imgcontainer">
      <span class="imgname">Reference</span>
      <img class="img2" src="${info.beforeUrl}" id="refImage" label="Reference">
    </div>
    <div class="imgcontainer">
      <span class="imgname">Test</span>
      <img class="img2" src="${info.afterUrl}" id="testImage" label="Test">
    </div>
  </div>
  <div class="imgline">
    <div class="imgcontainer">
      <span class="imgname">Diff</span>
      <img class="imgfull" src="${info.diffUrl}" id="diffImage" label="Diff">
    </div>
  </div>
  `;
}

function test(b, steps) {
  return `  
<div class=" browser" id="test0">
  <div class=" btitle">
      <h2 id="amber${steps[1].scenarioPosition}">Escenario ${b}</h2>
  </div>
  <div id="visualizer">${Object.keys(steps).map((b) => step(b, steps[b]))}</div>
</div>`;
}

function createLiElements(b, steps) {
  return `<li><a href="#amber${steps[1].scenarioPosition}">${b}</a></li>`;

}
function createReport(datetime, resInfo) {
  return `
  <html>
      <head>
          <title> VRT Report </title>
          <link href="index.css" type="text/css" rel="stylesheet">
      </head>
      <body>
      <div id="seccion-izquierda">
          <h1>Reporte de 
               Ghost VRT con ResembleJs
          </h1>
          <p>Fecha de ejecución: ${datetime}</p>

          <div id="tableOfContents">
        <h2>Escenarios presentes</h2>
        <ul>           
            ${Object.keys(resInfo).map((b) => createLiElements(b, resInfo[b]))}
        </ul>
    </div>       
    </div>   
    <div id="seccion-derecha">
          <div id="visualizer">
              ${Object.keys(resInfo).map((b) => test(b, resInfo[b]))}
          </div>
          </div>
      </body>
  </html>`;
}

(async () => console.log(await executeTest()))();

