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
	a. Android SDK Platform-Tools
	b. Android SDK Build-Tools
	c. Android SDK Tools (Obsolete) (Se deben poner visibles los paquetes obsoletos si se está usando Android Studio Giraffe o una versión más reciente)

4. Configurar las siguientes rutas en PATH: 
	a. C:\Users\***\AppData\Local\Android\Sdk\platform-tools
	b. C:\Users\***\AppData\Local\Android\Sdk\tools
	c. C:\Users\***\AppData\Local\Android\Sdk\build-tools\VERSION
	d. C:\Users\***\AppData\Local\Android\Sdk

5. Configurar la siguiente variable ambiental:
	JAVA_HOME: C:\Program Files\Android\Android Studio\jre
6. Tener funcionando y corriendo Ghost
   
### Instalación y set-up de Kraken:
1. Clonar este repositorio de forma local
2. Ir a la carpeta de trabajo  ./group1-e2e-automation/src/kraken
3. Instalar Kraken de manera global: npm install kraken-node -g
4. Instalar Appium de manera global: npm install -g appium
5. Puede verificar que todo haya quedado instalado usando el comando kraken-node doctor
6. Luego desde la misma ubicación ejecutar el siuiente comando: npm install
7. Modificar el archivo properties.json ubicado en group1-e2e-automation\src\kraken, con las credenciales del usuario admintrador de la aplicación Ghost: USERNAME1 (Correo) y PASSWORD1 (Contraseña).
8. Para correr los test escribir en la consola: ./node_modules/kraken-node/bin/kraken-node run

## Instalación y ejecución de pruebas con Puppeteer
### Prerequisitos:
### Instalación y set-up de Puppeteer:

