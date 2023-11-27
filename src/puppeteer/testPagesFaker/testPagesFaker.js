import {faker} from '@faker-js/faker';
import puppeteer from 'puppeteer';
import path from 'path';

export function runEscenario54(user, pass, url) {
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

        // Entrar Pages
        await page.click('a[href="#/pages/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Estado inicial
        await page.screenshot({ path: './testPagesFaker/inicioTestPages.png' });

        // Editar Pages
        await page.click('a[href="#/editor/page/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Crear Pages
        await page.type('textarea[data-test-editor-title-input]', faker.lorem.words(3));
        await page.type('div.kg-prose', faker.lorem.paragraph(5));

        // Creando pages
        await page.screenshot({ path: './testPagesFaker/escenario54.png' });
        await page.click('button[data-test-button="publish-flow"]');
        await page.click('button[data-test-button="continue"]');
        await page.click('button[data-test-button="confirm-publish"]');
        await new Promise(r => setTimeout(r, 7000));

        // Pagina Publicada
        await page.screenshot({ path: './testPagesFaker/escenario54_1.png' });

        // Volver al inicio
        await page.click('button[data-test-button="close-publish-flow"]');
        await new Promise(r => setTimeout(r, 7000));

        await page.click('a[data-test-link="pages"]');
        await new Promise(r => setTimeout(r, 7000));

        // Pagina Publicada (Escenario 34)
        await page.screenshot({ path: './testPagesFaker/escenario54_2.png' });

        console.log('Test Creacion page Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}


export function runEscenario55(user, pass, url) {
    (async () => {
        const browser = await puppeteer.launch({ headless: "new" });

        const page = await browser.newPage();
        await page.goto(url);
        await new Promise(r => setTimeout(r, 5000));

        // Tamaño de la pantalla
        await page.setViewport({ width: 1920, height: 1080 });
        await new Promise(r => setTimeout(r, 20000));

        // Llenar informacion
        await page.type('input[id="identification"]', user);
        await page.type('input[id="password"]', pass);
        await page.click('button[id="ember5"]')
        await new Promise(r => setTimeout(r, 7000));

        // Entrar Pages
        await page.click('a[href="#/pages/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Editar Pages
        await page.click('a[href="#/editor/page/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Crear Pages (Draft)
        await page.type('textarea[data-test-editor-title-input]', faker.lorem.words(3));
        await page.type('div.kg-prose', faker.lorem.paragraph(5));

        // Creando pages (Draft)
        await page.screenshot({ path: './testPagesFaker/escenario55.png' });
        await new Promise(r => setTimeout(r, 7000));

        // Volver al menu pages
        await page.click('a[data-test-link="pages"]');
        await new Promise(r => setTimeout(r, 7000));

        // Draft Creado (Escenario 10)
        await page.screenshot({ path: './testPagesFaker/escenario55_1.png' });

        console.log('Test Creacion de Draft Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}


export function runEscenario56(user, pass, url) {
    (async () => {
        const browser = await puppeteer.launch({ headless: "new" });

        const page = await browser.newPage();
        await page.goto(url);
        await new Promise(r => setTimeout(r, 5000));

        // Tamaño de la pantalla
        await page.setViewport({ width: 1920, height: 1080 });
        await new Promise(r => setTimeout(r, 20000));

        // Llenar informacion
        await page.type('input[id="identification"]', user);
        await page.type('input[id="password"]', pass);
        await page.click('button[id="ember5"]')
        await new Promise(r => setTimeout(r, 7000));

        // Entrar Pages
        await page.click('a[href="#/pages/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Editar Page
        await page.click('span.published');
        await new Promise(r => setTimeout(r, 7000));

        // Editando Page
        await page.screenshot({ path: './testPagesFaker/escenario56.png' });

        await page.type('textarea[data-test-editor-title-input]', faker.lorem.words(3));
        await page.type('div.kg-prose', faker.lorem.paragraph(5));

        await page.screenshot({ path: './testPagesFaker/escenario56_1.png' });

        await page.click('button[data-test-button="publish-save"]');

        // Volver al menu pages
        await page.click('a[data-test-link="pages"]');
        await new Promise(r => setTimeout(r, 7000));

        // Page Editado (Escenario 11)
        await page.screenshot('./testPagesFaker/escenario56_2.png');

        console.log('Test Edicion page Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

export function runEscenario57(user, pass, url) {
    (async () => {
        const browser = await puppeteer.launch({ headless: "new" });

        const page = await browser.newPage();
        await page.goto(url);
        await new Promise(r => setTimeout(r, 5000));

        // Tamaño de la pantalla
        await page.setViewport({ width: 1920, height: 1080 });
        await new Promise(r => setTimeout(r, 35000));

        // Llenar informacion
        await page.type('input[id="identification"]', user);
        await page.type('input[id="password"]', pass);
        await page.click('button[id="ember5"]')
        await new Promise(r => setTimeout(r, 7000));

        // Entrar Pages
        await page.click('a[href="#/pages/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Unpublish page
        await page.click('span.published');
        await new Promise(r => setTimeout(r, 7000));

        await page.click('button[data-test-button="update-flow"]');
        await page.screenshot({ path: './testPagesFaker/escenario57.png' });

        // Quitando publicacion
        await page.click('button[data-test-button="revert-to-draft"]');
        await new Promise(r => setTimeout(r, 7000));

        // Volver al menu pages
        await page.click('a[data-test-link="pages"]');
        await new Promise(r => setTimeout(r, 7000));

        // Publicacion quitada (Escenario 12)
        await page.screenshot({ path: './testPagesFaker/escenario57_1.png' });

        console.log('Test Eliminacion Publicacion Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}