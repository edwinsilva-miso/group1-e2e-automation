const puppeteer = require('puppeteer');

function runEscenario13(user, pass, url) {
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

        // Estado Inicial
        await page.screenshot({ path: './testPosts/inicioTestPosts.png' })

        // Crear Post
        await page.click('a[href="#/editor/post/"]');
        await page.type('textarea[data-test-editor-title-input]', 'postTitle');
        await page.type('div.kg-prose', 'postContent');
        await page.screenshot({ path: './testPosts/creandoPost.png' })
        await page.click('button[data-test-button="publish-flow"]');
        await page.click('button[data-test-button="continue"]');
        await page.click('button[data-test-button="confirm-publish"]');
        await new Promise(r => setTimeout(r, 7000));

        // Volver al inicio
        await page.click('button[data-test-button="close-publish-flow"]');
        await new Promise(r => setTimeout(r, 7000));

        // Crear post (Escenario 13)
        await page.click('a[data-test-link="posts"]');
        await new Promise(r => setTimeout(r, 7000));

        // Captura post Creado
        await page.screenshot({ path: './testPosts/postCreado.png' });

        console.log('Test Creacion post Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

function runEscenario14(user, pass, url) {
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

        // Editar Post
        await page.click('a[href="#/editor/post/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Crear post (Draft)
        await page.type('textarea[data-test-editor-title-input]', 'postTitleDraft');
        await page.type('div.kg-prose', 'postContentDraft');

        // Creando post (Draft)
        await page.screenshot({ path: './testPosts/creandoPostDraft.png' });
        await new Promise(r => setTimeout(r, 7000));

        // Volver al menu post
        await page.click('a[data-test-link="posts"]');
        await new Promise(r => setTimeout(r, 7000));

        // Draft Post Creado (Escenario 2)
        await page.screenshot({ path: './testPosts/postDraftCreado.png' });

        console.log('Test creacion draft post Done');
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

        // Llenar informacion
        await page.type('input[id="identification"]', user);
        await page.type('input[id="password"]', pass);
        await page.click('button[id="ember5"]')
        await new Promise(r => setTimeout(r, 7000));

        // Entrar a Posts
        await page.click('a[href="#/posts/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Editar Post
        await page.click('span.published');
        await new Promise(r => setTimeout(r, 7000));

        // Editando post
        await page.screenshot({ path: './testPosts/antesEdicionPost.png' });

        await page.type('textarea[data-test-editor-title-input]', 'edit');
        await page.type('div.kg-prose', 'edit');

        await page.screenshot({ path: './testPosts/despuesEdicionPost.png' });

        await page.click('button[data-test-button="publish-save"]');

        // Volver al menu post
        await page.click('a[data-test-link="posts"]');
        await new Promise(r => setTimeout(r, 7000));

        // Page Editado (Escenario 15)
        await page.screenshot({ path: './testPosts/postEditado.png' });

        console.log('Test edicion post Done');
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
        await new Promise(r => setTimeout(r, 35000));

        // Llenar informacion
        await page.type('input[id="identification"]', user);
        await page.type('input[id="password"]', pass);
        await page.click('button[id="ember5"]')
        await new Promise(r => setTimeout(r, 7000));

        // Entrar a Posts
        await page.click('a[href="#/posts/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Unpublish post
        await page.click('span.published');
        await new Promise(r => setTimeout(r, 7000));

        await page.click('button[data-test-button="update-flow"]');
        await page.screenshot({ path: './testPosts/quitarPublicacion.png' });

        // Quitando publicacion
        await page.click('button[data-test-button="revert-to-draft"]');
        await new Promise(r => setTimeout(r, 7000));

        // Volver al menu post
        await page.click('a[data-test-link="posts"]');
        await new Promise(r => setTimeout(r, 7000));

        // Captura post eliminado 
        await page.screenshot({ path: './testPosts/postPublicacionQuitada.png' });

        console.log('Test eliminacion post Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

module.exports = { runEscenario13, runEscenario14, runEscenario15, runEscenario16 };