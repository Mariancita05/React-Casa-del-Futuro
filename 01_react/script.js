

function hablar(cita) {
    alert(cita)
}

function crearBoton(cita, nombre) {
    /* SELECCIONAMOS EL BODY */
    const body = document.querySelector("body")
    /* CREAMOS EL BOTON */
    const boton = `<button onclick="hablar(${cita})">${nombre}</button>`
    /* INSERTAMOS EL BOTON EN EL BODY */
    body.insertAdjacentHTML("afterbegin", boton)   
}

crearBoton("ganar en dolares", "que tengo que hacer")