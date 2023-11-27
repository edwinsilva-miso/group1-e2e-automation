export * from './config.js';
import { password, urlGhostNew, urlGhostOld, username } from './config.js';
import { runEscenario1, runEscenario2, runEscenario3, runEscenario4, runEscenario5, runEscenario6, runEscenario7, runEscenario8, runEscenario9, runEscenario10, runEscenario11, runEscenario12, runEscenario13, runEscenario14,runEscenario15, runEscenario16, runEscenario17, runEscenario18, runEscenario19, runEscenario20, runEscenario21,runEscenario22,runEscenario23,runEscenario24,runEscenario25,runEscenario26,runEscenario27 } from './testTagsFaker/testTagsFaker.js';
import { runEscenario28, runEscenario29, runEscenario30, runEscenario31, runEscenario32, runEscenario33 } from './testMemberFaker/testMemberFaker.js';
import { runEscenario34, runEscenario35, runEscenario36, runEscenario37, runEscenario38, runEscenario39, runEscenario40, runEscenario41, runEscenario42, runEscenario43, runEscenario44, runEscenario45, runEscenario46, runEscenario47, runEscenario48, runEscenario49, runEscenario50, runEscenario51, runEscenario52, runEscenario53  } from './testPostsFaker/testPostsFaker.js';
import { runEscenario54, runEscenario55, runEscenario56, runEscenario57 } from './testPagesFaker/testPagesFaker.js';

const url = urlGhostNew;

(async () => {
    return executeEscenario1(username, password, url)
    .then(() => executeEscenario2(username, password, url))
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
    .then(() => executeEscenario23(username, password, url))
    .then(() => executeEscenario24(username, password, url))
    .then(() => executeEscenario25(username, password, url))
    .then(() => executeEscenario26(username, password, url))
    .then(() => executeEscenario27(username, password, url))
    .then(() => executeEscenario28(username, password, url))
    .then(() => executeEscenario29(username, password, url))
    .then(() => executeEscenario30(username, password, url))
    .then(() => executeEscenario31(username, password, url))
    .then(() => executeEscenario32(username, password, url))
    .then(() => executeEscenario33(username, password, url))
    .then(() => executeEscenario34(username, password, url))
    .then(() => executeEscenario35(username, password, url))
    .then(() => executeEscenario36(username, password, url))
    .then(() => executeEscenario37(username, password, url))
    .then(() => executeEscenario38(username, password, url))
    .then(() => executeEscenario39(username, password, url))
    .then(() => executeEscenario40(username, password, url))
    .then(() => executeEscenario41(username, password, url))
    .then(() => executeEscenario42(username, password, url))
    .then(() => executeEscenario43(username, password, url))
    .then(() => executeEscenario44(username, password, url))
    .then(() => executeEscenario45(username, password, url))
    .then(() => executeEscenario46(username, password, url))
    .then(() => executeEscenario47(username, password, url))
    .then(() => executeEscenario48(username, password, url))
    .then(() => executeEscenario49(username, password, url))
    .then(() => executeEscenario50(username, password, url))
    .then(() => executeEscenario51(username, password, url))
    .then(() => executeEscenario52(username, password, url))
    .then(() => executeEscenario53(username, password, url))
    .then(() => executeEscenario54(username, password, url))
    .then(() => executeEscenario55(username, password, url))
    .then(() => executeEscenario56(username, password, url))
    .then(() => executeEscenario57(username, password, url))
    ;
})().catch(e => console.log(e));

function executeEscenario1(user, pass, url) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(runEscenario1(user, pass, url));
        }, 2000);
    });
}

function executeEscenario2(user, pass, url) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(runEscenario2(user, pass, url));
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

function executeEscenario24(user, pass, url) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(runEscenario24(user, pass, url));
        }, 2000);
    });
}

function executeEscenario25(user, pass, url) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(runEscenario25(user, pass, url));
        }, 2000);
    });
}

function executeEscenario26(user, pass, url) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(runEscenario26(user, pass, url));
        }, 2000);
    });
}

function executeEscenario27(user, pass, url) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(runEscenario27(user, pass, url));
        }, 2000);
    });
}

function executeEscenario28(user, pass, url) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(runEscenario28(user, pass, url));
        }, 2000);
    });
}

function executeEscenario29(user, pass, url) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(runEscenario29(user, pass, url));
        }, 2000);
    });
}

function executeEscenario30(user, pass, url) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(runEscenario30(user, pass, url));
        }, 2000);
    });
}

function executeEscenario31(user, pass, url) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(runEscenario31(user, pass, url));
        }, 2000);
    });
}

function executeEscenario32(user, pass, url) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(runEscenario32(user, pass, url));
        }, 2000);
    });
}

function executeEscenario33(user, pass, url) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(runEscenario33(user, pass, url));
        }, 2000);
    });
}

function executeEscenario34(user, pass, url) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(runEscenario34(user, pass, url));
        }, 2000);
    });
}

function executeEscenario35(user, pass, url) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(runEscenario35(user, pass, url));
        }, 2000);
    });
}

function executeEscenario36(user, pass, url) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(runEscenario36(user, pass, url));
        }, 2000);
    });
}

function executeEscenario37(user, pass, url) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(runEscenario37(user, pass, url));
        }, 2000);
    });
}

function executeEscenario38(user, pass, url) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(runEscenario38(user, pass, url));
        }, 2000);
    });
}

function executeEscenario39(user, pass, url) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(runEscenario39(user, pass, url));
        }, 2000);
    });
}

function executeEscenario40(user, pass, url) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(runEscenario40(user, pass, url));
        }, 2000);
    });
}

function executeEscenario41(user, pass, url) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(runEscenario41(user, pass, url));
        }, 2000);
    });
}

function executeEscenario42(user, pass, url) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(runEscenario42(user, pass, url));
        }, 2000);
    });
}

function executeEscenario43(user, pass, url) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(runEscenario43(user, pass, url));
        }, 2000);
    });
}

function executeEscenario44(user, pass, url) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(runEscenario44(user, pass, url));
        }, 2000);
    });
}

function executeEscenario45(user, pass, url) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(runEscenario45(user, pass, url));
        }, 2000);
    });
}

function executeEscenario47(user, pass, url) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(runEscenario47(user, pass, url));
        }, 2000);
    });
}

function executeEscenario48(user, pass, url) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(runEscenario48(user, pass, url));
        }, 2000);
    });
}

function executeEscenario49(user, pass, url) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(runEscenario49(user, pass, url));
        }, 2000);
    });
}

function executeEscenario50(user, pass, url) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(runEscenario50(user, pass, url));
        }, 2000);
    });
}

function executeEscenario51(user, pass, url) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(runEscenario51(user, pass, url));
        }, 2000);
    });
}

function executeEscenario52(user, pass, url) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(runEscenario52(user, pass, url));
        }, 2000);
    });
}

function executeEscenario53(user, pass, url) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(runEscenario53(user, pass, url));
        }, 2000);
    });
}

function executeEscenario54(user, pass, url) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(runEscenario54(user, pass, url));
        }, 2000);
    });
}

function executeEscenario55(user, pass, url) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(runEscenario55(user, pass, url));
        }, 2000);
    });
}

function executeEscenario56(user, pass, url) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(runEscenario56(user, pass, url));
        }, 2000);
    });
}

function executeEscenario57(user, pass, url) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(runEscenario57(user, pass, url));
        }, 2000);
    });
}