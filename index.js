import { Juego } from './clases/Juego.js'
// import{Personaje } from './Personaje.js'
// import { Objeto } from './Objeto.js'
document.getElementById('canvas').style.display = 'none';
document.getElementById("marcador").style.display = 'none'
document.getElementById("marcadorCafe").style.display = 'none'
const audio = new Audio();
audio.src='./musica/intro.mp3'


console.log('index')
window.addEventListener('load', () => { 
    
    audio.play()
    let start = document.getElementById('submit');
    start.addEventListener('click', () => {
        audio.pause();
        document.getElementById('pantalla__principal').style.display = 'none';
        document.getElementById("marcador").style.display = 'block';
        document.getElementById('canvas').style.display = 'block';
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        const imagenFondo = new Image();
    
    
        imagenFondo.src='./imagenes/fondoCanvas.jpg'
        const juego = new Juego(ctx, imagenFondo);
        juego.init();
    })

   
})




// juego.crearCafes();
