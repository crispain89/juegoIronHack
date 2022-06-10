
import { Personaje } from './Personaje.js'
import { Objeto } from './Objeto.js'

export class Juego{
    canvas;
    ctx;
    width = 800;
    height = 600;
    canvasImage = document.getElementById('backgroundImage');
    jugador;
    profesor;
    listCafe;
    listDream;
    listTA;
    MAX_CAFE = 20;
    MAX_DREAM = 20;
    
    constructor( ) { 
        this.listCafe = [];
        this.listDream = []
        this.jugador= new Personaje(this.ctx);
        this.profesor = new Personaje(this.ctx);
        
    }
    
    coordenadas(e) { 

        console.log(e)
    }
    //creamos el Canvas
    crearCanvas() {
        this.canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d');
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        const backgroundCanvas = new Image();
        backgroundCanvas.src = this.canvasImage.src;
        this.ctx.drawImage(backgroundCanvas, 0, 0, 800, 600); 
        this.canvas.addEventListener('click',this.coordenadas)
    }
    //generara la posiciones de la X dentro del ancho del canvas
    generarX() { 
        let posicionX = Math.floor(Math.random() * this.width)
        console.log('posicion', posicionX)
        return posicionX;
    }
    //generamos la posicion de Y dentro del alto del canvas
    generarY() { 
        let posicionY = Math.floor(Math.random() * this.height)
        console.log('posicion', posicionY)
        return posicionY;
    }
    //vamos a crear los cafes
    crearCafes() { 
        


    }
 

    

    //crear profesor
    //crear el jugador 
    //crear los premios 'cafe'
    //añadirlo a la lista ListCafe
    //crear las bolas de sueño
    //añadirlo a la lista de listDream
    //crear los TA
    

}