export class Juego{
    canvas;
    ctx;
    width = 800;
    height = 600;
    canvasImage = document.getElementById('backgroundImage');
    constructor( ) { 
        this.listCafe = [];
        this.listDream = []
        this.jugador;
        this.profesor;
        
    }
    
    crearCanvas() {
 
        
        this.canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d');
       
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        
        const backgroundCanvas = new Image();
        backgroundCanvas.src = this.canvasImage.src;
        this.ctx.drawImage(backgroundCanvas, 0, 0, 800 ,600); 
       

        
        

       
    }

    

    //crear profesor
    //crear el jugador 
    //crear los premios 'cafe'
    //añadirlo a la lista ListCafe
    //crear las bolas de sueño
    //añadirlo a la lista de listDream
    //crear los TA
    

}