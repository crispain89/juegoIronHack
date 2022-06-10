import { Juego } from './Juego.js'
// import{Personaje } from './Personaje.js'
// import { Objeto } from './Objeto.js'


console.log('uno')
const imagenFondo='./20605.jpg'
const juego = new Juego();

juego.crearCanvas(imagenFondo);


juego.generarX();
juego.generarY();
