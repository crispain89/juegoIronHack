import { Juego } from './clases/Juego.js'
// import{Personaje } from './Personaje.js'
// import { Objeto } from './Objeto.js'
document.getElementById('canvas').style.dusplay = 'none';
console.log('index')
window.addEventListener('load', () => { 
    let start = document.getElementById('submit');
    start.addEventListener('click', () => {
        document.getElementById('pantalla__principal').style.display = 'none';
        document.getElementById('canvas').style.dusplay = 'block';

        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        const imagenFondo = new Image();
    
    
        imagenFondo.src='./imagenes/fondoCanvas.jpg'
        const juego = new Juego(ctx, imagenFondo);
        juego.init();
    })

   
})




// juego.crearCafes();
