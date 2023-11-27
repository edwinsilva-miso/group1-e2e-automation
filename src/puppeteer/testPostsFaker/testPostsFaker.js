import puppeteer from 'puppeteer';
import faker from '@fakerjs'

// Scenario 34 - Create new post
export function runEscenario34(user, pass, url) {
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

        await page.click('a[href="#/editor/post/"]');
        await page.type('textarea[data-test-editor-title-input]', faker.lorem.text());
        await page.type('div.kg-prose', faker.lorem.sentences());
        
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
        await page.screenshot({ path: './testPosts/scenario34.png' });

        // End test
        console.log('Test Creacion Post Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

// Scenario 35 - Create post with title out of index
export function runEscenario35(user, pass, url) {
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

        await page.click('a[href="#/editor/post/"]');
        await page.type('textarea[data-test-editor-title-input]', faker.lorem.word(256));
        await page.type('div.kg-prose', faker.lorem.sentences());
        
        await page.screenshot({ path: './testPosts/scenario35_title_error.png' });

        // Volver al inicio
        await page.click('button[data-test-button="close-publish-flow"]');
        await new Promise(r => setTimeout(r, 7000));

        // Crear post 
        await page.click('a[data-test-link="posts"]');
        await new Promise(r => setTimeout(r, 7000));

        // Captura post Creado
        await page.screenshot({ path: './testPosts/scenario35.png' });

        // End test
        console.log('Test Creacion Post con límite de título Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

// Scenario 36 - Create post draft
export function runEscenario36(user, pass, url) {
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
        await page.type('textarea[data-test-editor-title-input]', faker.lorem.word());
        await page.type('div.kg-prose', faker.lorem.sentences());
        await new Promise(r => setTimeout(r, 7000));

        // Volver al menu post
        await page.click('a[data-test-link="posts"]');
        await new Promise(r => setTimeout(r, 7000));

        // Draft Post Creado (Escenario 2)
        await page.screenshot({ path: './testPosts/scenario36.png' });

        console.log('Test creacion draft post Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

// Scenario 37 - Edit post
export function runEscenario37(user, pass, url) {
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

        // Entrar a Posts
        await page.click('a[href="#/posts/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Editar Post
        await page.click('span.published');
        await new Promise(r => setTimeout(r, 7000));

        await page.type('textarea[data-test-editor-title-input]', faker.lorem.word());
        await page.type('div.kg-prose', faker.lorem.sentences());

        await page.click('button[data-test-button="publish-save"]');

        // Volver al menu post
        await page.click('a[data-test-link="posts"]');
        await new Promise(r => setTimeout(r, 7000));

        // Page Editado (Escenario 15)
        await page.screenshot({ path: './testPosts/scenario37.png' });

        console.log('Test edicion post Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

// Scenario 38 - Create a post with 1000 sentences
export function runEscenario38(user, pass, url) {
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

        await page.click('a[href="#/editor/post/"]');
        await page.type('textarea[data-test-editor-title-input]', faker.lorem.text());
        await page.type('div.kg-prose', faker.lorem.sentences(1000, '\n'));
        
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
        await page.screenshot({ path: './testPosts/scenario38.png' });

        // End test
        console.log('Test Creacion Post Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

// Scenario 39 - Create a post with 1000 sentences
export function runEscenario39(user, pass, url) {
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

        await page.click('a[href="#/editor/post/"]');
        await page.type('textarea[data-test-editor-title-input]', faker.lorem.text());
        await page.type('div.kg-prose', faker.lorem.sentences());
        
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
        await page.screenshot({ path: './testPosts/scenario39.png' });

        // End test
        console.log('Test Creacion Post Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

// Scenario 40 - Create a post changing URL
export function runEscenario40(user, pass, url) {
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

        await page.click('a[href="#/editor/post/"]');
        await page.type('textarea[data-test-editor-title-input]', faker.lorem.text());
        await page.type('div.kg-prose', faker.lorem.sentences());

        // Expand menus
        await page.click('button[data-test-psm-trigger]');
        await new Promise(r => setTimeout(r, 2000));

        // Write excerpt
        await page.type('input[id="url"]', faker.lorem.word());
        await new Promise(r => setTimeout(r, 2000));
        
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
        await page.screenshot({ path: './testPosts/scenario40.png' });

        // End test
        console.log('Test Creacion Post Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

// Scenario 41 - Create a post with extra-long URL
export function runEscenario41(user, pass, url) {
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

        await page.click('a[href="#/editor/post/"]');
        await page.type('textarea[data-test-editor-title-input]', faker.lorem.text());
        await page.type('div.kg-prose', faker.lorem.sentences());

        // Expand menus
        await page.click('button[data-test-psm-trigger]');
        await new Promise(r => setTimeout(r, 2000));

        // Write url with 1000 characters
        await page.type('input[id="url"]', faker.lorem.word(1000));
        await new Promise(r => setTimeout(r, 2000));
        
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
        await page.screenshot({ path: './testPosts/scenario41.png' });

        // End test
        console.log('Test Creacion Post Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

// Scenario 42 - Create a post with excerpt
export function runEscenario42(user, pass, url) {
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

        await page.click('a[href="#/editor/post/"]');
        await page.type('textarea[data-test-editor-title-input]', faker.lorem.text());
        await page.type('div.kg-prose', faker.lorem.sentences());

        // Expand menus
        await page.click('button[data-test-psm-trigger]');
        await new Promise(r => setTimeout(r, 2000));

        // Write excerpt
        await page.type('textarea[id="custom-excerpt"]', faker.lorem.sentences());
        await new Promise(r => setTimeout(r, 2000));

        // Confirm post
        await page.click('button[data-test-button="publish-flow"]');
        await page.click('button[data-test-button="continue"]');
        await page.click('button[data-test-button="confirm-publish"]');
        await new Promise(r => setTimeout(r, 7000));

        // Go back posts
        await page.click('button[data-test-button="close-publish-flow"]');
        await new Promise(r => setTimeout(r, 7000));

        // Create post
        await page.click('a[data-test-link="posts"]');
        await new Promise(r => setTimeout(r, 7000));

        // Screenshot
        await page.screenshot({ path: './testPosts/scenario42.png' });

        // End test
        console.log('Test Creacion Post con extracto Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

// Scenario 43 - Create a post with extra-long excerpt
export function runEscenario43(user, pass, url) {
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

        await page.click('a[href="#/editor/post/"]');
        await page.type('textarea[data-test-editor-title-input]', faker.lorem.text());
        await page.type('div.kg-prose', faker.lorem.sentences());

        // Expand menus
        await page.click('button[data-test-psm-trigger]');
        await new Promise(r => setTimeout(r, 2000));

        // Write excerpt
        await page.type('textarea[id="custom-excerpt"]', faker.lorem.word(1000));
        await new Promise(r => setTimeout(r, 2000));

        // Confirm post
        await page.click('button[data-test-button="publish-flow"]');
        await page.click('button[data-test-button="continue"]');
        await page.click('button[data-test-button="confirm-publish"]');
        await new Promise(r => setTimeout(r, 7000));

        // Go back posts
        await page.click('button[data-test-button="close-publish-flow"]');
        await new Promise(r => setTimeout(r, 7000));

        // Create post
        await page.click('a[data-test-link="posts"]');
        await new Promise(r => setTimeout(r, 7000));

        // Screenshot
        await page.screenshot({ path: './testPosts/scenario43.png' });

        // End test
        console.log('Test Creacion Post con extracto Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

// Scenario 44 - Create a post for Google
export function runEscenario44(user, pass, url) {
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

        await page.click('a[href="#/editor/post/"]');
        await page.type('textarea[data-test-editor-title-input]', faker.lorem.text());
        await page.type('div.kg-prose', faker.lorem.sentences());

        // Expand menus
        await page.click('button[data-test-psm-trigger]');
        await new Promise(r => setTimeout(r, 2000));

        await page.click('button[data-test-button="meta-data"]');
        await new Promise(r => setTimeout(r, 2000));

        // Write Google properties
        await page.type('input[data-test-field="meta-title"]', faker.lorem.text());
        await page.type('textarea[data-test-field="meta-description"]', faker.lorem.sentences());
        await page.type('input[data-test-field="canonicalUrl"]', faker.internet.url());
        await new Promise(r => setTimeout(r, 2000));

        // Confirm post
        await page.click('button[data-test-button="publish-flow"]');
        await page.click('button[data-test-button="continue"]');
        await page.click('button[data-test-button="confirm-publish"]');
        await new Promise(r => setTimeout(r, 7000));

        // Go back posts
        await page.click('button[data-test-button="close-publish-flow"]');
        await new Promise(r => setTimeout(r, 7000));

        // Create post
        await page.click('a[data-test-link="posts"]');
        await new Promise(r => setTimeout(r, 7000));

        // Screenshot
        await page.screenshot({ path: './testPosts/scenario44.png' });

        // End test
        console.log('Test Creacion Post para Google Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

// Scenario 45 - Create a post for Google - Extra-long title
export function runEscenario45(user, pass, url) {
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

        await page.click('a[href="#/editor/post/"]');
        await page.type('textarea[data-test-editor-title-input]', faker.lorem.text());
        await page.type('div.kg-prose', faker.lorem.sentences());

        // Expand menus
        await page.click('button[data-test-psm-trigger]');
        await new Promise(r => setTimeout(r, 2000));

        await page.click('button[data-test-button="meta-data"]');
        await new Promise(r => setTimeout(r, 2000));

        // Write Google properties
        await page.type('input[data-test-field="meta-title"]', faker.lorem.text(61));
        await page.type('textarea[data-test-field="meta-description"]', faker.lorem.sentences());
        await page.type('input[data-test-field="canonicalUrl"]', faker.internet.url());
        await new Promise(r => setTimeout(r, 2000));

        // Screenshot
        await page.screenshot({ path: './testPosts/scenario45.png' });

        // End test
        console.log('Test Creacion Post para Google Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

// Scenario 46 - Create a post for Google - Extra-long description
export function runEscenario46(user, pass, url) {
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

        await page.click('a[href="#/editor/post/"]');
        await page.type('textarea[data-test-editor-title-input]', faker.lorem.text());
        await page.type('div.kg-prose', faker.lorem.sentences());

        // Expand menus
        await page.click('button[data-test-psm-trigger]');
        await new Promise(r => setTimeout(r, 2000));

        await page.click('button[data-test-button="meta-data"]');
        await new Promise(r => setTimeout(r, 2000));

        // Write Google properties
        await page.type('input[data-test-field="meta-title"]', faker.lorem.text());
        await page.type('textarea[data-test-field="meta-description"]', faker.lorem.sentences(146));
        await page.type('input[data-test-field="canonicalUrl"]', faker.internet.url());
        await new Promise(r => setTimeout(r, 2000));

        // Screenshot
        await page.screenshot({ path: './testPosts/scenario46.png' });

        // End test
        console.log('Test Creacion Post para Google Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

// Scenario 47 - Create a post for Google - Invalid URL
export function runEscenario47(user, pass, url) {
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

        await page.click('a[href="#/editor/post/"]');
        await page.type('textarea[data-test-editor-title-input]', faker.lorem.text());
        await page.type('div.kg-prose', faker.lorem.sentences());

        // Expand menus
        await page.click('button[data-test-psm-trigger]');
        await new Promise(r => setTimeout(r, 2000));

        await page.click('button[data-test-button="meta-data"]');
        await new Promise(r => setTimeout(r, 2000));

        // Write Google properties
        await page.type('input[data-test-field="meta-title"]', faker.lorem.text());
        await page.type('textarea[data-test-field="meta-description"]', faker.lorem.sentences());
        await page.type('input[data-test-field="canonicalUrl"]', faker.lorem.word());
        await new Promise(r => setTimeout(r, 2000));

        // Confirm post
        await page.click('button[data-test-button="publish-flow"]');
        await new Promise(r => setTimeout(r, 7000));

        // Screenshot
        await page.screenshot({ path: './testPosts/scenario47.png' });

        // End test
        console.log('Test Creacion Post para Google Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

// Scenario 48 - Create a post for Twitter
export function runEscenario48(user, pass, url) {
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

        await page.click('a[href="#/editor/post/"]');
        await page.type('textarea[data-test-editor-title-input]', faker.lorem.text());
        await page.type('div.kg-prose', faker.lorem.sentences());

        // Expand menus
        await page.click('button[data-test-psm-trigger]');
        await new Promise(r => setTimeout(r, 2000));

        await page.click('button[data-test-button="twitter-data"]');
        await new Promise(r => setTimeout(r, 2000));

        // Write Twitter properties
        await page.type('input[name="post-setting-twitter-title"]', faker.lorem.text());
        await page.type('textarea[name="post-setting-twitter-description"]', faker.lorem.sentences());
        await new Promise(r => setTimeout(r, 2000));

        // Confirm post
        await page.click('button[data-test-button="publish-flow"]');
        await page.click('button[data-test-button="continue"]');
        await page.click('button[data-test-button="confirm-publish"]');
        await new Promise(r => setTimeout(r, 7000));

        // Go back posts
        await page.click('button[data-test-button="close-publish-flow"]');
        await new Promise(r => setTimeout(r, 7000));

        // Create post
        await page.click('a[data-test-link="posts"]');
        await new Promise(r => setTimeout(r, 7000));

        // Screenshot
        await page.screenshot({ path: './testPosts/scenario48.png' });

        // End test
        console.log('Test Creacion Post para Google Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

// Scenario 49 - Create a post for Twitter - Extra-long title
export function runEscenario49(user, pass, url) {
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

        await page.click('a[href="#/editor/post/"]');
        await page.type('textarea[data-test-editor-title-input]', faker.lorem.text());
        await page.type('div.kg-prose', faker.lorem.sentences());

        // Expand menus
        await page.click('button[data-test-psm-trigger]');
        await new Promise(r => setTimeout(r, 2000));

        await page.click('button[data-test-button="twitter-data"]');
        await new Promise(r => setTimeout(r, 2000));

        // Write Twitter properties
        await page.type('input[name="post-setting-twitter-title"]', faker.lorem.text(1000));
        await page.type('textarea[name="post-setting-twitter-description"]', faker.lorem.sentences());
        await new Promise(r => setTimeout(r, 2000));

        // Confirm post
        await page.click('button[data-test-button="publish-flow"]');
        await page.click('button[data-test-button="continue"]');
        await page.click('button[data-test-button="confirm-publish"]');
        await new Promise(r => setTimeout(r, 7000));

        // Go back posts
        await page.click('button[data-test-button="close-publish-flow"]');
        await new Promise(r => setTimeout(r, 7000));

        // Create post
        await page.click('a[data-test-link="posts"]');
        await new Promise(r => setTimeout(r, 7000));

        // Screenshot
        await page.screenshot({ path: './testPosts/scenario49.png' });

        // End test
        console.log('Test Creacion Post para Google Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

// Scenario 50 - Create a post for Twitter - Extra-long description
export function runEscenario50(user, pass, url) {
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

        await page.click('a[href="#/editor/post/"]');
        await page.type('textarea[data-test-editor-title-input]', faker.lorem.text());
        await page.type('div.kg-prose', faker.lorem.sentences());

        // Expand menus
        await page.click('button[data-test-psm-trigger]');
        await new Promise(r => setTimeout(r, 2000));

        await page.click('button[data-test-button="twitter-data"]');
        await new Promise(r => setTimeout(r, 2000));

        // Write Twitter properties
        await page.type('input[name="post-setting-twitter-title"]', faker.lorem.text());
        await page.type('textarea[name="post-setting-twitter-description"]', faker.lorem.text(1000));
        await new Promise(r => setTimeout(r, 2000));

        // Confirm post
        await page.click('button[data-test-button="publish-flow"]');
        await page.click('button[data-test-button="continue"]');
        await page.click('button[data-test-button="confirm-publish"]');
        await new Promise(r => setTimeout(r, 7000));

        // Go back posts
        await page.click('button[data-test-button="close-publish-flow"]');
        await new Promise(r => setTimeout(r, 7000));

        // Create post
        await page.click('a[data-test-link="posts"]');
        await new Promise(r => setTimeout(r, 7000));

        // Screenshot
        await page.screenshot({ path: './testPosts/scenario50.png' });

        // End test
        console.log('Test Creacion Post para Google Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

// Scenario 51 - Create a post for Facebook
export function runEscenario51(user, pass, url) {
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

        await page.click('a[href="#/editor/post/"]');
        await page.type('textarea[data-test-editor-title-input]', faker.lorem.text());
        await page.type('div.kg-prose', faker.lorem.sentences());

        // Expand menus
        await page.click('button[data-test-psm-trigger]');
        await new Promise(r => setTimeout(r, 2000));

        await page.click('button[data-test-button="facebook-data"]');
        await new Promise(r => setTimeout(r, 2000));

        // Write Facebook properties
        await page.type('input[name="post-setting-og-title"]', faker.lorem.text());
        await page.type('textarea[name="post-setting-og-description"]', faker.lorem.sentences());
        await new Promise(r => setTimeout(r, 2000));

        // Confirm post
        await page.click('button[data-test-button="publish-flow"]');
        await page.click('button[data-test-button="continue"]');
        await page.click('button[data-test-button="confirm-publish"]');
        await new Promise(r => setTimeout(r, 7000));

        // Go back posts
        await page.click('button[data-test-button="close-publish-flow"]');
        await new Promise(r => setTimeout(r, 7000));

        // Create post
        await page.click('a[data-test-link="posts"]');
        await new Promise(r => setTimeout(r, 7000));

        // Screenshot
        await page.screenshot({ path: './testPosts/scenario51.png' });

        // End test
        console.log('Test Creacion Post para Google Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

// Scenario 52 - Create a post for Facebook - Extra-long title
export function runEscenario52(user, pass, url) {
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

        await page.click('a[href="#/editor/post/"]');
        await page.type('textarea[data-test-editor-title-input]', faker.lorem.text());
        await page.type('div.kg-prose', faker.lorem.sentences());

        // Expand menus
        await page.click('button[data-test-psm-trigger]');
        await new Promise(r => setTimeout(r, 2000));

        await page.click('button[data-test-button="facebook-data"]');
        await new Promise(r => setTimeout(r, 2000));

        // Write Facebook properties
        await page.type('input[name="post-setting-og-title"]', faker.lorem.text(1000));
        await page.type('textarea[name="post-setting-og-description"]', faker.lorem.sentences());
        await new Promise(r => setTimeout(r, 2000));

        // Confirm post
        await page.click('button[data-test-button="publish-flow"]');
        await page.click('button[data-test-button="continue"]');
        await page.click('button[data-test-button="confirm-publish"]');
        await new Promise(r => setTimeout(r, 7000));

        // Go back posts
        await page.click('button[data-test-button="close-publish-flow"]');
        await new Promise(r => setTimeout(r, 7000));

        // Create post
        await page.click('a[data-test-link="posts"]');
        await new Promise(r => setTimeout(r, 7000));

        // Screenshot
        await page.screenshot({ path: './testPosts/scenario52.png' });

        // End test
        console.log('Test Creacion Post para Google Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

// Scenario 53 - Create a post for Facebook - Extra-long description
export function runEscenario53(user, pass, url) {
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

        await page.click('a[href="#/editor/post/"]');
        await page.type('textarea[data-test-editor-title-input]', faker.lorem.text());
        await page.type('div.kg-prose', faker.lorem.sentences());

        // Expand menus
        await page.click('button[data-test-psm-trigger]');
        await new Promise(r => setTimeout(r, 2000));

        await page.click('button[data-test-button="facebook-data"]');
        await new Promise(r => setTimeout(r, 2000));

        // Write Facebook properties
        await page.type('input[name="post-setting-og-title"]', faker.lorem.text());
        await page.type('textarea[name="post-setting-og-description"]', faker.lorem.text(1000));
        await new Promise(r => setTimeout(r, 2000));

        // Confirm post
        await page.click('button[data-test-button="publish-flow"]');
        await page.click('button[data-test-button="continue"]');
        await page.click('button[data-test-button="confirm-publish"]');
        await new Promise(r => setTimeout(r, 7000));

        // Go back posts
        await page.click('button[data-test-button="close-publish-flow"]');
        await new Promise(r => setTimeout(r, 7000));

        // Create post
        await page.click('a[data-test-link="posts"]');
        await new Promise(r => setTimeout(r, 7000));

        // Screenshot
        await page.screenshot({ path: './testPosts/scenario53.png' });

        // End test
        console.log('Test Creacion Post para Google Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}
