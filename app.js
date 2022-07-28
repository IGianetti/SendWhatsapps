const { sendMessage, createMessage } = require ("./controllers/send.js") 
const { eraseWWebjsAuth } = require("./controllers/erase.js")
const express = require('express')
const cors = require('cors')
const { Client, LocalAuth } = require('whatsapp-web.js')
const qrcode = require('qrcode-terminal')
const client = new Client({ authStrategy: new LocalAuth()})

const CANT_MAX = 40 // cantidad de envios maximos (puede variar entre 40 y 60)
const app = express()
app.use(cors())
app.use(express.urlencoded({extended: true}))

const sendWithApi = (req, res) => {
    
    const {name, to, doc, fecha} = req.body
    const nro = `549${to}@c.us`     
    
    let msg = createMessage(name, doc, fecha)
    let count = 0 
    
    while (count <= CANT_MAX) {
        sendMessage(client, nro, msg)    
        res.writeHead(302, {
            Location: 'http://127.0.0.1:5500/index.html'
        });
        res.end(); 

        //Cuando el contador llegue a 40 elimina la carpeta de autenticacion del cliente.
        if (count === CANT_MAC) {
            eraseWWebjsAuth()
        }

        count++
    }
}

app.post('/send', sendWithApi)



client.on('qr', (qr) => {
    // NOTE: This event will not be fired if a session is specified.
    console.log('Por favor, escanee el QR!');
    qrcode.generate(qr, { small: true })
});

client.on('ready', () => {
    console.log('El cliente esta listo para trabajar!');    
});        

client.on('authenticated', () => {
    console.log('Cliente autenticado!');  
});

client.on('auth_failure', msg => {
    // Fired if session restore was unsuccessfull
    console.error('La autenticacion fallo! ', msg);    
});

client.initialize();

const PORT = 9000
app.listen(PORT, () => {
    console.log("API escuchando en puerto: ", PORT)
})

