//----------------Ejercicio - Utilizar Handlebars------------------
// El sitio web como se encuentra actualmente es totalmente estático, es decir que
// si queremos modificar ciertas cosas, nosotros tenemos que modificar directamente
// desde el HTML. Si queremos volver este sitio web semidinámico se puede aplicar
// al template HANDLEBARS, un paquete de terceros en NPM muy popular que sirve para
// poder renderizar el sitio web y enviárselo de esa forma al cliente.
//
// Se recomienda utilizar handlebars para sitios webs sencillos, pero para sitios
// complejos se recomienda utilizar Frameworks complejos como Angular, Vue, React

/**
 * Buscar en la página de NPM el paquete handlebars o visitar el sitio
 * https://www.npmjs.com/package/handlebars
 * para instalar el paquete utiliza se tiene que buscar la instalación hbs
 * específicamente para express verificar el código en GITHUB
 *
 * npm install hbs
 *
 * El objetivo de hbs es pre-renderizar las páginas con hbs y enviarle al cliente
 * un sitio web totalmente renderizado, esto me ayuda a poder por ejemplo
 * reutilizar código como por ejemplo el de la barra de opciones y otras
 * partes de las páginas web a nivel de visitas
 *
 * Tenemos que tener cuenta cosas que no vamos a renderizar como por ejemplo
 * los assets como css, fonts, js y las imágenes.
 *
 * El objetivo de hbs es también separa el modelo, la vista y el controlador,
 * es decir aplicar el famoso MVC
 */

const express = require('express')
const app = express()
const port = 8080

//------------Instrucciones para crear todo este ejercicio---------
// 1-Crear carpeta public3 en la raiz, crear una subcarpeta llamada template
// 2-Cortar todo los archivos del sitio web y pasarlos a la carpeta template
// como backup del sitio, se necesitaran para tomar el código HTML
// 3-Utilizar en este código el template engine que es agregar al código de esta
// app la linea app.set('view engine', 'hbs')
// 4-crear en la raiz la carpeta views, dentro de esta carpeta crear home.hbs
// 5-Copiar todo el contenido del index.html y pegarlo en home.hbs, con esto ya
// poseemos la capacidad de reutilizar el código como los headers, el menú (nav)
// o el footer
// 6-Modificar el home.hbs en sus links principales para no utilizar .html

//utilización de hbs para el renderizado de la pagina web
app.set('view engine', 'hbs')

//Este archivo necesita crear la carpeta public3, todos los archivos del templated
//se trasladaran a la carpeta de template para hacer un backup
//Y poder empezar el trabajo de hbs (handlebars) para renderizar el sitio semi estático
//Al momento de compilar el app12.js el sitio estará roto y saldrá la página de error.
//El hbs me da la capacidad de reutilizar código

//Servir contenido estático public3 donde esta el templated
app.use(express.static('public3'))

//Controlador de la ruta principal
app.get('/', (req, res) => {
    res.render('home')
})

//Habilitamos la ruta generic http://localhost:8080/generic
app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public3/generic.html')
})

//Habilitamos la ruta elements http://localhost:8080/elements
app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public3/elements.html')
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})

/**
 * Para ejecutar esta aplicación se tiene que utilizar node app12.js
 * 
 * En este momento ya tenemos renderizado la homepage pero aún no hemos
 * renderizado las demás partes de la página es decir sus opciones de
 * elements y generic.
 * 
 * visitar el sitio web http://localhost:8080
 * El beneficio en este punto, es que ya podemos tener la capacidad de
 * reutilizar código.
 */