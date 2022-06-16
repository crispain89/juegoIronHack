import { Juego } from './clases/Juego.js'

document.getElementById('canvas').style.display = 'none';
document.getElementById("marcador").style.display = 'none'
document.getElementById("marcadorCafe").style.display = 'none'
const canvas = document.getElementById('canvas');

const audioJuego = new Audio();
audioJuego.id="audioJuego"
audioJuego.src = './musica/intro.mp3'
audioJuego.volume=0.5


console.log('index')
window.addEventListener('load', () => { 
    audioJuego.play()
    let start = document.getElementById('submit');
    start.addEventListener('click', () => {
        const imagenFondo = new Image();
        imagenFondo.src='./imagenes/fondoCanvas.jpg'
        document.getElementById('pantalla__principal').style.display = 'none'
        document.getElementById('canvas').style.display = 'flex';
        document.getElementById("marcador").style.display = 'flex';
        const ctx = canvas.getContext('2d');
        const juego = new Juego(ctx, imagenFondo);
        juego.init();
        // if (juego.listCafes.length === 0) { 
        //     audioJuego.pause();
        // }
    })

   
})




