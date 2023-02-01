const pirzarron = document.querySelector('.bandera');
const poster = document.querySelector('.creeper');
const trianguloPizarra = document.querySelector('.triangulo');
const secuenciaDeCuadrados = document.querySelector('.mini');
let pluma = pirzarron.getContext('2d');
let cuadrado = poster.getContext('2d');
let triangulo = trianguloPizarra.getContext('2d')
let secuencia = secuenciaDeCuadrados.getContext('2d');

function crearCuadrado (x, y, w, z, color) {
  pluma.fillStyle = color;
  pluma.fillRect(x, y, w, z)
};

function crearEscuadra(color,a,b,d,f,m,n,claspincel ) {
  claspincel.fillStyle = color;
  claspincel.beginPath();
  claspincel.moveTo(a, b);
  claspincel.lineTo(d, f);
  claspincel.lineTo(m, n);
  claspincel.fill();
}

function crearCirculo(color,a,b) {
  pluma.fillStyle = color;
  pluma.beginPath();
  pluma.arc(a, b, 50, 0,2*Math.PI);
  pluma.fill();
};


crearCuadrado(0,0,1000,500, 'yellow');
crearCuadrado(100,50,800,400, 'gray');
crearCuadrado(300,30,400,440, 'red');
crearCirculo('lightyellow',500,250);
crearEscuadra('brown',500,250,400,300,600,300,pluma)
pluma.strokeRect(0,0,1000,500);
pluma.strokeStyle = "black";

// pluma.fillStyle = 'lightyellow';
// pluma.beginPath();
// pluma.arc(500, 250, 50, 0,2*Math.PI)
// pluma.fill();

crearEscuadra('black',50,50,50,400,400,400,triangulo)
crearEscuadra('white',100,175,100,350,275,350, triangulo)


function crearCreeper (x, y, w, z, color) {
  cuadrado.fillStyle = color;
  cuadrado.fillRect(x, y, w, z)
};
// cabeza
crearCreeper(0,0,400,400,'green');
// ojos
crearCreeper(50,100,110,120,'black');
crearCreeper(240,100,110,120,'black');
// nariz
crearCreeper(150,220,100,120,'black');
// boca
crearCreeper(100,300,50,100,'black');
crearCreeper(250,300,50,100,'black');

function crearSecuencia (color, x, y) {
  secuencia.fillStyle = color;
  secuencia.fillRect(x, y, 50, 50)
  secuencia.strokeStyle = "black";
  secuencia.strokeRect(x,y,50,50);
}

// let x = 0;
// while (x < 500){
//   crearSecuencia('red', x, 0);
//   crearSecuencia('white', x, 50);
//   crearSecuencia('red', x, 100);
//   x = x + 50;
// };

for (let x = 0; x < 500; x=x+50) {
  crearSecuencia('red', x, 0);
  crearSecuencia('white', x, 50);
  crearSecuencia('red', x, 100);
}