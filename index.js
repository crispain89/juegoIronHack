import { Juego } from './clases/Juego.js'
// import{Personaje } from './Personaje.js'
// import { Objeto } from './Objeto.js'


window.addEventListener('load', () => { 
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const imagenFondo = new Image();

    imagenFondo.src='./imagenes/fondoCanvas.jpg'
    const juego = new Juego(ctx, imagenFondo);
    
    juego.init();

   
})




// juego.crearCafes();
