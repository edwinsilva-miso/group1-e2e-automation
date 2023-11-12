const path = require('path');
const puppeteer = require('puppeteer');

function testTags() {
    (async () => {
        // Tags
        const browser = await puppeteer.launch({ headless: "new" });

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

        const page = await browser.newPage();
        await page.goto('http://localhost:2368/ghost/#/dashboard');
        await new Promise(r => setTimeout(r, 5000));

        // Tamaño de la pantalla
        await page.setViewport({ width: 1920, height: 1080 });

        // Inicio de Sesion
        await page.type('input[id="identification"]', 'j.tibaquira@uniandes.edu.co');
        await page.type('input[id="password"]', 'Tiba09192000*');
        await page.click('button[id="ember5"]')
        await new Promise(r => setTimeout(r, 7000));

        // Entrar a Tags
        await page.click('a[href="#/tags/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Estado Inicial
        await page.screenshot({ path: './inicioCreacionTag.png' })

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

        // Captura tag creado (escenario 1)
        await page.screenshot({ path: './tagCreado.png' });
        console.log('Escenario 1');

        // Editar Tag
        await page.click('h3[data-test-tag-name]');
        await page.type('input[data-test-input="tag-name"]', 'Edit');
        await page.type('textarea[data-test-input="tag-description"]', 'Edit');
        await new Promise(r => setTimeout(r, 7000));

        // Editando tag
        await page.screenshot({ path: './editandoTag.png' });

        // Editar tag
        await page.click('button[data-test-button="save"]');

        // Entrar a Tags
        await page.click('a[href="#/tags/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Captura tag editado (escenario 2)
        await page.screenshot({ path: './tagEditado.png' });
        console.log('Escenario 2');

        // Eliminar Tag
        await page.click('h3[data-test-tag-name]');
        await page.click('button[data-test-button="delete-tag"]');
        await page.click('button[data-test-button="confirm"]');
        await new Promise(r => setTimeout(r, 7000));

        // Captura Tag Eliminado
        await page.screenshot({ path: './tagEliminado.png' });
        console.log('Escenario 3');

        // Creacion tag Metadata
        await page.click('a[href="#/tags/new/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Expand menus
        expandPages(page);

        // Crear Tags metadata
        await page.type('input[data-test-input="tag-name"]', 'testMetadata');
        await page.type('input[data-test-input="accentColor"]', '000000');
        await page.type('textarea[data-test-input="tag-description"]', 'testMetadata');
        await page.type('input[id="meta-title"]', 'metaTest');
        await page.type('textarea[id="meta-description"]', 'metaTest');
        await page.type('input[id="canonical-url"]', 'https://uniandes.edu.co/');

        // Creando tag Metadata
        await page.screenshot({ path: './creandoTagMetadata.png' });

        await page.click('button[data-test-button="save"]');
        await page.click('a[href="#/tags/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Creacion tag metadata
        await page.screenshot({ path: './tagMetaCreado.png' });
        console.log('Escenario 4');

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
        await page.screenshot({ path: './creandoTagXcard.png' });

        await page.click('button[data-test-button="save"]');
        await page.click('a[href="#/tags/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Creacion tag Xcard
        await page.screenshot({ path: './tagXCreado.png' });
        console.log('Escenario 5');

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
        await page.screenshot({ path: './creandoTagFacebook.png' });

        await page.click('button[data-test-button="save"]');
        await page.click('a[href="#/tags/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Creacion tag Facebook
        await page.screenshot({ path: './tagFacebookCreado.png' });
        console.log('Escenario 6');

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
        await page.screenshot({ path: './creandoTagInterno.png' });

        // Entrar a Tags
        await page.click('a[href="#/tags/?type=internal"]');
        await new Promise(r => setTimeout(r, 7000));

        // Captura tag interno creado (escenario 1)
        await page.click('button[data-test-tags-nav="internal"]');
        await page.screenshot({ path: './tagInternalCreado.png' });
        console.log('Escenario 7');

        // Cerrar Sesion
        await page.click('div.ember-view.ember-basic-dropdown-trigger');
        await page.click('a.ember-view.dropdown-item.user-menu-signout');

        console.log('Tests Tags Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}