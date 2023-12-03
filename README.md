# Grupo 1 - Ejecución de pruebas E2E
## Pruebas Automatizadas

### Miembros del equipo 

- Santiago Alarcón - s.alarcong@uniandes.edu.co
- Juan Carlos Marín - j.marinm@uniandes.edu.co
- Sebastián Tibaquirá - j.tibaquira@uniandes.edu.co
- Edwin Silva - ea.silval1@uniandes.edu.co

### Herramientas a usar

- [Kraken Node](https://github.com/TheSoftwareDesignLab/KrakenMobile)
- [Puppeteer](https://github.com/puppeteer/puppeteer)


## Instalación y ejecución de pruebas con Kraken

### Prerequisitos: 
1. Usar la versión 16.14.2 de Node.Js
2. Tener instalado Android Studio
3. En las propiedades de Android Studio tener instalado:
   * Android SDK Platform-Tools
   * Android SDK Build-Tools
   * Android SDK Tools (Obsolete) (Se deben poner visibles los paquetes obsoletos si se está usando Android Studio Giraffe o una versión más reciente)

4. Configurar las siguientes rutas en PATH:
   
   * C:\Users\***\AppData\Local\Android\Sdk\platform-tools
   * C:\Users\***\AppData\Local\Android\Sdk\tools
   * C:\Users\***\AppData\Local\Android\Sdk\build-tools\VERSION
   * C:\Users\***\AppData\Local\Android\Sdk

6. Configurar la siguiente variable ambiental:
	* JAVA_HOME: C:\Program Files\Android\Android Studio\jre
7. Tener funcionando y corriendo Ghost
   
### Instalación y set-up de Kraken:
1. Clonar este repositorio de forma local
2. Ir a la carpeta de trabajo  ./group1-e2e-automation/src/kraken
3. Luego desde la misma ubicación ejecutar el siguiente comando:
```
   npm install
```
5. Modificar el archivo properties.json ubicado en group1-e2e-automation\src\kraken, con las credenciales del usuario admintrador de la aplicación Ghost y las urls correspondientes a las versiones de ghost, se espera que se tenga corriendo dos versiones de ghost una que es la más actual y su correspodniente URL  se reemplazará en el valor del campo <GHOST_URL> y para la otra versión a comparar se espera que se esté corriendo en un docker con la versión 4.44 y se reemplaza con la URL de dicha versión en el valor del campo de GHOST_URLV4:

```json

{
    	"ADMIN_EMAIL": "<Correo>",
    	"ADMIN_PASSWORD": "<Contraseña>",
  	"GHOST_URL": "http://localhost:2368/ghost",
  	"GHOST_URLV4": "http://localhost:3002/ghost" 
}
```
7. Para correr los test escribir en la consola:
   ```
   ./node_modules/kraken-node/bin/kraken-node run
   ```
9. Para la visualización de los screenshots de las pruebas, se pueden visualizar en la siguiente ubicación del repositorio .\group1-e2e-automation\src\kraken\screenshots en dicho direcorio se encontrará carpetas por funcionalidad y cada una se encontrarán los screenshot que se fuerontomando en el momento de la ejeución de las pruebas, como se puede obserbar a continuación:

    ![image](https://github.com/edwinsilva-miso/group1-e2e-automation/assets/139934363/310e2e6f-835b-4a6b-8998-dc9c82d387d3)

### Generación de reporte con Resemble: 

1. Haber realizado previamente los pasos de: Instalación y ejecución de pruebas con Kraken 
2. Estar ubicado en la siguiente ruta de trabajo  ./group1-e2e-automation/src/kraken
3. Ejecutar el siguiente comando en la terminal:
   ```
   npm run resemble-report
   ```
5. Se creará una carpeta con nombre de la fecha actual en la siguiente ubicación .\group1-e2e-automation\src\kraken\vrt\results
6. Abrimos la capreta con la fecha más reciento y por último abrimos el archivo report.html. Allí encontraremos el análisis compartivo entre las dos versiones de ghost (5.74.0 vs 4.44)
   
    NOTA: Se optó por la versión 4.44 con el objetivo de analizar las interfaces proporcionadas por las diversas versiones de Ghost. La elección de esta versión se basó en la intención de identificar tanto casos en los que las diferencias fueran mínimas, conservando una baja disparidad, como situaciones en las que se observara una divergencia significativa.

### Generación de reporte con BackstopJS

#### Pre-requisitos

Es necesario realizar las siguientes acciones antes de realizar la ejecución de VRT (Es necesario el uso del navegador Google Chrome):

1. Tener instalado backstopjs en su máquina.
2. Instalar el plugin para [descargar cookies del navegador](https://chrome.google.com/webstore/detail/cookie-inspector/jgbbilmfbammlbbhmmgaagdkbkepnijn?hl=en).
3. Iniciar sesión en la ABP (Ghost) en el navegador Google Chrome.
4. Usar el plugin para descargar las cookies en el home de Ghost.
5. Ajustar el archivo `group1-e2e-automation/src/kraken/vrt/backstop/backstop_data/engine_scripts/cookies.json` con la información de cookies previamente descargada.

   ```json
   [
     {
       "name": "ghost-admin-api-session",
       "value": "s%3A2shJw--rhRdiPsh9JqhhDQTLyWAJMXy-.3hySm1gYUoldt38qm1%2Fe48%2FeemuQbeGsm7IB89xVLGg",
       "domain": "localhost",
       "path": "/ghost",
       "expires": 1716207699.209561,
       "httpOnly": true,
       "secure": false,
       "sameSite": "Lax"
     }
   ]
   ```


#### Ejecución

Para la generación del reporte HTML de VRT con BackstopJS, es necesario ejecutar lo siguiente:

1. Haber realizado previamente los pasos de: Instalación y ejecución de pruebas con Kraken
2. Ubicarse en el siguiente directorio:
   ```shell
   $ cd group1-e2e-automation/src/kraken/vrt/backstop
   ```	
3. Ejecutar el siguiente comando
   ```shell
   $ backstop test
   ```
5. Posterior a este paso, ejecutar el comando
   ```shell
   $ backstop approve
   ```
7. Finalmente, volver a ejecutar el comando
   ```shell
   $ backstop test
   ```
9. Esto generará el reporte HTML en la ruta `group1-e2e-automation/src/kraken/vrt/backstop/backstop_data/html_report/index.html`
    ![Reporte HTML Backstop](https://github.com/edwinsilva-miso/group1-e2e-automation/assets/142602650/9cb21999-60ac-4355-9eb3-cbdf1e338a23)

## Instalación y ejecución de pruebas con Puppeteer
### Prerequisitos:
1. Usar una version de Node LTS (12.0.0^, 16.0.0^, 18.0.0^)
2. Usar la version LTS mas reciente de npm
3. Tener funcionando y corriendo Ghost

### Instalación y set-up de Puppeteer:
1. Clonar el repositorio de forma local
2. Ir a la carpeta de trabajo  ./group1-e2e-automation/src/puppeteer
3. Instalar Puppeteer con: 
```shell
npm install puppeteer
npm install
```
(Si es necesario hacer downgrade de la version de node installar nvm y utilizar "nvm use 18" para volver a la version 18 de node)
4. Ir a los directorios ubicados dentro de: 
```
./group1-e2e-automation/src/puppeteer
```
ingresar al archivo config.js: 
```
./group1-e2e-automation/src/puppeteer/config.js
```
Ahi encontra una seccion de codigo como esta:

```js
    // Variables de inicio de sesion
    const usuario = 'my.user@email.com';
    const password = 'my.password';
```

Ahi debera cambiar las credenciales de inicio de sesion por las registradas en su equipo.

5. Ejecutar las pruebas desde el directorio : 
```
./group1-e2e-automation/src/puppeteer
```
```
node index.js
```
Para ejecutar las pruebas realizadas en la version Anterior:
```
node indexOld.js
```
Para ejecutar las pruebas realizadas con generación aleatoria de datos:
```
node indexAllEscenaries.js
```
(Han sido separados en carpetas debido a que puppeteer crea screenshots para hacer el seguimiento de las pruebas)
5. Revisar en la consola y los screenshots los escenarios ejecutados.



