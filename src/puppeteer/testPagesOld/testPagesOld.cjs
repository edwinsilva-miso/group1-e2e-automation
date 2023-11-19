const path = require('path');
const puppeteer = require('puppeteer');

function runEscenario14(user, pass, url) {
    (async () => {
        const browser = await puppeteer.launch({ headless: "new" });

        const page = await browser.newPage();
        await page.goto(url);
        await new Promise(r => setTimeout(r, 5000));

        // Tamaño de la pantalla
        await page.setViewport({ width: 1920, height: 1080 });

        // Llenar informacion
        await page.type('input[name="identification"]', user);
        await page.type('input[name="password"]', pass);
        await page.click('button[id="ember12"]');
        await new Promise(r => setTimeout(r, 7000));

        // Entrar Pages
        await page.click('a[href="#/pages/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Estado inicial
        await page.screenshot({ path: './testPagesOld/inicioTestPages.png' });

        // Editar Pages
        await page.click('a[href="#/editor/page/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Crear Pages
        await page.type('textarea.gh-editor-title.ember-text-area.gh-input.ember-view', 'pageTitle');
        await page.type('div[data-kg="editor"]', 'pageContent');

        // Creando pages
        await page.screenshot({ path: './testPagesOld/creandoPage.png' });
        await page.click('div.gh-publishmenu.ember-view');
        await page.click('button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view');
        await new Promise(r => setTimeout(r, 7000));

        // Pagina Publicada
        await page.screenshot({ path: './testPagesOld/publicacionCreada.png' });

        await page.click('a[href="#/pages/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Pagina Publicada (Escenario 14)
        await page.screenshot({ path: './testPagesOld/pageCreada.png' });

        console.log('Test Creacion page Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}


function runEscenario15(user, pass, url) {
    (async () => {
        const browser = await puppeteer.launch({ headless: "new" });

        const page = await browser.newPage();
        await page.goto(url);
        await new Promise(r => setTimeout(r, 5000));

        // Tamaño de la pantalla
        await page.setViewport({ width: 1920, height: 1080 });
        await new Promise(r => setTimeout(r, 20000));

        // Llenar informacion
        await page.type('input[name="identification"]', user);
        await page.type('input[name="password"]', pass);
        await page.click('button[id="ember12"]');
        await new Promise(r => setTimeout(r, 7000));

        // Entrar Pages
        await page.click('a[href="#/pages/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Editar Pages
        await page.click('a[href="#/editor/page/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Crear Pages (Draft)
        await page.type('textarea.gh-editor-title.ember-text-area.gh-input.ember-view', 'pageTitleDraft');
        await page.type('div[data-kg="editor"]', 'pageContentDraft');

        // Creando pages (Draft)
        await page.screenshot({ path: './testPagesOld/creandoPageDraft.png' });
        await new Promise(r => setTimeout(r, 7000));

        // Volver al menu pages
        await page.click('a[href="#/pages/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Draft Creado (Escenario 10)
        await page.screenshot({ path: './testPagesOld/pageDraftCreado.png' });

        console.log('Test Creacion de page Draft Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}


function runEscenario16(user, pass, url) {
    (async () => {
        const browser = await puppeteer.launch({ headless: "new" });

        const page = await browser.newPage();
        await page.goto(url);
        await new Promise(r => setTimeout(r, 5000));

        // Tamaño de la pantalla
        await page.setViewport({ width: 1920, height: 1080 });
        await new Promise(r => setTimeout(r, 20000));

        // Llenar informacion
        await page.type('input[name="identification"]', user);
        await page.type('input[name="password"]', pass);
        await page.click('button[id="ember12"]');
        await new Promise(r => setTimeout(r, 7000));

        // Entrar Pages
        await page.click('a[href="#/pages/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Editar Page
        await page.click('span.gh-content-status-published.nowrap');
        await new Promise(r => setTimeout(r, 7000));

        // Editando Page
        await page.screenshot({ path: './testPagesOld/antesEdicionPage.png' });

        await page.type('textarea.gh-editor-title.ember-text-area.gh-input.ember-view', 'Edit');
        await page.type('div[data-kg="editor"]', 'Edit');

        await page.screenshot({ path: './testPagesOld/despuesEdicionPage.png' });

        await page.click('div.gh-publishmenu.ember-view');
        await page.click('button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view');

        // Volver al menu pages
        await page.click('a[href="#/pages/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Page Editado (Escenario 11)
        await page.screenshot('./testPagesOld/pageEditado.png');

        console.log('Test Edicion page Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

module.exports = { runEscenario14, runEscenario15, runEscenario16 };