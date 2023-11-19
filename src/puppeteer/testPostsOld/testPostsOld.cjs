const puppeteer = require('puppeteer');

function runEscenario11(user, pass, url) {
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

        // Estado Inicial
        await page.screenshot({ path: './testPostsOld/inicioTestPosts.png' })

        // Crear Post
        await page.click('a[href="#/editor/post/"]');
        await page.type('textarea.gh-editor-title.ember-text-area.gh-input.ember-view', 'postTitle');
        await page.type('div[data-kg="editor"]', 'postContent');

        // Creando Post
        await page.screenshot({ path: './testPostsOld/creandoPost.png' })
        await page.click('div.gh-publishmenu.ember-view');
        await page.click('button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view');
        await new Promise(r => setTimeout(r, 7000));

        // Crear post (Escenario 11)
        await page.click('a[href="#/posts/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Captura post Creado
        await page.screenshot({ path: './testPostsOld/postCreado.png' });

        console.log('Test Creacion post Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

function runEscenario12(user, pass, url) {
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

        // Editar Post
        await page.click('a[href="#/editor/post/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Crear post (Draft)
        await page.type('textarea.gh-editor-title.ember-text-area.gh-input.ember-view', 'postTitleDraft');
        await page.type('div[data-kg="editor"]', 'postContentDraft');

        // Creando post (Draft)
        await page.screenshot({ path: './testPostsOld/creandoPostDraft.png' });
        await new Promise(r => setTimeout(r, 7000));

        // Volver al menu post (Escenario 12)
        await page.click('a[href="#/posts/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Draft Post Creado
        await page.screenshot({ path: './testPostsOld/postDraftCreado.png' });

        console.log('Test creacion draft post Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

function runEscenario13(user, pass, url) {
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

        // Entrar a Posts
        await page.click('a[href="#/posts/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Editar Post
        await page.click('span.gh-content-status-published.nowrap');
        await new Promise(r => setTimeout(r, 7000));

        // Editando post
        await page.screenshot({ path: './testPostsOld/antesEdicionPost.png' });

        await page.type('textarea.gh-editor-title.ember-text-area.gh-input.ember-view', 'edit');
        await page.type('div[data-kg="editor"]', 'edit');

        await page.screenshot({ path: './testPostsOld/despuesEdicionPost.png' });

        await page.click('div.gh-publishmenu.ember-view');
        await page.click('button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view');

        // Volver al menu post
        await page.click('a[href="#/posts/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Page Editado (Escenario 15)
        await page.screenshot({ path: './testPostsOld/postEditado.png' });

        console.log('Test edicion post Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

module.exports = { runEscenario11, runEscenario12, runEscenario13 };