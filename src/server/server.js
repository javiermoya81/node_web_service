// Aqui va la configuración del servidor

const express = require('express')
const path = require('path') // propio de node permite leer las carpetas del proyecto

const startServer = (options) => {
    const {port, public_path= 'public'} = options // esto se recibe desde app.js
    
    const app = express() //ejecutamos express para tener disponibles todos los middlewares

    // Para poder usar los middlewares se usa la palabra use, q es propia de express
    app.use(express.static(public_path)) //ponemos disponible el contenido estatico
    
    //configuramos la respuesta get
    app.get('*',(req,res)=>{
        const indexPath = path.join(__dirname + `../../../${public_path}/index.html`) // definidmos la ruta del archivo estatico quer vamos a devolver. path.join es propio de node para leer las carpetas
        res.sendFile(indexPath) // configuramos la respuesta, el archivo que devolvemos
    })
    app.listen(port,()=>{
        console.log(`Escuchando en el puerto ${port}`);
    })
}

module.exports = {
    startServer
}