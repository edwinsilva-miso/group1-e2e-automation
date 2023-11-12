const puppeteer = require('puppeteer');

(async()=>{
    //Usuarios
    const browser = await puppeteer.launch({headless: "new"});

    const page = await browser.newPage();
    await page.goto('http://localhost:2368/ghost/#/dashboard');
    await new Promise(r => setTimeout(r, 5000));

    // Tamaño de la pantalla
    await page.setViewport({width: 1920, height: 1080});

    // Inicio de Sesion
    await page.type('input[id="identification"]', 'j.tibaquira@uniandes.edu.co');
    await page.type('input[id="password"]', 'Tiba09192000*');
    await page.click('button[id="ember5"]')
    await new Promise(r => setTimeout(r, 7000));

    // Entrar en el apartado member
    await page.click('a[href="#/members/"]');
    await new Promise(r => setTimeout(r, 7000));

    // ir Crear member
    await page.click('a[href="#/members/new/"]');
    await new Promise(r => setTimeout(r, 7000));

    // Estado Inicial
    await page.screenshot({path:'./inicioCreacionMember.png'})

    // Creacion member
    await page.type('input[data-test-input="member-name"]', "test");
    await page.type('input[data-test-input="member-email"]', "test@uniandes.edu.co");
    await page.click('button[data-test-button="save"]');

    // Estado
    await page.screenshot({path:'.creandoUsuario.png'});

    // Entrar en el apartado member
    await page.click('a[href="#/members/"]');
    await new Promise(r => setTimeout(r, 7000));

    // Captura creacion de usuario (Escenario 1)
    await page.screenshot({path:'.usuarioCreado.png'});
    console.log('Escenario 1');

    // Editar usuario
    await page.click('h3.ma0.pa0.gh-members-list-name');
    await page.click('input[data-test-input="member-name"]',{clickCount:3});
    await page.keyboard.press('Backspace');
    await page.click('input[data-test-input="member-email"]',{clickCount:3});
    await page.keyboard.press('Backspace');
    await page.type('input[data-test-input="member-name"]', "testEdit");
    await page.type('input[data-test-input="member-email"]', "testEdit@uniandes.edu.co");
    await page.click('button[data-test-button="save"]');

    // Estado
    await page.screenshot({path:'.editandoUsuario.png'});

    // Entrar en el apartado member
    await page.click('a[href="#/members/"]');
    await new Promise(r => setTimeout(r, 7000));

    // Captura creacion de usuario (Escenario 2)
    await page.screenshot({path:'.usuarioEditado.png'});
    console.log('Escenario 2');

    // Crear usuario fallido (Correo ya registrado)
    await page.click('a[href="#/members/new/"]');
    await new Promise(r => setTimeout(r, 7000));

    // Creacion member (Email duplicado)
    await page.type('input[data-test-input="member-name"]', "testDuplicate");
    await page.type('input[data-test-input="member-email"]', "testEdit@uniandes.edu.co");
    await page.click('button[data-test-button="save"]');

    // Captura crear usuario fallido
    await page.screenshot({path:'.crearUsuarioFallido.png'});
    console.log('Escenario 3');   

    // Entrar en el apartado member
    await page.click('a[href="#/members/"]');
    await page.click('button[data-test-leave-button]')
    await new Promise(r => setTimeout(r, 7000));

    // Eliminar usuario 
    await page.click('h3.ma0.pa0.gh-members-list-name');
    await page.click('button[data-test-button="member-actions"]');
    await page.click('button[data-test-button="delete-member"]');

    // Eliminando Usuario
    await page.screenshot({path:'.eliminandoUsuario.png'})

    await page.click('button[data-test-button="confirm"]');
    await new Promise(r => setTimeout(r, 7000));

    // Captura eliminacion de usuario
    await page.screenshot({path:'.usuarioEliminado.png'});
    console.log('Escenario 4')

    // Cerrar Sesion
    await page.click('div.ember-view.ember-basic-dropdown-trigger');
    await page.click('a.ember-view.dropdown-item.user-menu-signout');

    console.log('Tests Member Done');
    await browser.close();

    return;
})().catch(e=>console.log(e));