const { sendMessage, createMessage } = require ("./controllers/send.js") 
const express = require('express')
const cors = require('cors')
const { Client, LocalAuth } = require('whatsapp-web.js')
const qrcode = require('qrcode-terminal')
const client = new Client({ authStrategy: new LocalAuth()})

const app = express()
app.use(cors())
app.use(express.urlencoded({extended: true}))

const sendWithApi = (req, res) => {
    
    const {name, to, doc} = req.body
    console.log(name, to, doc)
    let msg = createMessage(name, doc)
    const nro = `549${to}@c.us`   
    sendMessage(client, nro, msg)
    res.writeHead(302, {
        Location: 'http://127.0.0.1:5500/index.html'
    });
    res.end();
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

