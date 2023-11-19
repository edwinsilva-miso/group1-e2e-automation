const path = require('path');
const puppeteer = require('puppeteer');

// Expand menus
function expandPages(page) {
    page.evaluate(() => {
        Array.from(document.querySelectorAll('button.gh-btn')).filter(button => {
            return button.innerText == 'Expand'
        }).forEach(element => {
            if (element) element.click();
        });
    });
}

function runEscenario5(user, pass, url) {
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
        await page.click('button[id="ember12"]')
        await new Promise(r => setTimeout(r, 7000));

        // Entrar a Tags
        await page.click('a[href="#/tags/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Estado Inicial
        await page.screenshot({ path: './testTagsOld/inicioCreacionTag.png' })

        // Crear Tags
        await page.click('a[href="#/tags/new/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Creando Tags
        await page.type('input[name="name"]', 'testTag');
        await page.type('input[name="accent-color"]', '000000');
        await page.type('textarea[name="description"]', 'testTag');
        await page.click('button.gh-btn.gh-btn-blue.gh-btn-icon.ember-view');
        await new Promise(r => setTimeout(r, 7000));

        // Entrar a Tags
        await page.click('a[href="#/tags/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Captura tag creado (escenario 17)
        await page.screenshot({ path: './testTagsOld/tagCreado.png' });

        console.log('Test Creacion tags Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

function runEscenario6(user, pass, url) {
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
        await page.click('button[id="ember12"]')
        await new Promise(r => setTimeout(r, 7000));

        // Entrar a Tags
        await page.click('a[href="#/tags/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Editar Tag
        await page.click('h3.gh-tag-list-name');
        await page.type('input[name="name"]', 'Edit');
        await page.type('textarea[name="description"]', 'Edit');
        await new Promise(r => setTimeout(r, 7000));

        // Editando tag
        await page.screenshot({ path: './testTagsOld/editandoTag.png' });

        // Editar tag
        await page.click('button.gh-btn.gh-btn-blue.gh-btn-icon.ember-view');

        // Entrar a Tags
        await page.click('a[href="#/tags/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Captura tag editado (escenario 18)
        await page.screenshot({ path: './testTagsOld/tagEditado.png' });

        console.log('Test Edicion tags Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

function runEscenario7(user, pass, url) {
    (async () => {
        const browser = await puppeteer.launch({ headless: "new" });

        const page = await browser.newPage();
        await page.goto(url);
        await new Promise(r => setTimeout(r, 5000));

        // Tamaño de la pantalla
        await page.setViewport({ width: 1920, height: 1080 });
        await new Promise(r => setTimeout(r, 35000));

        // Llenar informacion
        await page.type('input[name="identification"]', user);
        await page.type('input[name="password"]', pass);
        await page.click('button[id="ember12"]')
        await new Promise(r => setTimeout(r, 7000));

        // Entrar a Tags
        await page.click('a[href="#/tags/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Eliminar Tag
        await page.click('a[title="Edit tag"]');
        await page.click('button.gh-btn.gh-btn-red.gh-btn-icon.mb15');
        await page.click('button.gh-btn.gh-btn-red.gh-btn-icon.ember-view');
        await new Promise(r => setTimeout(r, 7000));

        // Captura Tag Eliminado (Escenario 19)
        await page.screenshot({ path: './testTagsOld/tagEliminado.png' });

        console.log('Test eliminacion tags Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

function runEscenario8(user, pass, url) {
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
        await page.click('button[id="ember12"]')
        await new Promise(r => setTimeout(r, 7000));

        // Entrar a Tags
        await page.click('a[href="#/tags/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Creacion tag Metadata
        await page.click('a[href="#/tags/new/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Expand menus
        expandPages(page);

        // Crear Tags metadata
        await page.type('input[name="name"]', 'testMetaData');
        await page.type('input[name="accent-color"]', '000000');
        await page.type('textarea[name="description"]', 'testMetaData');
        await page.type('input[name="metaTitle"]', 'metaTest');
        await page.type('textarea[name="metaDescription"]', 'metaTest');
        await page.type('input[name="canonicalUrl"]', 'https://uniandes.edu.co/');

        // Creando tag Metadata
        await page.screenshot({ path: './testTagsOld/creandoTagMetadata.png' });

        await page.click('button.gh-btn.gh-btn-blue.gh-btn-icon.ember-view');
        await new Promise(r => setTimeout(r, 7000));

        await page.click('a[href="#/tags/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Creacion tag metadata (Escenario 20)
        await page.screenshot({ path: './testTagsOld/tagMetaCreado.png' });

        console.log('Test Creacion Meta tags Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

function runEscenario9(user, pass, url) {
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
        await page.click('button[id="ember12"]')
        await new Promise(r => setTimeout(r, 7000));

        // Entrar a Tags
        await page.click('a[href="#/tags/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Creacion tag X
        await page.click('a[href="#/tags/new/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Expand menus
        expandPages(page);

        // Creacion tag X card
        await page.type('input[name="name"]', 'testXcard');
        await page.type('input[name="accent-color"]', '000000');
        await page.type('textarea[name="description"]', 'testXcard');
        await page.type('input[name="twitterTitle"]', 'XTest');
        await page.type('textarea[name="twitterDescription"]', 'XTest');

        // Creando tag X card
        await page.screenshot({ path: './testTagsOld/creandoTagXcard.png' });

        await page.click('button.gh-btn.gh-btn-blue.gh-btn-icon.ember-view');
        await new Promise(r => setTimeout(r, 7000));

        await page.click('a[href="#/tags/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Creacion tag Xcard (Escenario 21)
        await page.screenshot({ path: './testTagsOld/tagXCreado.png' });

        console.log('Test Creacion X tags Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

function runEscenario10(user, pass, url) {
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
        await page.click('button[id="ember12"]')
        await new Promise(r => setTimeout(r, 7000));

        // Entrar a Tags
        await page.click('a[href="#/tags/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Creacion tag Facebook
        await page.click('a[href="#/tags/new/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Expand menus
        expandPages(page);

        // Creacion tag Facebook
        await page.type('input[name="name"]', 'testFacebook');
        await page.type('input[name="accent-color"]', '000000');
        await page.type('textarea[name="description"]', 'testFacebook');
        await page.type('input[name="ogTitle"]', 'FaceTest');
        await page.type('textarea[name="ogDescription"]', 'FaceTest');

        // Creando tag Facebook
        await page.screenshot({ path: './testTagsOld/creandoTagFacebook.png' });

        await page.click('button.gh-btn.gh-btn-blue.gh-btn-icon.ember-view');
        await new Promise(r => setTimeout(r, 7000));

        await page.click('a[href="#/tags/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Creacion tag Facebook (Escenario 22)
        await page.screenshot({ path: './testTagsOld/tagFacebookCreado.png' });

        console.log('Test Creacion Facebook tags Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

module.exports = { runEscenario5, runEscenario6, runEscenario7, runEscenario8, runEscenario9, runEscenario10 };