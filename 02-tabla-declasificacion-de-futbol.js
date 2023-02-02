// Un Pequeño programa que calcula cuanto puntos totales corresponde a la temporada que ha hecho un equipo de futbol recordado que para ello hay que tener en consideracion lo siguiente:
//  - partidosGanados = 3 puntos.
//  - partidosEmpatados = 1 puntos.
//  - partidosPerdidos = 0 puntos.
//  - total de partidos jugados en la temporada son 40, 20 de ida y 20 de vuelta

function calcularPuntosFutbol(partidosGanados, partidosEmpatados, partidosPerdidos) {
    const partidosJugados = partidosGanados + partidosEmpatados + partidosPerdidos;
    const puntosTotales = (partidosGanados * 3) + (partidosEmpatados * 1) + (partidosPerdidos * 0);

    if ( partidosJugados == 40) {
        console.log(`Tu equipo ha jugado ${partidosJugados} partidos de un total de 40 partidos, has completado la temporada de la Premier League`);
        console.log(`Los puntos de tu equipo son ${puntosTotales}`);
    } if ( partidosJugados < 40) {
        console.log(`Tu equipo ha jugado ${partidosJugados} partidos de un total de 40 partidos, aun no termina la temporada de la Premier League`);
        console.log(`Los puntos de tu equipo son ${puntosTotales}, aun te quedan ${40 - partidosJugados} partidos por jugar`);
    } else {
        console.log(`Tu equipo ha jugado ${partidosJugados} partidos de un total de 40 partidos?, algo estas haciendo mal vuelve a intentarlo`);
    }
    
}

calcularPuntosFutbol(20, 10, 1);