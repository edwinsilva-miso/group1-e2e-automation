export * from './config.js';
import { password, urlGhostNew, username } from './config.js';
import { runEscenario1, runEscenario2, runEscenario3, runEscenario4 } from './testInicioSesion/testInicioSesion.cjs';
import { runEscenario5, runEscenario6, runEscenario7, runEscenario8 } from './testMember/testMember.cjs';
import { runEscenario10, runEscenario11, runEscenario12, runEscenario9 } from './testPages/testPages.cjs';
import { runEscenario13, runEscenario14, runEscenario15, runEscenario16 } from './testPosts/testPost.cjs';
import { runEscenario17, runEscenario18, runEscenario19, runEscenario20, runEscenario21, runEscenario22, runEscenario23 } from './testTags/testTags.cjs';

const url = urlGhostNew;

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
    .then(() => executeEscenario16(username, password, url))
    .then(() => executeEscenario17(username, password, url))
    .then(() => executeEscenario18(username, password, url))
    .then(() => executeEscenario19(username, password, url))
    .then(() => executeEscenario20(username, password, url))
    .then(() => executeEscenario21(username, password, url))
    .then(() => executeEscenario22(username, password, url))
    .then(() => executeEscenario23(username, password, url));
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

function executeEscenario17(user, pass, url) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(runEscenario17(user, pass, url));
    }, 2000);
  });
}

function executeEscenario18(user, pass, url) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(runEscenario18(user, pass, url));
    }, 2000);
  });
}

function executeEscenario19(user, pass, url) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(runEscenario19(user, pass, url));
    }, 2000);
  });
}

function executeEscenario20(user, pass, url) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(runEscenario20(user, pass, url));
    }, 2000);
  });
}

function executeEscenario21(user, pass, url) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(runEscenario21(user, pass, url));
    }, 2000);
  });
}

function executeEscenario22(user, pass, url) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(runEscenario22(user, pass, url));
    }, 2000);
  });
}

function executeEscenario23(user, pass, url) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(runEscenario23(user, pass, url));
    }, 2000);
  });
}

