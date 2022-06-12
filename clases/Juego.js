import { Moneda } from './Moneda.js'
import { EnemigoHacienda } from './EnemigoHacienda.js'
import { Protagonista } from './Protagonista.js'

export class Juego { 
    
    ctx
    listCafes
    listMonedas
    enemigoHacienda;
    protagonista;
    enemigoProfes;
    listTA 
    intervalId;
    width;
    height;
    MAX_MONEDAS = 20;
    constructor(ctx,imagenCanvas) { 
 
        this.ctx = ctx;
        this.width = 800;
        this.height = 600;
        this.listCafes = [];
        this.listMonedas = [];
        this.enemigoHacienda;
        this.enemigoProfes;
        this.protagonista;
        this.listTA = [];
        this.interval
        this.fondoCanvas = imagenCanvas;
    }
    init() { 
        this.crearProtagonista();
        this.crearMonedas();
        this.crearMontoro();
        this.intervalId = setInterval(() => { 
            this.engine()
        },1000/65)


    }
    engine() { 
        this.clearScreen();
        this.move();
        this.draw();




    }
    stop() { 
        clearInterval(this.intervalId)
    }
    
    clearScreen() {
        this.ctx.clearRect(0,0,this.width,this.height)
    }
    move() { 
        this.enemigoHacienda.comprobarRebote(this.ctx);
        this.protagonista.move(this.ctx)
        // this.enemigoHacienda.detectarColision(this.ctx);
    }
    draw() { 
        this.drawFondo();
        this.drawMonedas();
        this.drawMontoro();
        this.drawProtagonista();
    }
    drawFondo() { 
        this.ctx.drawImage(this.fondoCanvas,0,0,this.width,this.height)
    }
    crearMonedas() { 
        let posicionX = 120;
        let posicionY = 20;
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                let moneda = new Moneda(posicionX, posicionY);
                this.listMonedas.push(moneda)
                posicionX += 130;
            }
            posicionX=120
            posicionY += 42;
        }
    }    
    
    drawMonedas() { 
        this.listMonedas.forEach((moneda)=>moneda.draw(this.ctx))
    }

    crearMontoro() { 
        let posicionX =Math.floor(Math.random()*this.width) ;
        let posicionY = Math.floor(Math.random()*this.height);
        let montoro = new EnemigoHacienda(posicionX, posicionY);
        this.enemigoHacienda=montoro
    }
    drawMontoro() { 
        this.enemigoHacienda.draw(this.ctx)
    }
    crearProtagonista() {
        let posicionX =Math.floor(Math.random()*this.width) ;
        let posicionY = Math.floor(Math.random()*this.height);
        this.protagonista = new Protagonista(posicionX, posicionY);
    }
    drawProtagonista() { 
        this.protagonista.draw(this.ctx)
    }


    colisions(A, B){
        xA + wA >= Bx &&
            xA <= Bx + wB && 
            yA + hA >= By && 
            yA<=By+hB
    }
}