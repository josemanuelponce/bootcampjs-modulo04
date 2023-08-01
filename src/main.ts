// Sumar turnos
function sumarTurno(){

let elemento = document.getElementById("turno");

    if(elemento !== null && elemento !== undefined && elemento instanceof HTMLHeadingElement){
        let numeroActual = parseInt(elemento.innerHTML);
        elemento.innerHTML = `${++numeroActual}`.padStart(2,"0");
    }


}

const botonSumar = document.getElementById("sumar");

    if (botonSumar !== null && botonSumar !== undefined) {
        botonSumar.addEventListener("click", sumarTurno);
    }

// Restar turnos
function restarTurno(){

    let elemento = document.getElementById("turno");
        
        if(elemento !== null && elemento !== undefined && elemento instanceof HTMLHeadingElement){
            let numeroActual = parseInt(elemento.innerHTML);
            elemento.innerHTML = `${--numeroActual}`.padStart(2,"0");
        }
        
        
}
        
const botonRestar = document.getElementById("restar");
        
    if (botonRestar !== null && botonRestar !== undefined) {
        botonRestar.addEventListener("click", restarTurno);
    }

// Resetear el turno (ponerlo a 0)

function resetTurno(){

    let elemento = document.getElementById("turno");
        
        if(elemento !== null && elemento !== undefined && elemento instanceof HTMLHeadingElement){
            elemento.innerHTML = "00";
        }
        
        
}
        
const botonReset = document.getElementById("reinicio");
        
    if (botonReset !== null && botonReset !== undefined) {
        botonReset.addEventListener("click", resetTurno);
    }

// Caja de texto para que el operario ingrese un numero

function ingresar(){
    let elemento = document.getElementById("turno");
    let inputNumero = document.getElementById("ingresar");
        
    if (elemento !== null && elemento !== undefined && elemento instanceof HTMLHeadingElement &&
        inputNumero !== null && inputNumero !== undefined && inputNumero instanceof HTMLInputElement) {
      let nuevoNumero = parseInt(inputNumero.value);
      
        elemento.innerHTML = `${nuevoNumero}`.padStart(2, "0");
        inputNumero.value = ''; 
    }
  }
    
const botonIngresar = document.getElementById("ingresarBoton");
    
if (botonIngresar !== null && botonIngresar !== undefined) {
    botonIngresar.addEventListener("click", ingresar);
}

