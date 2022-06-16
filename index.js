import { Juego } from './clases/Juego.js'

document.getElementById('canvas').style.display = 'none';
document.getElementById("marcador").style.display = 'none'
document.getElementById("marcadorCafe").style.display = 'none'
const canvas = document.getElementById('canvas');

const audio = new Audio();
audio.src='./musica/intro.mp3'


console.log('index')
window.addEventListener('load', () => { 
    
    audio.play()
    let start = document.getElementById('submit');
    start.addEventListener('click', () => {
        const imagenFondo = new Image();
        imagenFondo.src='./imagenes/fondoCanvas.jpg'
        audio.pause();
        document.getElementById('pantalla__principal').style.display = 'none'
        document.getElementById('canvas').style.display = 'flex';
        document.getElementById("marcador").style.display = 'flex';
        const ctx = canvas.getContext('2d');
        const juego = new Juego(ctx, imagenFondo);
        juego.init();
    })

   
})




