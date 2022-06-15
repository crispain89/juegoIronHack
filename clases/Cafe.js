import { Objeto } from "./Objeto.js";
export class Cafe extends Objeto  { 
    
    constructor(posicionX, posicionY) {
        super(posicionX, posicionY);
        this.anchoCafe = 40;
        this.altoCafe = 40;
        this.x = posicionX;
        this.y = posicionY;
        this.valor = 10;
        this.image = new Image();
        this.image.src = './imagenes/cafe1.png'
        this.audio = new Audio();
        this.audio.src='./musica/pajaroLoco.mp3'
        // this.musica = document.getElementById('pajaroLocoMusica');
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.anchocafe, this.altoCafe);
    }
    

}