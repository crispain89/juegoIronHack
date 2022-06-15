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
        this.audio = document.getElementById("monedaAudio")
        this.audio= new Audio();
        this.audio.src = './musica/monedasCoger.mp3'
    }
    draw(ctx) { 
        ctx.drawImage(this.image, this.x, this.y, this.anchoMoneda, this.altoMoneda)
    }

   
   
}