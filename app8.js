/**
 * Ejercicio - Servir contenido estático
 * El ejercicio va enfocado a sustituir la impresión de mensajes en las rutas por
 * contenido estático, en esta caso páginas web.
*/

const express = require('express')
const app = express()
const port = 8080

/**
 * Se creo carpeta public y dentro index.html
 * Se creará un Middleware para habilitar la ruta index.html
 * 
 * 
 * Para servir contenido estático debemos indicarle a la aplicación cual es
 * la carpeta donde se almacenarán las páginas web, por medio de un Middleware
 * en este caso el Middleware app.use(express.static('public'))
 * */

app.use(express.static('public')) //Middleware para la carpeta pública
//Este es un PATH estatico

// app.get('/', (req, res) => { 
//     res.send('Home Page')
// }) Esta lineas nunca se van a ejecutar por el Middleware

app.get('/hola-mundo', (req, res) => {
    res.send('Hola mundo en su respectiva ruta')
})

app.get('*', (req, res) => {
    res.send('404 | Page not found')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})