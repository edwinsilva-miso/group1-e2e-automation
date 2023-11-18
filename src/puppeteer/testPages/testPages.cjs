const path = require('path');
const puppeteer = require('puppeteer');

function runEscenario9(user, pass) {
    (async () => {
        const browser = await puppeteer.launch({ headless: "new" });

        const page = await browser.newPage();
        await page.goto('http://localhost:2368/ghost/#/dashboard');
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
        await page.screenshot({ path: './testPages/inicioTestPages.png' });

        // Editar Pages
        await page.click('a[href="#/editor/page/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Crear Pages
        await page.type('textarea[data-test-editor-title-input]', 'pageTitle');
        await page.type('div.kg-prose', 'pageContent');

        // Creando pages
        await page.screenshot({ path: './testPages/creandoPage.png' });
        await page.click('button[data-test-button="publish-flow"]');
        await page.click('button[data-test-button="continue"]');
        await page.click('button[data-test-button="confirm-publish"]');
        await new Promise(r => setTimeout(r, 7000));

        // Pagina Publicada
        await page.screenshot({ path: './testPages/publicacionCreada.png' });

        // Volver al inicio
        await page.click('button[data-test-button="close-publish-flow"]');
        await new Promise(r => setTimeout(r, 7000));

        await page.click('a[data-test-link="pages"]');
        await new Promise(r => setTimeout(r, 7000));

        // Pagina Publicada (Escenario 9)
        await page.screenshot({ path: './testPages/pageCreada.png' });

        console.log('Test Creacion page Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}


function runEscenario10(user, pass) {
    (async () => {
        const browser = await puppeteer.launch({ headless: "new" });

        const page = await browser.newPage();
        await page.goto('http://localhost:2368/ghost/#/dashboard');
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
        await page.type('textarea[data-test-editor-title-input]', 'pageTitleDraft');
        await page.type('div.kg-prose', 'pageContenDraft');

        // Creando pages (Draft)
        await page.screenshot({ path: './testPages/creandoPageDraft.png' });
        await new Promise(r => setTimeout(r, 7000));

        // Volver al menu pages
        await page.click('a[data-test-link="pages"]');
        await new Promise(r => setTimeout(r, 7000));

        // Draft Creado (Escenario 10)
        await page.screenshot({ path: './testPages/pageDraftCreado.png' });

        console.log('Test Creacion de Draft Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}


function runEscenario11(user, pass) {
    (async () => {
        const browser = await puppeteer.launch({ headless: "new" });

        const page = await browser.newPage();
        await page.goto('http://localhost:2368/ghost/#/dashboard');
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

        // Editar Page
        await page.click('span.published');
        await new Promise(r => setTimeout(r, 7000));

        // Editando Page
        await page.screenshot({ path: './testPages/antesEdicionPage.png' });

        await page.type('textarea[data-test-editor-title-input]', 'Edit');
        await page.type('div.kg-prose', 'Edit');

        await page.screenshot({ path: './testPages/despuesEdicionPage.png' });

        await page.click('button[data-test-button="publish-save"]');

        // Volver al menu pages
        await page.click('a[data-test-link="pages"]');
        await new Promise(r => setTimeout(r, 7000));

        // Page Editado (Escenario 11)
        await page.screenshot('./testPages/pageEditado.png');

        console.log('Test Edicion page Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

function runEscenario12(user, pass) {
    (async () => {
        const browser = await puppeteer.launch({ headless: "new" });

        const page = await browser.newPage();
        await page.goto('http://localhost:2368/ghost/#/dashboard');
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
        await page.screenshot({ path: './testPages/quitarPublicacion.png' });

        // Quitando publicacion
        await page.click('button[data-test-button="revert-to-draft"]');
        await new Promise(r => setTimeout(r, 7000));

        // Volver al menu pages
        await page.click('a[data-test-link="pages"]');
        await new Promise(r => setTimeout(r, 7000));

        // Publicacion quitada (Escenario 12)
        await page.screenshot({ path: './testPages/pagePublicacionQuitada.png' });

        console.log('Test Eliminacion Publicacion Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

module.exports = { runEscenario9, runEscenario10, runEscenario11, runEscenario12 };