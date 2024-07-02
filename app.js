let intentos = 1
let numeroMaximo = 10
let listaNumerosSorteados = []
let numeroSecreto = generarNumeroSecreto()


function asignarElementoTexto(elemento, texto){
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto
}


function verificarIntento () {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
 
if (numeroDeUsuario === numeroSecreto) {
  asignarElementoTexto ("p", `Acertaste el numero en ${intentos} ${(intentos === 1 ? "vez" : "veces")}`)
  document.getElementById ("reiniciar").removeAttribute("disabled")

} else {
  if (numeroDeUsuario > numeroSecreto) {
    asignarElementoTexto ("p", "El número secreto es menor")
  } else {
    asignarElementoTexto ("p", "El número secreto es mayor")
  }
  intentos ++
  limpiarCaja ()
}
  return
}

function limpiarCaja () {
   document.querySelector("#valorUsuario").value = ""

}

function generarNumeroSecreto() {
   let numeroGenerado = Math.floor(Math.random ()*numeroMaximo) +1;
   
   if (listaNumerosSorteados.length === numeroMaximo) {
    asignarElementoTexto ("p", "ya se sortearon todos los numeros posibles")
    return null;
  } else {
   
  
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto ()
    } else {
      listaNumerosSorteados.push(numeroGenerado)
        return (numeroGenerado)
      
    }
  }
  
}

function condicionesIniciales (){
  asignarElementoTexto("h1","juego del numero secreto!")
  asignarElementoTexto("p", `indica un numero del 1 al ${numeroMaximo}`) 
  numeroSecreto = generarNumeroSecreto ()
  intentos = 1
  console.log(numeroSecreto)
}

function reiniciarjuego(){

limpiarCaja ()

condicionesIniciales ()

document.querySelector("#reiniciar").setAttribute("disabled", "true")
}

condicionesIniciales()




