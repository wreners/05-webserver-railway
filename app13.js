//----------------Ejercicio - enviando argumentos desde el controlador----------------
// Instrucciones para realizar este ejercicio
// 1-crear una copia de home.hbs para home2.hbs
// 2-en el controlador de la pagina principal, crear un objeto con las
// propiedades nombre: 'tu nombre', titulo:'Curso de Node'
// 3-en el hbs sustituir {{}} las propiedades que queremos desplegar el
// home2.hbs examinar el código

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

//Servir contenido estático public3 donde esta el templated
app.use(express.static('public3'))

//Controlador de la ruta principal
app.get('/', (req, res) => {
    res.render('home2', {
        nombre: 'Wrener',
        titulo: 'Curso de Node'
    })
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
 * visitar el sitio web http://localhost:8080
 * Se desplego el sitio web con alguna modificacion?
 */