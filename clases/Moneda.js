import { Objeto} from './Objeto.js'

export class Moneda extends Objeto { 
    constructor(posicionX, posicionY) {
        super(posicionX, posicionY)
        this.anchoMoneda = 40;
        this.altoMoneda = 40;
        this.x = posicionX;
        this.y = posicionY;
        this.valor = 400;
        this.image = new Image();
        this.image.src = "./imagenes/imagenMoneda2.png"
     
        this.musica=document.getElementById("monedaMusica")
    }
    draw(ctx) { 
        ctx.drawImage(this.image, this.x, this.y, this.anchoMoneda, this.altoMoneda)
    }


   
   
}