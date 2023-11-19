const path = require('path');
const puppeteer = require('puppeteer');

// Expand menus
function expandPages(page) {
    page.evaluate(() => {
        Array.from(document.querySelectorAll('button.gh-btn.gh-btn-expand')).filter(button => {
            return button.innerText == 'Expand'
        }).forEach(element => {
            if (element) element.click();
        });
    });
}

function runEscenario17(user, pass, url) {
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

        // Entrar a Tags
        await page.click('a[href="#/tags/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Estado Inicial
        await page.screenshot({ path: './testTags/inicioCreacionTag.png' })

        // Crear Tags
        await page.click('a[href="#/tags/new/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Creando Tags
        await page.type('input[data-test-input="tag-name"]', 'testTag');
        await page.type('input[data-test-input="accentColor"]', '000000');
        await page.type('textarea[data-test-input="tag-description"]', 'testTag');
        await page.click('button[data-test-button="save"]');
        await new Promise(r => setTimeout(r, 7000));

        // Entrar a Tags
        await page.click('a[href="#/tags/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Captura tag creado (escenario 17)
        await page.screenshot({ path: './testTags/tagCreado.png' });

        console.log('Test Creacion tags Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

function runEscenario18(user, pass, url) {
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

        // Entrar a Tags
        await page.click('a[href="#/tags/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Editar Tag
        await page.click('h3[data-test-tag-name]');
        await page.type('input[data-test-input="tag-name"]', 'Edit');
        await page.type('textarea[data-test-input="tag-description"]', 'Edit');
        await new Promise(r => setTimeout(r, 7000));

        // Editando tag
        await page.screenshot({ path: './testTags/editandoTag.png' });

        // Editar tag
        await page.click('button[data-test-button="save"]');

        // Entrar a Tags
        await page.click('a[href="#/tags/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Captura tag editado (escenario 18)
        await page.screenshot({ path: './testTags/tagEditado.png' });

        console.log('Test Edicion tags Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

function runEscenario19(user, pass, url) {
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

        // Entrar a Tags
        await page.click('a[href="#/tags/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Eliminar Tag
        await page.click('h3[data-test-tag-name]');
        await page.click('button[data-test-button="delete-tag"]');
        await page.click('button[data-test-button="confirm"]');
        await new Promise(r => setTimeout(r, 7000));

        // Captura Tag Eliminado (Escenario 19)
        await page.screenshot({ path: './testTags/tagEliminado.png' });

        console.log('Test eliminacion tags Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

function runEscenario20(user, pass, url) {
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

        // Entrar a Tags
        await page.click('a[href="#/tags/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Creacion tag Metadata
        await page.click('a[href="#/tags/new/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Expand menus
        expandPages(page);

        // Crear Tags metadata
        await page.type('input[data-test-input="tag-name"]', 'testMetaData');
        await page.type('input[data-test-input="accentColor"]', '000000');
        await page.type('textarea[data-test-input="tag-description"]', 'testMetaData');
        await page.type('input[id="meta-title"]', 'metaTest');
        await page.type('textarea[id="meta-description"]', 'metaTest');
        await page.type('input[id="canonical-url"]', 'https://uniandes.edu.co/');

        // Creando tag Metadata
        await page.screenshot({ path: './testTags/creandoTagMetadata.png' });

        await page.click('button[data-test-button="save"]');
        await new Promise(r => setTimeout(r, 7000));

        await page.click('a[href="#/tags/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Creacion tag metadata (Escenario 20)
        await page.screenshot({ path: './testTags/tagMetaCreado.png' });

        console.log('Test Creacion Meta tags Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

function runEscenario21(user, pass, url) {
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

        // Entrar a Tags
        await page.click('a[href="#/tags/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Creacion tag X
        await page.click('a[href="#/tags/new/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Expand menus
        expandPages(page);

        // Creacion tag X card
        await page.type('input[data-test-input="tag-name"]', 'testXcard');
        await page.type('input[data-test-input="accentColor"]', '000000');
        await page.type('textarea[data-test-input="tag-description"]', 'testXcard');
        await page.type('input[id="twitter-title"]', 'XTest');
        await page.type('textarea[id="twitter-description"]', 'XTest');

        // Creando tag X card
        await page.screenshot({ path: './testTags/creandoTagXcard.png' });

        await page.click('button[data-test-button="save"]');
        await new Promise(r => setTimeout(r, 7000));

        await page.click('a[href="#/tags/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Creacion tag Xcard (Escenario 21)
        await page.screenshot({ path: './testTags/tagXCreado.png' });

        console.log('Test Creacion X tags Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

function runEscenario22(user, pass, url) {
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

        // Entrar a Tags
        await page.click('a[href="#/tags/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Creacion tag Facebook
        await page.click('a[href="#/tags/new/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Expand menus
        expandPages(page);

        // Creacion tag Facebook
        await page.type('input[data-test-input="tag-name"]', 'testFacebook');
        await page.type('input[data-test-input="accentColor"]', '000000');
        await page.type('textarea[data-test-input="tag-description"]', 'testFacebook');
        await page.type('input[id="og-title"]', 'FaceTest');
        await page.type('textarea[id="og-description"]', 'FaceTest');

        // Creando tag Facebook
        await page.screenshot({ path: './testTags/creandoTagFacebook.png' });

        await page.click('button[data-test-button="save"]');
        await new Promise(r => setTimeout(r, 7000));

        await page.click('a[href="#/tags/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Creacion tag Facebook (Escenario 22)
        await page.screenshot({ path: './testTags/tagFacebookCreado.png' });

        console.log('Test Creacion Facebook tags Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

function runEscenario23(user, pass, url) {
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

        // Entrar a Tags
        await page.click('a[href="#/tags/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Creacion tag Interno
        await page.click('button[data-test-tags-nav="internal"]');
        await page.click('a[href="#/tags/new/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Creando Tags internos
        await page.type('input[data-test-input="tag-name"]', '#testTagInternal');
        await page.type('input[data-test-input="accentColor"]', '000000');
        await page.type('textarea[data-test-input="tag-description"]', 'testTagInternal');

        // Creando Tags internos
        await page.click('button[data-test-button="save"]');
        await page.screenshot({ path: './testTags/creandoTagInterno.png' });

        // Entrar a Tags
        await page.click('a[href="#/tags/?type=internal"]');
        await new Promise(r => setTimeout(r, 7000));

        // Captura tag interno creado (escenario 23)
        await page.click('button[data-test-tags-nav="internal"]');
        await page.screenshot({ path: './testTags/tagInternalCreado.png' });

        console.log('Test Creacion internal tags Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

module.exports = { runEscenario17, runEscenario18, runEscenario19, runEscenario20, runEscenario21, runEscenario22, runEscenario23 };