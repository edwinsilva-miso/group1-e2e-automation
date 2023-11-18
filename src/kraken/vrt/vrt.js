const compareImages = require("resemblejs/compareImages");
const config = require("./config.json");
const fs = require("fs");

const { screenShotsPath, options } = config;

// Here we will define the tests to be used in the VRT
const tests = [
  {
    // Name of the scenario folder where the screenshots are located for the old version
    OLD_VERSION_FOLDER:
      "Como primer usuario inicio sesion y creo un tag publico-exitoso",
    // Name of the scenario folder where the screenshots are located for the latest version
    LASTEST_VERSION_FOLDER: "Crear borrador de post",
    // Name of the scenario
    SCENARIO_NAME: "Test1",
  },
  {
    OLD_VERSION_FOLDER: "Crear un miembro exitoso",
    LASTEST_VERSION_FOLDER: "Crear un Tag fallido (No se llena el formulario)",
    SCENARIO_NAME: "Test2",
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
  //Iterate over the tests
  for (let test of tests) {
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
      <h2>Scenario: ${b}</h2>
  </div>
  <div id="visualizer">
              ${Object.keys(steps).map((b) => step(b, steps[b]))}
          </div>
  
</div>`;
}

function createReport(datetime, resInfo) {
  return `
  <html>
      <head>
          <title> VRT Report </title>
          <link href="index.css" type="text/css" rel="stylesheet">
      </head>
      <body>
          <h1>Report for 
               Ghost VRT 
          </h1>
          <p>Executed: ${datetime}</p>
          <div id="visualizer">
              ${Object.keys(resInfo).map((b) => test(b, resInfo[b]))}
          </div>
      </body>
  </html>`;
}

(async () => console.log(await executeTest()))();
