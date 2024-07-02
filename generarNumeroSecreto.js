function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * 10) + 1;
  console.log(generarNumeroSecreto);

  if (listaNumerosSorteados.includes(numeroGenerado)) {
    return generarNumeroSecreto();
  } else {
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
  }
}
