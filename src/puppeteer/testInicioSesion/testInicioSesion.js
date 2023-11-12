const puppeteer = require('puppeteer');

(async()=>{
    //Usuarios
    const browser = await puppeteer.launch({headless: "new"});

    // Variables de inicio de sesion
    const usuario = 'j.tibaquira@uniandes.edu.co';
    const password = 'Tiba09192000*';

    const page = await browser.newPage();
    await page.goto('http://localhost:2368/ghost/#/dashboard');
    await new Promise(r => setTimeout(r, 5000));

    // Tamaño de la pantalla
    await page.setViewport({width: 1920, height: 1080});

    // Captura estado inicial
    await page.screenshot({path: '.inicioSesionGhost.png'});

    // Inicio de Sesion en Blanco
    await page.click('button[id="ember5"]')
    await new Promise(r => setTimeout(r, 7000));

    // Captura inicio de sesion en blanco (Escenario 1)
    await page.screenshot({path: '.inicioSesionFallidoEnBlanco.png'});
    console.log('Escenario 1');

    // Inicio de Sesion datos erroneos
    await page.type('input[id="identification"]','test.fallido@uniandes.edu.co');
    await page.type('input[id="password"]', 'falla');
    await page.click('button[id="ember5"]')
    await new Promise(r => setTimeout(r, 7000));

    // Captura Estado fallido datos erroneos (Escenario 2)
    await page.screenshot({path: '.inicioSesionFallidoDatosErroneos.png'});
    console.log('Escenario 2');

    await page.click('input[id="identification"]',{clickCount:3});
    await page.keyboard.press('Backspace');
    await page.click('input[id="password"]',{clickCount:3});
    await page.keyboard.press('Backspace');
    await new Promise(r => setTimeout(r, 7000));

    // Inicio de Sesion exitoso 
    await page.type('input[id="identification"]', usuario);
    await page.type('input[id="password"]', password);
    await page.click('button[id="ember5"]')
    await new Promise(r => setTimeout(r, 7000));

    // Captura Estado exitoso (Escenario 3)
    await page.screenshot({path: '.InicioSesionExitoso.png'});
    console.log('Escenario 3');
    
    // Cerrar Sesion
    await page.click('div.ember-view.ember-basic-dropdown-trigger');
    await page.click('a.ember-view.dropdown-item.user-menu-signout');
    await new Promise(r => setTimeout(r, 7000));

    // Captura Cerrar Sesion (Escenario 4)
    await page.screenshot({path: '.CerradoSesion.png'});
    console.log('Escenario 4');

    console.log('Tests Login Done');
    await browser.close();

    return;
})().catch(e=>console.log(e));