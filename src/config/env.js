// aca va el manejo de las variables de entorno
// importamos dotenv y env-var de manera anterior
const {config} = require('dotenv')
const {get} = require('env-var')

config()

// creamos un objeto con las variables de entorno que traemos desde .env
const envs = {
    PORT: get('PORT').required().asPortNumber(),
    PUBLIC_PATH: get('PUBLIC_PATH').default('public').asString()
}

module.exports = {
    envs
}