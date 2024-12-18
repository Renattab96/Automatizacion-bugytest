# Bugytest challenge 

# Criterios de Aceptación
- Se debe poder votar si el usuario se encuentra con la sesión activa. 
- Ocultar el botón de votar y el campo de comentario cuando no haya sesión activa de un usuario y mostrar un mensaje en su lugar.
- Se debe poder dejar un comentario si el usuario así lo desea.
- Mostrar una tabla donde se pueda ver la siguiente información: Date, Author, Comment.
- Mostrar la descripción, especificación y la cantidad de votos del auto seleccionado.

## Tabla de Contenidos

1. [Requisitos Previos](#requisitos-previos)
2. [Instalación](#instalación)


---

### Requisitos Previos

Antes de empezar, asegúrate de tener instalados los siguientes recursos en tu sistema:

- [Node.js](https://nodejs.org/) - Recomendado v14.x o superior.
- [Git](https://github.com/Renattab96/Automatizacion-bugytest.git) - Para clonar el proyecto.
-  En el Directorio screenshot se guarda las capturas de la ejecución 

Puedes verificar si tienes Node.js y Git instalados ejecutando los siguientes comandos:

```bash
node -v
git --version

```
### Instalación
Sigue estos pasos para configurar el proyecto en tu máquina local.

# 1. Clonar el Repositorio
Clona este repositorio en tu máquina local usando el siguiente comando:

```bash
git clone https://github.com/tu-usuario/nombre-del-repositorio.git
```
Reemplaza tu-usuario y nombre-del-repositorio con tu nombre de usuario y el nombre de tu repositorio en GitHub.

Luego, navega al directorio del proyecto:

```bash
cd nombre-del-repositorio
```

# 2. Instalar Dependencias
Instala las dependencias de Node.js utilizando npm:

```bash
npm install
```

# 3. Ejecución del Proyecto
Pruebas Automatizadas con Cypress
Este proyecto utiliza Cypress para realizar pruebas de extremo a extremo (E2E).

1. Instalar Cypress
Si aún no tienes Cypress instalado, puedes instalarlo con:

```bash
npm install cypress --save-dev
```
Esto instalará Cypress como una dependencia de desarrollo.

#### Secuencia de ejecución de Test Case

* 1-login.cy.js 
* 2-dejar-comentario.cy.js
* 3-Verificar_Comentario.cy.js
* 4-detalle_card.cy.js

#### El comando siguiente ejecuta solo por terminal 
```bash
npx cypress run
```

#### Abrir Cypress con Navegadores 
Para abrir la interfaz gráfica de Cypress, usa el siguiente comando:
Seleccionar el navegador -> Chrome 

```bash
npx cypress open
```
