const puppeteer = require('puppeteer');

function runEscenario1(url) {
    (async () => {
        const browser = await puppeteer.launch({ headless: "new" });
        const page = await browser.newPage();
        await page.goto(url);
        await new Promise(r => setTimeout(r, 5000));

        // Tamaño de la pantalla
        await page.setViewport({ width: 1920, height: 1080 });

        // Captura estado inicial
        await page.screenshot({ path: './testInicioSesion/inicioSesionGhost.png' });

        // Inicio de Sesion en Blanco
        await page.click('button[id="ember5"]')
        await new Promise(r => setTimeout(r, 7000));

        // Captura inicio de sesion en blanco (Escenario 1)
        await page.screenshot({ path: './testInicioSesion/inicioSesionFallidoEnBlanco.png' });

        console.log('Tests Inicio de sesion en Blanco Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

function runEscenario2(url) {
    (async () => {
        const browser = await puppeteer.launch({ headless: "new" });

        const page = await browser.newPage();
        await page.goto(url);
        await new Promise(r => setTimeout(r, 5000));

        // Tamaño de la pantalla
        await page.setViewport({ width: 1920, height: 1080 });

        // Llenar informacion
        await page.type('input[id="identification"]', 'test.fallido@uniandes.edu.co');
        await page.type('input[id="password"]', 'falla');
        await page.click('button[id="ember5"]')
        await new Promise(r => setTimeout(r, 7000));

        // Captura Estado fallido datos erroneos (Escenario 2)
        await page.screenshot({ path: './testInicioSesion/inicioSesionFallidoDatosErroneos.png' });

        console.log('Tests Inicio de sesion en Datos Erroneos Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

function runEscenario3(user, pass, url) {
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

        // Captura Estado exitoso (Escenario 3)
        await page.screenshot({ path: './testInicioSesion/InicioSesionExitoso.png' });

        console.log('Tests Inicio de sesion Exitoso Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}

function runEscenario4(user, pass, url) {
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

        // Captura Estado exitoso (Escenario 4)
        await page.screenshot({ path: './testInicioSesion/InicioSesionCerradoSesion.png' });

        // Cerrar Sesion
        await page.click('div.ember-view.ember-basic-dropdown-trigger');
        await page.click('a.ember-view.dropdown-item.user-menu-signout');
        await new Promise(r => setTimeout(r, 7000));

        // Captura Cerrar Sesion (Escenario 4)
        await page.screenshot({ path: './testInicioSesion/CerradoSesion.png' });

        console.log('Tests Cerrado de sesion Done');
        await browser.close();

        return;
    })().catch(e => console.log(e));
}
module.exports = { runEscenario1, runEscenario2, runEscenario3, runEscenario4 };