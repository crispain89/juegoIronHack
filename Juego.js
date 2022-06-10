
import { Personaje } from './Personaje.js'
import { Cafe } from './Cafe.js'



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
    MAX_TA = 4;
    
    constructor( ) { 
        this.listCafe = [];
        this.listDream = []
        this.jugador= new Personaje(this.ctx);
        this.profesor = new Personaje(this.ctx);
        this.cafe = new Cafe(this.generarX(), this.generarY())
       
        console.log('propiedades del cafe ',cafe)
        
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
        let posicionX = Math.floor(Math.random() * (this.width - 40)) + 40;
        console.log('posicion', posicionX)
        return posicionX;
    }
    //generamos la posicion de Y dentro del alto del canvas
    generarY() { 
        let posicionY = Math.floor(Math.random() * this.height)
        console.log('posicion', posicionY)
        return posicionY;
    }
    drawObject() { 

        this.cafe.draw(this.ctx)
    }



    //vamos a crear los cafes

    // crearCafes() { 
        
    //     console.log('crear cafe')
    //     let x = generarX();
    //     let y= generarY();
    //     let cafe =new Cafe(x, y)
    //     cafe.draw(ctx)
    //     //coger la imagen
    //     //las X
    //     //las y
    //     //width
    //     //height

    // }
 

    

    //crear profesor
    //crear el jugador 
    //crear los premios 'cafe'
    //añadirlo a la lista ListCafe
    //crear las bolas de sueño
    //añadirlo a la lista de listDream
    //crear los TA
    

}