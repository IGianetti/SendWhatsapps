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
    const msg = [{message1: 'Hola '+`${nombre}`+'😃!\n'+'Queremos recordarte que tienes cita con el'+ `${turno}`+ ' !\n'+'🥰​​'},
    {message1: `${nombre}`+'Se agendo correctamente tu turno de 👩‍⚕️​ \n'+`${turno}`+'Gracias por elegirnos!'},
    {message1:'Hola '+`${nombre}`+'tienes tu turno con el '+`${turno}`+'👩‍⚕️\n'+'Gracias por elegirnos!'},
    {message1:'Su turno con '+`${turno}`+'se ha agendado 👩‍⚕️\n'+`${nombre}`+' te esperamos😃!'},
    {message1:'Este es un recordatorio de que ha elegido turno con la especialidad '+`${turno}`+'\n'+`${nombre}`+' te esperamos😃!'}]
    
    const aleatorio = msg[Math.floor(Math.random()* msg.length)] 
    return aleatorio 
}





module.exports = { sendMessage, createMessage }