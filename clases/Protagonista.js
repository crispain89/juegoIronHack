import { Personaje } from './Personaje.js';

export class Protagonista extends Personaje { 
    derecha;
    izquierda;
    arriba;
    abajo;
    dinero;

    constructor(posicionX, posicionY) { 
        super(posicionX, posicionY)
        this.anchoPersonaje = 50;
        this.altoPersonaje = 50;
        this.image = new Image();
        this.image.src = './imagenes/ratona.png'
        this.derecha = false;
        this.izquierda = false;
        this.arriba = false;
        this.abajo = false;
        this.v = 3;
        this.vx =this.v;
        this.vy =this.v;
        this.dinero = 0;
        this.controles();
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.anchoPersonaje, this.altoPersonaje)
    }
    move(ctx) { 
        console.log("derecha",this.derecha)
        if (this.derecha && this.x+this.anchoPersonaje<=ctx.canvas.width) { 
            this.x += this.vx;
        }if (this.izquierda && this.x>=0) { 
            this.x -= this.vx;
        }if (this.arriba && this.y>=0) { 
            this.y -= this.vy;
        }if (this.abajo && this.y+this.altoPersonaje<=ctx.canvas.height) { 
            this.y += this.vy;
        }
    }
    controles() { 
        document.addEventListener('keydown',  (e)=> {
            e.preventDefault();
            if (e.key === "ArrowLeft") {
                this.izquierda = true;
            }
            if (e.key === "ArrowUp") {
                this.arriba = true;
            }
            if (e.key === "ArrowRight") {
                this.derecha = true;
            }
            if (e.key === "ArrowDown") {
                this.abajo = true;
            }
          });
          
          document.addEventListener('keyup',  (e)=> {
            
              if (e.key === 'ArrowLeft') {
                  this.izquierda = false;
              }
              if (e.key === 'ArrowUp') {
                  this.arriba = false;
              }
              if (e.key === 'ArrowRight') {
                  this.derecha = false;
              }
              if (e.key === 'ArrowDown') {
                  this.abajo = false;
              }
            });


    }
}