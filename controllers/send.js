const DELAY_TIME = 30000; //ms

 // recibe destinatario y mensaje, junto al client de whatsapp-web.js
const sendMessage =  (client, nro, mensaje) => {    
    setTimeout(() => {
        client.sendMessage(nro, mensaje)        
        console.log(nro, mensaje)
        console.log(`Enviando mensajes....`);
    }, DELAY_TIME);
    
}

/* Creamos el mensaje personalizado a enviar
   lo ideal seria tener multiples mensajes
   y seleccionarlos de manera aleatoria
*/
const createMessage = (nombre, turno) =>{ 
    msg = 'Hola '+`${nombre}`+'😃!\n'+
           "AfriBot 🤖 te recuerda que tienes cita con el "+ `${turno}`+ " !\n"+
           "💩​"    
    return msg 
}



module.exports = { sendMessage, createMessage }