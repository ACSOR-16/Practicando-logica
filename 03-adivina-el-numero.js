// Adivina el numero aleatrio que escoge el ordenador en este caso, hay una regal el ordenador no parara hasta que tu aciertes el numero que el escogio de una lista entre del 1 al 100 tomando en cuenta que tendras un ayudita el programa te dira que tan caliente o que tan frio estaras del resultado

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let numeroAleatrio = numeroAleatorio(1, 5);
const intentosLimite = 5;
let numeroIntentos = 1;

while (numeroIntentos <= intentosLimite) {
    var numeroSeleccionado = parseInt(prompt("Ingrese un número entre 0-10"));
    if (numeroSeleccionado == numeroAleatrio){
        //corregir aquí
        alert("usted acertó, en el intento " + numeroIntentos + " el número pensado era " + numeroAleatrio);
        break;
    }
    else {
        alert("usted erró" + numeroAleatrio);
    }
    numeroIntentos++;
}