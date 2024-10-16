// -----------------Ejercicio - Servir un sitio web completo - Parte 1-----------------
// En este ejercicio se brinda una plantilla de un sitio web completo para que el 
// backend lo pueda servir cuando el cliente quiera ese recurso.

/**
 * Para realizar este ejercicio es necesario descargar la plantilla que se encuentra
 * el área de recursos de la clase actual, descomprimir y hacer lo siguiente:
 * 1-Agregar los archivos del sitio web a una carpeta en el directorio raiz llamada public2
 * 2-Agregar un Middleware para que se utilice la carpeta public2
 * 3-Ejecutar la aplicación y analizar lo que está pasando
 */

const express = require('express')
const app = express()
const port = 8080

//servir contenido estatico public2 donde esta el templated
app.use(express.static('public2'))

app.get('/', (req, res) => {
    res.send('Home Page')
})

app.get('/hola-mundo', (req, res) => {
    res.send('Hola mundo en su respectiva ruta')
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})

/**
 * Ejecutar esta aplicacion con node app10.js
 * Visitar en el navegador la direccion http://localhost:8080
 * Por que se despliega el sitio web, respuesta tecnica, caracteristicas tiene
 * la URL?
 * Por que no se despliegan las opciones de la pagina "generic" y "elements"?
*/