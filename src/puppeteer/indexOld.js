export * from './config.js';
import { password, urlGhostNew, urlGhostOld, username } from './config.js';
import { runEscenario1, runEscenario2, runEscenario3, runEscenario4 } from './testInicioSesionOld/testInicioSesionOld.cjs';
import { runEscenario5, runEscenario6, runEscenario7, runEscenario8, runEscenario9, runEscenario10 } from './testTagsOld/testTagsOld.cjs';
import { runEscenario11, runEscenario12, runEscenario13 } from './testPostsOld/testPostsOld.cjs';
import { runEscenario14, runEscenario15, runEscenario16 } from './testPagesOld/testPagesOld.cjs';

const url = urlGhostOld;

(async () => {
  return executeEscenario1(url)
    .then(() => executeEscenario2(url))
    .then(() => executeEscenario3(username, password, url))
    .then(() => executeEscenario4(username, password, url))
    .then(() => executeEscenario5(username, password, url))
    .then(() => executeEscenario6(username, password, url))
    .then(() => executeEscenario7(username, password, url))
    .then(() => executeEscenario8(username, password, url))
    .then(() => executeEscenario9(username, password, url))
    .then(() => executeEscenario10(username, password, url))
    .then(() => executeEscenario11(username, password, url))
    .then(() => executeEscenario12(username, password, url))
    .then(() => executeEscenario13(username, password, url))
    .then(() => executeEscenario14(username, password, url))
    .then(() => executeEscenario15(username, password, url))
    .then(() => executeEscenario16(username, password, url));
})().catch(e => console.log(e));

function executeEscenario1(url) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(runEscenario1(url));
    }, 2000);
  });
}

function executeEscenario2(url) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(runEscenario2(url));
    }, 2000);
  });
}

function executeEscenario3(user, pass, url) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(runEscenario3(user, pass, url));
    }, 2000);
  });
}

function executeEscenario4(user, pass, url) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(runEscenario4(user, pass, url));
    }, 2000);
  });
}

function executeEscenario5(user, pass, url) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(runEscenario5(user, pass, url));
    }, 2000);
  });
}

function executeEscenario6(user, pass, url) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(runEscenario6(user, pass, url));
    }, 2000);
  });
}

function executeEscenario7(user, pass, url) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(runEscenario7(user, pass, url));
    }, 2000);
  });
}

function executeEscenario8(user, pass, url) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(runEscenario8(user, pass, url));
    }, 2000);
  });
}

function executeEscenario9(user, pass, url) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(runEscenario9(user, pass, url));
    }, 2000);
  });
}

function executeEscenario10(user, pass, url) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(runEscenario10(user, pass, url));
    }, 2000);
  });
}

function executeEscenario11(user, pass, url) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(runEscenario11(user, pass, url));
    }, 2000);
  });
}

function executeEscenario12(user, pass, url) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(runEscenario12(user, pass, url));
    }, 2000);
  });
}

function executeEscenario13(user, pass, url) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(runEscenario13(user, pass, url));
    }, 2000);
  });
}

function executeEscenario14(user, pass, url) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(runEscenario14(user, pass, url));
    }, 2000);
  });
}

function executeEscenario15(user, pass, url) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(runEscenario15(user, pass, url));
    }, 2000);
  });
}

function executeEscenario16(user, pass, url) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(runEscenario16(user, pass, url));
    }, 2000);
  });
}