const puppeteer = require('puppeteer');

(async()=>{
    //Usuarios
    const browser = await puppeteer.launch({headless: "new"});

    // Variables de inicio de sesion
    const usuario = 'my.user@email.com';
    const password = 'my.password';

    const page = await browser.newPage();
    await page.goto('http://localhost:2368/ghost/#/dashboard');
    await new Promise(r => setTimeout(r, 5000));

    // Tamaño de la pantalla
    await page.setViewport({width: 1920, height: 1080});
    
    // Inicio de Sesion exitoso 
    await page.type('input[id="identification"]', usuario);
    await page.type('input[id="password"]', password);
    await page.click('button[id="ember5"]');
    await new Promise(r => setTimeout(r, 7000));

    // Estado Inicial
    await page.screenshot({path:'./inicioTestPosts.png'})

    // Crear Post
    await page.click('a[href="#/editor/post/"]');
    await page.type('textarea[data-test-editor-title-input]','postTitle');
    await page.type('div.kg-prose','postContent');
    await page.screenshot({path:'./creandoPost.png'})
    await page.click('button[data-test-button="publish-flow"]');
    await page.click('button[data-test-button="continue"]');
    await page.click('button[data-test-button="confirm-publish"]');
    await new Promise(r => setTimeout(r, 7000));

    // Volver al inicio
    await page.click('button[data-test-button="close-publish-flow"]');
    await new Promise(r => setTimeout(r, 7000));

    // Crear post (Escenario 1)
    await page.click('a[data-test-link="posts"]');
    await new Promise(r => setTimeout(r, 7000));
    await page.screenshot({path:'./postCreado.png'});
    console.log('Escenario 1');

    // Editar Pages
    await page.click('a[href="#/editor/post/"]');
    await new Promise(r => setTimeout(r, 7000));

    // Crear post (Draft)
    await page.type('textarea[data-test-editor-title-input]','postTitleDraft');
    await page.type('div.kg-prose','postContentDraft');

    // Creando post (Draft)
    await page.screenshot({ path: './creandoPageDraft.png' });
    await new Promise(r => setTimeout(r, 7000));

    // Volver al menu post
    await page.click('a[data-test-link="posts"]');
    await new Promise(r => setTimeout(r, 7000));

    // Draft Post Creado (Escenario 2)
    await page.screenshot({ path: './pageDraftCreado.png' });
    console.log('Escenario 2');

    // Editar Post
    await page.click('span.published');
    await new Promise(r => setTimeout(r, 7000));

    // Editando Page
    await page.screenshot({path:'./antesEdicionPost.png'});

    await page.type('textarea[data-test-editor-title-input]','edit');
    await page.type('div.kg-prose','edit');

    await page.screenshot({path:'./despuesEdicionPage.png'});

    await page.click('button[data-test-button="publish-save"]');

    // Volver al menu pages
    await page.click('a[data-test-link="posts"]');
    await new Promise(r => setTimeout(r, 7000));

    // Page Editado (Escenario 3)
    await page.screenshot('./pageEditado.png');    
    console.log('Escenario 3');

    // Unpublish post
    await page.click('span.published');
    await new Promise(r => setTimeout(r, 7000));

    await page.click('button[data-test-button="update-flow"]');
    await page.screenshot({path:'./quitarPublicacion.png'});

    // Quitando publicacion
    await page.click('button[data-test-button="revert-to-draft"]');
    await new Promise(r => setTimeout(r, 7000));

    // Volver al menu post
    await page.click('a[data-test-link="posts"]');
    await new Promise(r => setTimeout(r, 7000));

    await page.screenshot({path:'./postPublicacionQuitada.png'});
    console.log('Escenario 4');
    
    // Cerrar Sesion
    await page.click('div.ember-view.ember-basic-dropdown-trigger');
    await page.click('a.ember-view.dropdown-item.user-menu-signout');
    await new Promise(r => setTimeout(r, 7000));

    console.log('Tests posts Done');
    await browser.close();

    return;
})().catch(e=>console.log(e));