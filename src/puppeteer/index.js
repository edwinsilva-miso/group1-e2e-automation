export * from './config.js';
import { password, username } from './config.js';
import { runEscenario1, runEscenario2, runEscenario3, runEscenario4 } from './testInicioSesion/testInicioSesion.cjs';
import { runEscenario5, runEscenario6, runEscenario7, runEscenario8 } from './testMember/testMember.cjs';
import { runEscenario10, runEscenario11, runEscenario12, runEscenario9 } from './testPages/testPages.cjs';
import { runEscenario13, runEscenario14, runEscenario15, runEscenario16 } from './testPosts/testPost.cjs';
import { runEscenario17, runEscenario18, runEscenario19, runEscenario20, runEscenario21, runEscenario22, runEscenario23 } from './testTags/testTags.cjs';

(async () => {
  return executeEscenario1()
  .then(() => executeEscenario2())
  .then(() => executeEscenario3(username,password))
  .then(() => executeEscenario4(username,password))
  .then(() => executeEscenario5(username,password))
  .then(() => executeEscenario6(username,password))
  .then(() => executeEscenario7(username,password))
  .then(() => executeEscenario8(username,password))
  .then(() => executeEscenario9(username,password))
  .then(() => executeEscenario10(username,password))
  .then(() => executeEscenario11(username,password))
  .then(() => executeEscenario12(username,password))
  .then(() => executeEscenario13(username,password))
  .then(() => executeEscenario14(username,password))
  .then(() => executeEscenario15(username,password))
  .then(() => executeEscenario16(username,password))
  .then(() => executeEscenario17(username,password))
  .then(() => executeEscenario18(username,password))
  .then(() => executeEscenario19(username,password))
  .then(() => executeEscenario20(username,password))
  .then(() => executeEscenario21(username,password))
  .then(() => executeEscenario22(username,password))
  .then(() => executeEscenario23(username,password))
})().catch(e => console.log(e));

function executeEscenario1() {
  return new Promise(resolve => {
    setTimeout(() => {
        resolve(runEscenario1());
    }, 2000);
});
}

function executeEscenario2() {
  return new Promise(resolve => {
    setTimeout(() => {
        resolve(runEscenario2());
    }, 2000);
});
}

function executeEscenario3(user,pass) {
  return new Promise(resolve => {
    setTimeout(() => {
        resolve(runEscenario3(user,pass));
    }, 2000);
});
}

function executeEscenario4(user,pass) {
  return new Promise(resolve => {
    setTimeout(() => {
        resolve(runEscenario4(user,pass));
    }, 2000);
});
}

function executeEscenario5(user,pass) {
  return new Promise(resolve => {
    setTimeout(() => {
        resolve(runEscenario5(user,pass));
    }, 2000);
});
}

function executeEscenario6(user,pass) {
  return new Promise(resolve => {
    setTimeout(() => {
        resolve(runEscenario6(user,pass));
    }, 2000);
});
}

function executeEscenario7(user,pass) {
  return new Promise(resolve => {
    setTimeout(() => {
        resolve(runEscenario7(user,pass));
    }, 2000);
});
}

function executeEscenario8(user,pass) {
  return new Promise(resolve => {
    setTimeout(() => {
        resolve(runEscenario8(user,pass));
    }, 2000);
});
}