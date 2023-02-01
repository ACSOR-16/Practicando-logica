function saltarLinea () {
  document.write("<br>");
  // document.write("<br>");
};

function imprimirFrase(frase) {
  document.write(frase);
  saltarLinea();
};

let mediaDeCalificaciones = parseInt(prompt('coloque el numero de exmanes que rendiste: '));
let numeroDeCalificaciones = 1;
let calificacionAcumulada = 0;

while (numeroDeCalificaciones <= mediaDeCalificaciones) {
  let calificaiones = parseFloat(prompt('ingresa tu calificacion: '));
  calificacionAcumulada = calificacionAcumulada + calificaiones;
  numeroDeCalificaciones++;
  console.log(calificaiones, calificacionAcumulada)
}
const promedioFinal = calificacionAcumulada / mediaDeCalificaciones;
imprimirFrase(promedioFinal);


// const totalDePartidos = 6;
// let contadorDeVictorias = parseInt(prompt('partidos ha ganado tu equipo: '));
// let contadorDeEmpates = parseInt(prompt('partidos ha empatado tu equipo: '));
// let contadorDederrotas = parseInt(prompt('partidos ha perdido tu equipo: '));
// let partidosJugados = contadorDeVictorias + contadorDeEmpates + contadorDederrotas;

// let PuntajeEnTablaClasificacion = (contadorDeVictorias * 3) + (contadorDeEmpates * 1) + (contadorDederrotas * 0);


// if (partidosJugados > totalDePartidos  ) {
// alert('por Favor no exeda el numero de partido vuleva a intetarlo')
// } else {
//   imprimirFrase(`El total de tus puntos son: ${PuntajeEnTablaClasificacion}`);
// }

// let multiplicador = parseInt(prompt('Escribe el multiplicador: '));
// let multiplicando = parseInt(prompt('Escribe el multiplicando: '));

// // let array = [0,1,2,3,4,5,6,7,8,9,10]

// // for (multiplicando; multiplicando <= 12; multiplicando++) {
// //   imprimirFrase(`El resultado de ${multiplicador} X ${multiplicando} es igual a: ${(multiplicador * multiplicando)}`)
  
// // }

// while (multiplicando <= 12) {
//   imprimirFrase(`El resultado de ${multiplicador} X ${multiplicando} es igual a: ${(multiplicador * multiplicando)}`)
//   multiplicando++;
// }