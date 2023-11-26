import {faker} from '@faker-js/faker';
import puppeteer from 'puppeteer';
import path from 'path';

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

// Escenario 1: Crear un Tag
export function runEscenario1(user, pass, url) {
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
        await page.screenshot({ path: './testTagsFaker/inicioCreacionTag.png' })

        // Crear Tags
        await page.click('a[href="#/tags/new/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Creando Tags
        await page.type('input[data-test-input="tag-name"]',faker.word.adjective());
        await page.type('input[data-test-input="accentColor"]', faker.string.hexadecimal({length: 6, prefix: ""}));
        await page.type('textarea[data-test-input="tag-description"]', faker.lorem.sentence());
        await page.click('button[data-test-button="save"]');
        await new Promise(r => setTimeout(r, 7000));

        // Entrar a Tags
        await page.click('a[href="#/tags/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Captura tag creado (escenario 1)
        await page.screenshot({ path: './testTagsFaker/escenario1.png' });

        console.log('Test Creacion tags Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

//Escenario 2: Editando un tag
export function runEscenario2(user, pass, url) {
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
        await page.type('input[data-test-input="tag-name"]', faker.word.adjective());
        await page.type('textarea[data-test-input="tag-description"]', faker.lorem.sentence());
        await new Promise(r => setTimeout(r, 7000));

        // Editando tag
        await page.screenshot({ path: './testTagsFaker/escenario2.png' });

        // Editar tag
        await page.click('button[data-test-button="save"]');

        // Entrar a Tags
        await page.click('a[href="#/tags/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Captura tag editado (escenario 2)
        await page.screenshot({ path: './testTagsFaker/escenario2_1.png' });

        console.log('Test Edicion tags Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

// Escenario 3: Crear Tag Metadata
export function runEscenario3(user, pass, url) {
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
        await page.type('input[data-test-input="tag-name"]', faker.word.adjective());
        await page.type('input[data-test-input="accentColor"]', faker.string.hexadecimal({length: 6, prefix: ""}));
        await page.type('textarea[data-test-input="tag-description"]', faker.lorem.sentence());
        await page.type('input[id="meta-title"]', faker.word.adjective());
        await page.type('textarea[id="meta-description"]',faker.lorem.sentence());
        await page.type('input[id="canonical-url"]', faker.internet.url());

        // Creando tag Metadata
        await page.screenshot({ path: './testTagsFaker/escenario3.png' });

        await page.click('button[data-test-button="save"]');
        await new Promise(r => setTimeout(r, 7000));

        await page.click('a[href="#/tags/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Creacion tag metadata (Escenario 3)
        await page.screenshot({ path: './testTagsFaker/escenario3_1.png' });

        console.log('Test Creacion Meta tags Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

// Escenario 4: Crear Tag X
export function runEscenario4(user, pass, url) {
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
        await page.type('input[data-test-input="tag-name"]', faker.word.adjective());
        await page.type('input[data-test-input="accentColor"]', faker.string.hexadecimal({length: 6, prefix: ""}));
        await page.type('textarea[data-test-input="tag-description"]', faker.lorem.sentence());
        await page.type('input[id="twitter-title"]', faker.word.adjective());
        await page.type('textarea[id="twitter-description"]', faker.lorem.sentence());

        // Creando tag X card
        await page.screenshot({ path: './testTagsFaker/escenario4.png' });

        await page.click('button[data-test-button="save"]');
        await new Promise(r => setTimeout(r, 7000));

        await page.click('a[href="#/tags/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Creacion tag Xcard (Escenario 4)
        await page.screenshot({ path: './testTagsFaker/escenario4_1.png' });

        console.log('Test Creacion X tags Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

// Escenario 5 Creando Tag Facebook
export function runEscenario5(user, pass, url) {
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
        await page.type('input[data-test-input="tag-name"]', faker.word.adjective());
        await page.type('input[data-test-input="accentColor"]', faker.string.hexadecimal({length: 6, prefix: ""}));
        await page.type('textarea[data-test-input="tag-description"]', faker.lorem.sentence());
        await page.type('input[id="og-title"]',faker.word.adjective());
        await page.type('textarea[id="og-description"]',faker.lorem.sentence());

        // Creando tag Facebook
        await page.screenshot({ path: './testTagsFaker/escenario5.png' });

        await page.click('button[data-test-button="save"]');
        await new Promise(r => setTimeout(r, 7000));

        await page.click('a[href="#/tags/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Creacion tag Facebook (Escenario 6)
        await page.screenshot({ path: './testTagsFaker/escenario5_1.png' });

        console.log('Test Creacion Facebook tags Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

// Escenario 6: Crear Tag Interno
export function runEscenario6(user, pass, url) {
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
        await page.type('input[data-test-input="tag-name"]', faker.word.words());
        await page.type('input[data-test-input="accentColor"]', faker.string.hexadecimal({length: 6, prefix: ""}));
        await page.type('textarea[data-test-input="tag-description"]', faker.string.hexadecimal({length: 10, prefix: "#"}));

        // Creando Tags internos
        await page.click('button[data-test-button="save"]');
        await page.screenshot({ path: './testTagsFaker/escenario6.png' });

        // Entrar a Tags
        await page.click('a[href="#/tags/?type=internal"]');
        await new Promise(r => setTimeout(r, 7000));

        // Captura tag interno creado (escenario 6)
        await page.click('button[data-test-tags-nav="internal"]');
        await page.screenshot({ path: './testTagsFaker/escenario6_1.png' });

        console.log('Test Creacion internal tags Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

// Escenario 7 Creacion de tag Fallido (No se llena Formulario)
export function runEscenario7(user, pass, url) {
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

        // Crear Tags
        await page.click('a[href="#/tags/new/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Oprimiendo Guardar
        await page.click('button[data-test-button="save"]');
        await new Promise(r => setTimeout(r, 7000));
        
        // Captura escenario no creado (Escenario 7)
        await page.screenshot({ path: './testTagsFaker/escenario7.png' })

        console.log('Test Creacion de tag Fallido (No se llena Formulario) Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

// Escenario 8 Creacion de tag Fallido (Color Formato incorrecto)
export function runEscenario8(user, pass, url) {
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
        await page.screenshot({ path: './testTagsFaker/inicioCreacionTag.png' })

        // Crear Tags
        await page.click('a[href="#/tags/new/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Creando Tags
        await page.type('input[data-test-input="tag-name"]',faker.word.adjective());
        await page.type('input[data-test-input="accentColor"]', faker.color.rgb());
        await page.type('textarea[data-test-input="tag-description"]', faker.lorem.sentence());
        await page.click('button[data-test-button="save"]');
        await new Promise(r => setTimeout(r, 7000));

        // Captura tag fallido formato incorrecto color (escenario 8)
        await page.screenshot({ path: './testTagsFaker/escenario8.png' });

        console.log('Test Creacion de tag Fallido (Color Formato incorrecto) tags Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

// Escenario 9 Creacion de tag Fallido (titulo demasiado largo)
export function runEscenario9(user, pass, url) {
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
        await page.screenshot({ path: './testTagsFaker/inicioCreacionTag.png' })

        // Crear Tags
        await page.click('a[href="#/tags/new/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Creando Tags
        await page.type('input[data-test-input="tag-name"]',faker.lorem.sentence(100));
        await page.type('input[data-test-input="accentColor"]', faker.color.rgb());
        await page.type('textarea[data-test-input="tag-description"]', faker.lorem.sentence());
        await page.click('button[data-test-button="save"]');
        await new Promise(r => setTimeout(r, 7000));

        // Captura tag fallido formato nombre demasiado largo (escenario 9)
        await page.screenshot({ path: './testTagsFaker/escenario9.png' });

        console.log('Test Creacion de tag Fallido (Nombre demasiado largo) tags Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

// Escenario 10 Creacion de tag Fallido (Descripcion demasiado larga)
export function runEscenario10(user, pass, url) {
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
        await page.screenshot({ path: './testTagsFaker/inicioCreacionTag.png' })

        // Crear Tags
        await page.click('a[href="#/tags/new/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Creando Tags
        await page.type('input[data-test-input="tag-name"]',faker.word.adjective());
        await page.type('input[data-test-input="accentColor"]', faker.color.rgb());
        await page.type('textarea[data-test-input="tag-description"]', faker.lorem.sentence(250));
        await page.click('button[data-test-button="save"]');
        await new Promise(r => setTimeout(r, 7000));

        // Captura tag fallido formato descripcion demasiado larga (escenario 10)
        await page.screenshot({ path: './testTagsFaker/escenario10.png' });

        console.log('Test Creacion de tag Fallido (Descripcion demasiado largo) tags Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

// Escenario 11: Crear Tag Metadata fallido (Nombre meta demasiado largo)
export function runEscenario11(user, pass, url) {
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
        await page.type('input[data-test-input="tag-name"]', faker.word.adjective());
        await page.type('input[data-test-input="accentColor"]', faker.string.hexadecimal({length: 6, prefix: ""}));
        await page.type('textarea[data-test-input="tag-description"]', faker.lorem.sentence());
        await page.type('input[id="meta-title"]', faker.lorem.sentence(250));
        await page.type('textarea[id="meta-description"]',faker.lorem.sentence());
        await page.type('input[id="canonical-url"]', faker.internet.url());
        
        await page.click('button[data-test-button="save"]');
        await new Promise(r => setTimeout(r, 7000));

        // Ir a lugar
        scrollElementIntoView('input[id="twitter-title"]',page)

        // Crear Tag Metadata fallido (Nombre meta demasiado largo) (Escenario 11)
        await page.screenshot({ path: './testTagsFaker/escenario11.png' });

        console.log('Test Crear Tag Metadata fallido (Nombre meta demasiado largo) Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

// Escenario 12: Crear Tag Metadata fallido (Descripcion meta demasiado largo)
export function runEscenario12(user, pass, url) {
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
        await page.type('input[data-test-input="tag-name"]', faker.word.adjective());
        await page.type('input[data-test-input="accentColor"]', faker.string.hexadecimal({length: 6, prefix: ""}));
        await page.type('textarea[data-test-input="tag-description"]', faker.lorem.sentence());
        await page.type('input[id="meta-title"]', faker.lorem.sentence());
        await page.type('textarea[id="meta-description"]',faker.lorem.sentence(250));
        await page.type('input[id="canonical-url"]', faker.internet.url());
        
        await page.click('button[data-test-button="save"]');
        await new Promise(r => setTimeout(r, 7000));

        // Ir a lugar
        scrollElementIntoView('textarea[id="meta-description"]',page)
        
        // Crear Tag Metadata fallido (Descripcion meta demasiado largo) (Escenario 12)
        await page.screenshot({ path: './testTagsFaker/escenario12.png' });

        console.log('Test Crear Tag Metadata fallido (Descripcion meta demasiado largo) Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

// Escenario 13: Crear Tag Metadata fallido (Url meta formato incorrecto)
export function runEscenario13(user, pass, url) {
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
        await page.type('input[data-test-input="tag-name"]', faker.word.adjective());
        await page.type('input[data-test-input="accentColor"]', faker.string.hexadecimal({length: 6, prefix: ""}));
        await page.type('textarea[data-test-input="tag-description"]', faker.lorem.sentence());
        await page.type('input[id="meta-title"]', faker.lorem.sentence());
        await page.type('textarea[id="meta-description"]',faker.lorem.sentence());
        await page.type('input[id="canonical-url"]', faker.internet.url({protocol: " "}));

        await page.click('button[data-test-button="save"]');
        await new Promise(r => setTimeout(r, 7000));
        
        // Ir a lugar
        scrollElementIntoView('input[id="canonical-url"]',page);

        // Crear Tag Metadata fallido (Url meta formato incorrecto) (Escenario 13)
        await page.screenshot({ path: './testTagsFaker/escenario13.png' });

        console.log('Test Crear Tag Metadata fallido (Url meta formato incorrecto) Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

// Escenario 14: Crear Tag X Fallido (Nombre tag x demasiado Largo)
export function runEscenario14(user, pass, url) {
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
        await page.type('input[data-test-input="tag-name"]', faker.word.adjective());
        await page.type('input[data-test-input="accentColor"]', faker.string.hexadecimal({length: 6, prefix: ""}));
        await page.type('textarea[data-test-input="tag-description"]', faker.lorem.sentence());
        await page.type('input[id="twitter-title"]', faker.lorem.sentence(250));
        await page.type('textarea[id="twitter-description"]', faker.lorem.sentence());

        await page.click('button[data-test-button="save"]');
        await new Promise(r => setTimeout(r, 7000));

        // Ir a lugar
        scrollElementIntoView('input[id="twitter-title"]',page);

        // Crear Tag X Fallido (Nombre tag x demasiado Largo) (Escenario 14)
        await page.screenshot({ path: './testTagsFaker/escenario14.png' });

        console.log('Test Crear Tag X Fallido (Nombre tag x demasiado Largo) Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

// Escenario 15: Crear Tag X Fallido (Descripcion tag x demasiado Largo)
export function runEscenario15(user, pass, url) {
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
        await page.type('input[data-test-input="tag-name"]', faker.word.adjective());
        await page.type('input[data-test-input="accentColor"]', faker.string.hexadecimal({length: 6, prefix: ""}));
        await page.type('textarea[data-test-input="tag-description"]', faker.lorem.sentence());
        await page.type('input[id="twitter-title"]', faker.lorem.sentence());
        await page.type('textarea[id="twitter-description"]', faker.lorem.sentence(250));

        await page.click('button[data-test-button="save"]');
        await new Promise(r => setTimeout(r, 7000));

        // Ir a lugar
        scrollElementIntoView('textarea[id="twitter-description"]',page);

        // Crear Tag X Fallido (Descripcion tag x demasiado Largo) (Escenario 15)
        await page.screenshot({ path: './testTagsFaker/escenario15.png' });

        console.log('Test Crear Tag X Fallido (Descripcion tag x demasiado Largo) Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

// Escenario 16 Creando Tag Facebook fallido (Nombre face demasiado largo)
export function runEscenario16(user, pass, url) {
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
        await page.type('input[data-test-input="tag-name"]', faker.word.adjective());
        await page.type('input[data-test-input="accentColor"]', faker.string.hexadecimal({length: 6, prefix: ""}));
        await page.type('textarea[data-test-input="tag-description"]', faker.lorem.sentence());
        await page.type('input[id="og-title"]',faker.lorem.sentence(250));
        await page.type('textarea[id="og-description"]',faker.lorem.sentence());

        await page.click('button[data-test-button="save"]');
        await new Promise(r => setTimeout(r, 7000));

        scrollElementIntoView('input[id="og-title"]', page);

        // Creando Tag Facebook fallido (Nombre face demasiado largo)
        await page.screenshot({ path: './testTagsFaker/escenario16.png' });

        console.log('Test Creando Tag Facebook fallido (Nombre Face demasiado largo)');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

// Escenario 17 Creando Tag Facebook fallido (Descripcion face demasiado largo)
export function runEscenario17(user, pass, url) {
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
        await page.type('input[data-test-input="tag-name"]', faker.word.adjective());
        await page.type('input[data-test-input="accentColor"]', faker.string.hexadecimal({length: 6, prefix: ""}));
        await page.type('textarea[data-test-input="tag-description"]', faker.lorem.sentence());
        await page.type('input[id="og-title"]',faker.lorem.sentence());
        await page.type('textarea[id="og-description"]',faker.lorem.sentence(250));

        await page.click('button[data-test-button="save"]');
        await new Promise(r => setTimeout(r, 7000));

        scrollElementIntoView('textarea[id="og-description"]', page);

        // Creando Tag Facebook fallido (Descripcion face demasiado largo)
        await page.screenshot({ path: './testTagsFaker/escenario17.png' });

        console.log('Test Creando Tag Facebook fallido (Descripcion demasiado largo)');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

// Escenario 18 Creacion de tag Fallido (Slug demasiado largo)
export function runEscenario18(user, pass, url) {
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
        await page.screenshot({ path: './testTagsFaker/inicioCreacionTag.png' })

        // Crear Tags
        await page.click('a[href="#/tags/new/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Creando Tags
        await page.type('input[data-test-input="tag-name"]',faker.lorem.sentence());
        await page.type('input[data-test-input="accentColor"]', faker.color.rgb());
        await page.type('textarea[data-test-input="tag-description"]', faker.lorem.sentence());
        await page.type('input[data-test-input="tag-slug"]', faker.lorem.sentence(100))
        await page.click('button[data-test-button="save"]');
        await new Promise(r => setTimeout(r, 7000));

        // Escenario 18 Creacion de tag Fallido (Slug demasiado largo) (Escenario 18)
        await page.screenshot({ path: './testTagsFaker/escenario18.png' });

        console.log('Test Creacion de tag Fallido (Slug demasiado largo) Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

// Escenario 19 Creando tag Code injection (Header)
export function runEscenario19(user, pass, url) {
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
        await page.type('input[data-test-input="tag-name"]', faker.word.adjective());
        await page.type('input[data-test-input="accentColor"]', faker.string.hexadecimal({length: 6, prefix: ""}));
        await page.type('textarea[data-test-input="tag-description"]', faker.lorem.sentence());
        await page.type('div[id="tag-setting-codeinjection-head"]',faker.lorem.sentence());

        await page.click('button[data-test-button="save"]');
        await new Promise(r => setTimeout(r, 7000));

        scrollElementIntoView('button[data-test-button="delete-tag"]', page);

        // Creando tag Code injection (Header)
        await page.screenshot({ path: './testTagsFaker/escenario19.png' });

        // Entrar a Tags
        await page.click('a[href="#/tags/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Creando tag Code injection (Header)
        await page.screenshot({ path: './testTagsFaker/escenario19_1.png' });

        console.log('Test Creando tag Code injection (Header) Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

// Escenario 20 Creando Code injection (Footer)
export function runEscenario20(user, pass, url) {
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
        await page.type('input[data-test-input="tag-name"]', faker.word.adjective());
        await page.type('input[data-test-input="accentColor"]', faker.string.hexadecimal({length: 6, prefix: ""}));
        await page.type('textarea[data-test-input="tag-description"]', faker.lorem.sentence());
        await page.type('div[id="tag-setting-codeinjection-foot"]',faker.lorem.sentence());

        await page.click('button[data-test-button="save"]');
        await new Promise(r => setTimeout(r, 7000));

        scrollElementIntoView('button[data-test-button="delete-tag"]', page);

        // Creando Code injection (Footer)
        await page.screenshot({ path: './testTagsFaker/escenario20.png' });

        // Entrar a Tags
        await page.click('a[href="#/tags/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Creando Code injection (Footer)
        await page.screenshot({ path: './testTagsFaker/escenario20_1.png' });

        console.log('Creando tag Code injection (Footer)');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

// Escenario 21: Crear Tag Metadata (title)
export function runEscenario21(user, pass, url) {
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
        await page.type('input[data-test-input="tag-name"]', faker.word.adjective());
        await page.type('input[data-test-input="accentColor"]', faker.string.hexadecimal({length: 6, prefix: ""}));
        await page.type('textarea[data-test-input="tag-description"]', faker.lorem.sentence());
        await page.type('input[id="meta-title"]', faker.word.adjective());
        await page.type('input[id="canonical-url"]', faker.internet.url());

        // Creando tag Metadata
        await page.screenshot({ path: './testTagsFaker/escenario21.png' });

        await page.click('button[data-test-button="save"]');
        await new Promise(r => setTimeout(r, 7000));

        await page.click('a[href="#/tags/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Creacion tag metadata title(Escenario 21)
        await page.screenshot({ path: './testTagsFaker/escenario21_1.png' });

        console.log('Test Creacion Meta tags (Title) Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

// Escenario 22: Crear Tag Metadata (Description)
export function runEscenario22(user, pass, url) {
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
        await page.type('input[data-test-input="tag-name"]', faker.word.adjective());
        await page.type('input[data-test-input="accentColor"]', faker.string.hexadecimal({length: 6, prefix: ""}));
        await page.type('textarea[data-test-input="tag-description"]', faker.lorem.sentence());
        await page.type('textarea[id="meta-description"]',faker.lorem.sentence());
        await page.type('input[id="canonical-url"]', faker.internet.url());

        // Creando tag Metadata
        await page.screenshot({ path: './testTagsFaker/escenario22.png' });

        await page.click('button[data-test-button="save"]');
        await new Promise(r => setTimeout(r, 7000));

        await page.click('a[href="#/tags/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Creacion tag metadata description(Escenario 22)
        await page.screenshot({ path: './testTagsFaker/escenario22_1.png' });

        console.log('Test Creacion Meta tags Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

// Escenario 23: Crear Tag X (Title)
export function runEscenario23(user, pass, url) {
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
        await page.type('input[data-test-input="tag-name"]', faker.word.adjective());
        await page.type('input[data-test-input="accentColor"]', faker.string.hexadecimal({length: 6, prefix: ""}));
        await page.type('textarea[data-test-input="tag-description"]', faker.lorem.sentence());
        await page.type('input[id="twitter-title"]', faker.word.adjective());

        // Creando tag X card
        await page.screenshot({ path: './testTagsFaker/escenario23.png' });

        await page.click('button[data-test-button="save"]');
        await new Promise(r => setTimeout(r, 7000));

        await page.click('a[href="#/tags/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Creacion tag Xcard title (Escenario 23)
        await page.screenshot({ path: './testTagsFaker/escenario23_1.png' });

        console.log('Test Creacion X tags (title) Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

// Escenario 24: Crear Tag X (description)
export function runEscenario24(user, pass, url) {
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
        await page.type('input[data-test-input="tag-name"]', faker.word.adjective());
        await page.type('input[data-test-input="accentColor"]', faker.string.hexadecimal({length: 6, prefix: ""}));
        await page.type('textarea[data-test-input="tag-description"]', faker.lorem.sentence());
        await page.type('textarea[id="twitter-description"]', faker.lorem.sentence());

        // Creando tag X card
        await page.screenshot({ path: './testTagsFaker/escenario24.png' });

        await page.click('button[data-test-button="save"]');
        await new Promise(r => setTimeout(r, 7000));

        await page.click('a[href="#/tags/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Creacion tag Xcard Description (Escenario 24)
        await page.screenshot({ path: './testTagsFaker/escenario24_1.png' });

        console.log('Test Creacion X tags (Description) Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

// Escenario 25 Creando Tag Facebook title
export function runEscenario25(user, pass, url) {
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
        await page.type('input[data-test-input="tag-name"]', faker.word.adjective());
        await page.type('input[data-test-input="accentColor"]', faker.string.hexadecimal({length: 6, prefix: ""}));
        await page.type('textarea[data-test-input="tag-description"]', faker.lorem.sentence());
        await page.type('input[id="og-title"]',faker.word.adjective());

        // Creando tag Facebook
        await page.screenshot({ path: './testTagsFaker/escenario25.png' });

        await page.click('button[data-test-button="save"]');
        await new Promise(r => setTimeout(r, 7000));

        await page.click('a[href="#/tags/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Creacion tag Facebook title (Escenario 25)
        await page.screenshot({ path: './testTagsFaker/escenario25_1.png' });

        console.log('Test Creacion Facebook tags (title) Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

// Escenario 26 Creando Tag Facebook description
export function runEscenario26(user, pass, url) {
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
        await page.type('input[data-test-input="tag-name"]', faker.word.adjective());
        await page.type('input[data-test-input="accentColor"]', faker.string.hexadecimal({length: 6, prefix: ""}));
        await page.type('textarea[data-test-input="tag-description"]', faker.lorem.sentence());
        await page.type('textarea[id="og-description"]',faker.lorem.sentence());

        // Creando tag Facebook
        await page.screenshot({ path: './testTagsFaker/escenario26.png' });

        await page.click('button[data-test-button="save"]');
        await new Promise(r => setTimeout(r, 7000));

        await page.click('a[href="#/tags/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Creacion tag Facebook description (Escenario 26)
        await page.screenshot({ path: './testTagsFaker/escenario26_1.png' });

        console.log('Test Creacion Facebook tags (description) Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

// Escenario 27: Crear Tag Metadata (url)
export function runEscenario27(user, pass, url) {
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
        await page.type('input[data-test-input="tag-name"]', faker.word.adjective());
        await page.type('input[data-test-input="accentColor"]', faker.string.hexadecimal({length: 6, prefix: ""}));
        await page.type('textarea[data-test-input="tag-description"]', faker.lorem.sentence());
        await page.type('input[id="canonical-url"]', faker.internet.url());

        // Creando tag Metadata
        await page.screenshot({ path: './testTagsFaker/escenario27.png' });

        await page.click('button[data-test-button="save"]');
        await new Promise(r => setTimeout(r, 7000));

        await page.click('a[href="#/tags/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Creacion tag metadata url(Escenario 27)
        await page.screenshot({ path: './testTagsFaker/escenario27_1.png' });

        console.log('Test Creacion Meta tags (url) Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}