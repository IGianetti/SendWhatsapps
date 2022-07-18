function capturar(){    
    class Persona {
        constructor(nombre, tel, turno, fecha) {
            this.nombre = nombre
            this.tel = `549${tel}@c.us`
            this.turno = turno
            this.fecha = fecha
        }
    }
    let nombreCapura = document.getElementById("nombre").value
    let telCapura = document.getElementById("tel").value
    let turnoCapura = document.getElementById("turno").value
    let fechaCapura = document.getElementById("fecha").value

    nuevaPersona = new Persona(nombreCapura, telCapura, turnoCapura, fechaCapura)
    llenarArray()

      
          
}

let arrayDatos = []
const llenarArray = () => {     
    console.log("Agregue a las lista a: ", nuevaPersona)
    arrayDatos.push(nuevaPersona) 
    console.log(arrayDatos)
    document.getElementById("tabla").innerHTML += 
    '<tbody><td>'+ nuevaPersona.nombre +'</td><td>'+ nuevaPersona.tel +'</td> <td>'+ nuevaPersona.turno +'</td><td>'+ nuevaPersona.fecha +'</td></tbody>'
    return arrayDatos
}