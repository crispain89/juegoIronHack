export class Juego{
    canvas;
    ctx;
    width = 800;
    height = 600;
    constructor( canvasImage) { 
        this.listCafe = [];
        this.listDream = []
        this.jugador;
        this.profesor;
        this.canvasImage=canvasImage;
        
        
    }
    
    crearCanvas() {
        
        this.canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d');
        this.canvas.style.background = 'black'
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        const backgroundCanvas = new Image();
        backgroundCanvas.src = this.canvasImage;
        this.ctx.drawImage(backgroundCanvas,0,0,this.width,this.height);   
        

       
    }

    

    //crear profesor
    //crear el jugador 
    //crear los premios 'cafe'
    //añadirlo a la lista ListCafe
    //crear las bolas de sueño
    //añadirlo a la lista de listDream
    //crear los TA
    

}