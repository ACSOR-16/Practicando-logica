// un Pequeño programa para calcular el promedio de las notas de los alumnos.

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
console.log(promedioFinal);