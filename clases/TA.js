import { Personaje } from './Personaje.js';
export class TA extends Personaje {
    constructor(posicionX, posicionY,imagenSrc) { 
        super(posicionX, posicionY);
        this.x = posicionX;
        this.y = posicionY;
        this.direccionX = 'derecha';
        this.direccionY = 'abajo';
        this.anchoPersonaje = 40;
        this.altoPersonaje = 40;
        this.imagen = imagenSrc;
        this.vx = 3
        this.vy = 0;
        this.cafe = 0;
        this.musica=document.getElementById('')
        this.yUpDown = Math.round(Math.random())
    }
    draw(ctx) {
        ctx.drawImage(this.imagen, this.x, this.y, this.anchoPersonaje, this.altoPersonaje)
    }
    comprobarRebote(ctx) { 
        if (this.x+this.anchoPersonaje >= ctx.canvas.width - 2) { 
            this.direccionX = 'izquierda'
            this.vy = Math.floor(Math.random() * 5)
            this.yUpDown = Math.round(Math.random()) ? this.direccionY === "arriba" : this.direccionY === "abajo"      
        }
        if (this.x <= 0) { 
            this.direccionX='derecha'
            this.vy = Math.floor(Math.random() * 5)
            this.yUpDown = Math.round(Math.random()) ? this.direccionY === "arriba" : this.direccionY === "abajo"      
        }
        if (this.y <= 0) {
            this.direccionY = "abajo";
        }
        if (this.y + this.altoPersonaje >= ctx.canvas.height - 2) {
            this.direccionY = "arriba";
          }
        if (this.direccionX == 'izquierda') { 
            this.x -= this.vx;
        }
        if (this.direccionX == 'derecha') { 
            this.x += this.vx;

        }
        if (this.direccionY === "abajo") {
            this.y += this.vy
        }
        if (this.direccionY === "arriba") {
          this.y -= this.vy
        }
    }
}
