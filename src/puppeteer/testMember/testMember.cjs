const puppeteer = require('puppeteer');

function runEscenario5(user, pass, url) {
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

        // Entrar en el apartado member
        await page.click('a[href="#/members/"]');
        await new Promise(r => setTimeout(r, 7000));

        // ir Crear member
        await page.click('a[href="#/members/new/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Estado Inicial
        await page.screenshot({ path: './testMember/inicioCreacionMember.png' })

        // Creacion member
        await page.type('input[data-test-input="member-name"]', "test");
        await page.type('input[data-test-input="member-email"]', "test@uniandes.edu.co");
        await page.click('button[data-test-button="save"]');

        // Estado
        await page.screenshot({ path: './testMember/creandoUsuario.png' });

        // Entrar en el apartado member
        await page.click('a[href="#/members/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Captura creacion de usuario (Escenario 5)
        await page.screenshot({ path: './testMember/usuarioCreado.png' });

        console.log('Test Creacion Member Done');
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
        await new Promise(r => setTimeout(r, 7000));

        // Tamaño de la pantalla
        await page.setViewport({ width: 1920, height: 1080 });
        await new Promise(r => setTimeout(r, 20000));

        // Llenar informacion
        await page.type('input[id="identification"]', user);
        await page.type('input[id="password"]', pass);
        await page.click('button[id="ember5"]')
        await new Promise(r => setTimeout(r, 7000));

        // Entrar en el apartado member
        await page.click('a[href="#/members/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Editar member
        await page.click('h3.ma0.pa0.gh-members-list-name');
        await page.click('input[data-test-input="member-name"]', { clickCount: 3 });
        await page.keyboard.press('Backspace');
        await page.click('input[data-test-input="member-email"]', { clickCount: 3 });
        await page.keyboard.press('Backspace');
        await page.type('input[data-test-input="member-name"]', "testEdit");
        await page.type('input[data-test-input="member-email"]', "testEdit@uniandes.edu.co");
        await page.click('button[data-test-button="save"]');

        // Estado
        await page.screenshot({ path: './testMember/editandoUsuario.png' });

        // Entrar en el apartado member
        await page.click('a[href="#/members/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Captura creacion de usuario (Escenario 2)
        await page.screenshot({ path: './testMember/usuarioEditado.png' });

        console.log('Test Edicion Member Done');
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
        await new Promise(r => setTimeout(r, 20000));

        // Llenar informacion
        await page.type('input[id="identification"]', user);
        await page.type('input[id="password"]', pass);
        await page.click('button[id="ember5"]')
        await new Promise(r => setTimeout(r, 7000));

        // Entrar en el apartado member
        await page.click('a[href="#/members/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Crear usuario fallido (Correo ya registrado)
        await page.click('a[href="#/members/new/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Creacion member (Email duplicado)
        await page.type('input[data-test-input="member-name"]', "testDuplicate");
        await page.type('input[data-test-input="member-email"]', "testEdit@uniandes.edu.co");
        await page.click('button[data-test-button="save"]');

        // Captura crear usuario fallido
        await page.screenshot({ path: './testMember/crearUsuarioFallido.png' });

        console.log('Test Creacion Member Duplicado Done');
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
        await new Promise(r => setTimeout(r, 35000));

        // Llenar informacion
        await page.type('input[id="identification"]', user);
        await page.type('input[id="password"]', pass);
        await page.click('button[id="ember5"]')
        await new Promise(r => setTimeout(r, 7000));

        // Entrar en el apartado member
        await page.click('a[href="#/members/"]');
        await new Promise(r => setTimeout(r, 7000));

        // Eliminar usuario 
        await page.click('h3.ma0.pa0.gh-members-list-name');
        await page.click('button[data-test-button="member-actions"]');
        await page.click('button[data-test-button="delete-member"]');

        // Eliminando Usuario
        await page.screenshot({ path: './testMember/eliminandoUsuario.png' })

        await page.click('button[data-test-button="confirm"]');
        await new Promise(r => setTimeout(r, 7000));

        // Captura eliminacion de usuario
        await page.screenshot({ path: './testMember/usuarioEliminado.png' });

        console.log('Test Eliminacion Member Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

module.exports = { runEscenario5, runEscenario6, runEscenario7, runEscenario8 };