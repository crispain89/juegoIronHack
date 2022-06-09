export class Juego{

    constructor() { 
        this.listCafe = [];
        this.listDream = []
        this.jugador;
        this.profesor;
        this.canvas = document.getElementById('canvas');
        this.canvasWidth = '800px';
        this.canvasHeight = '600px';
        this.canvasImage;

    }

    crearCanvas() {
        console.log('hola')
        this.canvas.setAttribute('width', this.canvasWidth);
        this.canvas.setAttribute('height', this.canvasHeight);
        this.canvas.style.background='black'
    }
    

    //crear profesor
    //crear el jugador 
    //crear los premios 'cafe'
    //añadirlo a la lista ListCafe
    //crear las bolas de sueño
    //añadirlo a la lista de listDream
    //crear los TA
    

}