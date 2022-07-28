const fs = require('fs').promises

const eraseWWebjsAuth = () =>{ 

    fs.rmdir('../.wwebjs_auth', { recursive: true })
        .then(() => {
        console.log('Directorio ".wwebjs_auth" removido')
    })
     .catch(err => {
        console.error('Error al eliminar el directorio ".wwebjs_auth" folder', err)
    })
} 

module.exports = { eraseWWebjsAuth }