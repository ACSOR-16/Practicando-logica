const pantalla = document.querySelector(".paint");
const tabla = document.querySelector('.diana');
let pincel = pantalla.getContext("2d");        
let dianaGame = tabla.getContext('2d');

function disenharCircunferencia(x,y,radio){
    pincel.fillStyle = "lightyellow";
    pincel.fillRect(0,0,600,400); 
    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.arc(x,y,radio,0,2*Math.PI);
    pincel.fill();
}    

function limpiarPantalla(){

    pincel.clearRect(0,0,600,400);

}

var x = 0
var sentido = 1;

function actualizarPantalla(){

    limpiarPantalla();
    if(x > 600){
        sentido = -1;
    }else if(x < 0){
        sentido = 1;
    }
    disenharCircunferencia(x,50,20);
    x = x + sentido;

}

setInterval(actualizarPantalla,10);

dianaGame.fillStyle = 'green';
dianaGame.fillRect(0,0,600,400);
let radio = 10;
let ejeX;
let ejeY; 

function crearBlanco(x,y,radio, color){
    dianaGame.fillStyle = color;
    dianaGame.beginPath();
    dianaGame.arc(x,y,radio,0,2*Math.PI);
    dianaGame.fill();
};

function limpiarObjetivo(){

    dianaGame.clearRect(0,0,600,400);

};    

function objetivoAleatorio(x, y) {
    
    crearBlanco(x, y, (radio+20), 'red');
    crearBlanco(x, y, (radio+10), 'white');
    crearBlanco(x, y, radio, 'red');
};

function posicionAleatoria(maximo) {
    return Math.floor(Math.random()*maximo);
};

function actualizarObjetivo(){
    limpiarObjetivo();
    ejeX = posicionAleatoria(600);
    ejeY = posicionAleatoria(400);
    objetivoAleatorio(ejeX, ejeY);

}

setInterval(actualizarObjetivo, 1000);

function disparar(event) {
    var disparoEjeX = event.pageX - tabla.offsetLeft;
    var disparoEjeY = event.pageY - tabla.offsetTop;

    if((disparoEjeX < ejeX + radio) && 
    (disparoEjeX > ejeX - radio) &&
    (disparoEjeY < ejeY + radio) &&
    (disparoEjeY > ejeY - radio) ) {
        alert('En el Blanco!!');
    }
}

tabla.onclick = disparar;
console.log(tabla.onclick, disparar);