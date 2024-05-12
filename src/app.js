// ARCHIVO PRINCIPAL
const {envs} = require('./config/env') // traemos las variables de entorno configuradas en config/env.js
const {startServer} = require('./server/server') // traemos el servidor

const options = {
    port: envs.PORT,
    public_path: envs.PUBLIC_PATH
}

//Llamada al servidor
const main = ()=>{
    //Aqui se llama al servidor
    // startServer({ se pasa objeto con los argumentos esperados por startServer, se puede hacer de las dos formas
    //     port: envs.PORT,
    //     public_path: envs.PUBLIC_PATH
    // })
    startServer(options)

}


//funcion autoconvocada
(async() =>{
    main()
})()