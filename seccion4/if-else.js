// Dias de semana abrimos a las 11
// pero los fines de semana abrimos a las 9

// entrar a un sitio web para consultar si esta abierto hoy?

let dia = 0;
let horaActual = 8;
let horaApertura;
let mensaje;

if (dia === 0 || dia === 6) {
  console.log("Fin de semana");
  horaApertura = 9;
} else {
  console.log("Dia de semana");
  horaApertura = 11;
}

if (horaActual >= horaApertura) {
  mensaje = "Esta Abierto";
} else {
  mensaje = "Esta cerrado, abrimos a las " + horaApertura;
}

console.log(horaApertura);
console.log(mensaje);
