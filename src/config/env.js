// aca va el manejo de las variables de entorno

// importamos dotenv y env-var de manera anterior
// const {config} = require('dotenv')
// const {get} = require('env-var')
import env from'dotenv'
import get from 'env-var';

env.config()

// creamos un objeto con las variables de entorno que traemos desde .env
export const envs = {
    PORT: get.get('PORT').required().asPortNumber(),
    PUBLIC_PATH: get.get('PUBLIC_PATH').default('public').asString()
}

// module.exports = {
//     envs
// }