import {faker} from '@faker-js/faker';
import puppeteer from 'puppeteer';
import path from 'path';

function scrollElementIntoView(selector,page){
    page.evaluate((selector) => {
        setTimeout(() => {
          const element = document.querySelector(selector)
          if(element) {
            element.scrollIntoView();
          }
        }, 2000);
      }, selector)
}

// Escenario 28 Creacion Member
export function runEscenario28(user, pass, url) {
    (async () => {
        const browser = await puppeteer.launch({ headless: "new" });

        const page = await browser.newPage();
        await page.goto(url);
        await new Promise(r => setTimeout(r, 5000));

        // Tamaño de la pantalla
        await page.setViewport({ width: 1920, height: 1080 });

        // Llenar informacion
        await page.type('input[id="identification"]', user);
        await page.type('input[id="password"]', pass);
        await page.click('button[id="ember5"]')
        await new Promise(r => setTimeout(r, 7000));

        // Entrar en el apartado member
        await page.click('a[href="#/members/"]');
        await new Promise(r => setTimeout(r, 7000));

        // ir Crear member
        await page.click('a[href="#/members/new/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Estado Inicial
        await page.screenshot({ path: './testMemberFaker/inicioCreacionMember.png' })

        // Creacion member
        await page.type('input[data-test-input="member-name"]', faker.person.fullName());
        await page.type('input[data-test-input="member-email"]', faker.internet.email());
        await page.click('button[data-test-button="save"]');

        // Estado
        await page.screenshot({ path: './testMemberFaker/escenario28.png' });

        // Entrar en el apartado member
        await page.click('a[href="#/members/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Captura creacion de usuario (Escenario 28)
        await page.screenshot({ path: './testMemberFaker/escenario28_1.png' });

        console.log('Test Creacion Member Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

// Escenario 29 Edicion Member
export function runEscenario29(user, pass, url) {
    (async () => {
        const browser = await puppeteer.launch({ headless: "new" });

        const page = await browser.newPage();
        await page.goto(url);
        await new Promise(r => setTimeout(r, 5000));
        await new Promise(r => setTimeout(r, 7000));

        // Tamaño de la pantalla
        await page.setViewport({ width: 1920, height: 1080 });
        await new Promise(r => setTimeout(r, 20000));

        // Llenar informacion
        await page.type('input[id="identification"]', user);
        await page.type('input[id="password"]', pass);
        await page.click('button[id="ember5"]')
        await new Promise(r => setTimeout(r, 7000));

        // Entrar en el apartado member
        await page.click('a[href="#/members/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Editar member
        await page.click('h3.ma0.pa0.gh-members-list-name');

        // Estado
        await page.screenshot({ path: './testMemberFaker/escenario29.png' });

        await page.click('input[data-test-input="member-name"]', { clickCount: 3 });
        await page.keyboard.press('Backspace');
        await page.click('input[data-test-input="member-email"]', { clickCount: 3 });
        await page.keyboard.press('Backspace');
        await page.type('input[data-test-input="member-name"]', faker.person.fullName());
        await page.type('input[data-test-input="member-email"]', faker.internet.email());
        await page.click('button[data-test-button="save"]');

        // Estado
        await page.screenshot({ path: './testMemberFaker/escenario29_1.png' });

        // Entrar en el apartado member
        await page.click('a[href="#/members/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Captura creacion de usuario (Escenario 29)
        await page.screenshot({ path: './testMemberFaker/escenario29_2.png' });

        console.log('Test Edicion Member Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

// Escenario 30 Creacion Member fallido (Nombre demasiado largo)
export function runEscenario30(user, pass, url) {
    (async () => {
        const browser = await puppeteer.launch({ headless: "new" });

        const page = await browser.newPage();
        await page.goto(url);
        await new Promise(r => setTimeout(r, 5000));

        // Tamaño de la pantalla
        await page.setViewport({ width: 1920, height: 1080 });

        // Llenar informacion
        await page.type('input[id="identification"]', user);
        await page.type('input[id="password"]', pass);
        await page.click('button[id="ember5"]')
        await new Promise(r => setTimeout(r, 7000));

        // Entrar en el apartado member
        await page.click('a[href="#/members/"]');
        await new Promise(r => setTimeout(r, 7000));

        // ir Crear member
        await page.click('a[href="#/members/new/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Creacion member
        await page.type('input[data-test-input="member-name"]', faker.lorem.sentence(100));
        await page.type('input[data-test-input="member-email"]', faker.internet.email());
        await page.click('button[data-test-button="save"]');

        // Estado
        await page.screenshot({ path: './testMemberFaker/escenario30.png' });

        console.log('Test Creacion Member fallido (nombre demasiado largo) Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

// Escenario 31 Creacion Member fallido (email formato incorrecto)
export function runEscenario31(user, pass, url) {
    (async () => {
        const browser = await puppeteer.launch({ headless: "new" });

        const page = await browser.newPage();
        await page.goto(url);
        await new Promise(r => setTimeout(r, 5000));

        // Tamaño de la pantalla
        await page.setViewport({ width: 1920, height: 1080 });

        // Llenar informacion
        await page.type('input[id="identification"]', user);
        await page.type('input[id="password"]', pass);
        await page.click('button[id="ember5"]')
        await new Promise(r => setTimeout(r, 7000));

        // Entrar en el apartado member
        await page.click('a[href="#/members/"]');
        await new Promise(r => setTimeout(r, 7000));

        // ir Crear member
        await page.click('a[href="#/members/new/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Creacion member
        await page.type('input[data-test-input="member-name"]', faker.lorem.sentence());
        await page.type('input[data-test-input="member-email"]', faker.word.adjective());
        await page.click('button[data-test-button="save"]');

        // Estado
        await page.screenshot({ path: './testMemberFaker/escenario31.png' });

        console.log('Test Creacion Member fallido (email formato incorrecto) Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

// Escenario 32 Creacion Member Note
export function runEscenario32(user, pass, url) {
    (async () => {
        const browser = await puppeteer.launch({ headless: "new" });

        const page = await browser.newPage();
        await page.goto(url);
        await new Promise(r => setTimeout(r, 5000));

        // Tamaño de la pantalla
        await page.setViewport({ width: 1920, height: 1080 });

        // Llenar informacion
        await page.type('input[id="identification"]', user);
        await page.type('input[id="password"]', pass);
        await page.click('button[id="ember5"]')
        await new Promise(r => setTimeout(r, 7000));

        // Entrar en el apartado member
        await page.click('a[href="#/members/"]');
        await new Promise(r => setTimeout(r, 7000));

        // ir Crear member
        await page.click('a[href="#/members/new/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Creacion member
        await page.type('input[data-test-input="member-name"]', faker.person.fullName());
        await page.type('input[data-test-input="member-email"]', faker.internet.email());
        await page.type('textarea[data-test-input="member-note"]', faker.lorem.sentence());
        await page.click('button[data-test-button="save"]');

        // Estado
        await page.screenshot({ path: './testMemberFaker/escenario32.png' });

        // Entrar en el apartado member
        await page.click('a[href="#/members/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Captura creacion de usuario (Escenario 28)
        await page.screenshot({ path: './testMemberFaker/escenario32_1.png' });

        console.log('Test Creacion Member Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

// Escenario 33 Creacion Member fallido ( Note Demasiado largo)
export function runEscenario33(user, pass, url) {
    (async () => {
        const browser = await puppeteer.launch({ headless: "new" });

        const page = await browser.newPage();
        await page.goto(url);
        await new Promise(r => setTimeout(r, 5000));

        // Tamaño de la pantalla
        await page.setViewport({ width: 1920, height: 1080 });

        // Llenar informacion
        await page.type('input[id="identification"]', user);
        await page.type('input[id="password"]', pass);
        await page.click('button[id="ember5"]')
        await new Promise(r => setTimeout(r, 7000));

        // Entrar en el apartado member
        await page.click('a[href="#/members/"]');
        await new Promise(r => setTimeout(r, 7000));

        // ir Crear member
        await page.click('a[href="#/members/new/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Creacion member
        await page.type('input[data-test-input="member-name"]', faker.lorem.sentence());
        await page.type('input[data-test-input="member-email"]', faker.word.adjective());
        await page.type('textarea[data-test-input="member-note"]', faker.lorem.sentence(250));
        await page.click('button[data-test-button="save"]');

        // Estado
        await page.screenshot({ path: './testMemberFaker/escenario33.png' });

        console.log('Test Creacion Member fallido (Note demasiado larga) Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}


