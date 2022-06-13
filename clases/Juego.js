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
        this.marcadorProtagonista =document.getElementById('dinerito_conseguido')
        this.marcadoMontoro=document.getElementById('dinerito_robado')
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
        if (this.listMonedas.length === 0) { 
            this.stop()
        }
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
        this.colisionMonedas();

        // this.enemigoHacienda.detectarColision(this.ctx);
    }
    draw() { 
        this.drawFondo();
        this.drawMonedas();
        this.drawMontoro();
        this.drawProtagonista();
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
    
    
    crearMontoro() { 
        let posicionX =Math.floor(Math.random()*this.width) ;
        let posicionY = Math.floor(Math.random()*this.height);
        let montoro = new EnemigoHacienda(posicionX, posicionY);
        this.enemigoHacienda=montoro
    }
    crearProtagonista() {
        let posicionX =Math.floor(Math.random()*this.width) ;
        let posicionY = Math.floor(Math.random()*this.height);
        this.protagonista = new Protagonista(posicionX, posicionY);
    }
    drawFondo() { 
        this.ctx.drawImage(this.fondoCanvas,0,0,this.width,this.height)
    }
    drawMontoro() { 
        this.enemigoHacienda.draw(this.ctx)
    }
    drawMonedas() { 
        this.listMonedas.forEach((moneda)=>moneda.draw(this.ctx))
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
    // COLISIONES-------------------------------------------
    colisionMonedas() { 
        for (let i = 0; i < this.listMonedas.length; i++) {
         
            if ((this.protagonista.x + this.protagonista.anchoPersonaje >= this.listMonedas[i].x) &&
                (this.protagonista.x <= this.listMonedas[i].x + this.listMonedas[i].anchoMoneda) && 
                (this.protagonista.y + this.protagonista.altoPersonaje >= this.listMonedas[i].y) && 
                (this.protagonista.y<=this.listMonedas[i].y+this.listMonedas[i].altoMoneda)
                ) {
                
                this.protagonista.dinero += this.listMonedas[i].valor 
               
                this.marcadorProtagonista.innerHTML=this.protagonista.dinero
                this.listMonedas[i].musica.play()
                this.listMonedas.splice(i, 1)
            }
        }
    }
    colisionMonPro() {
        if ((this.protagonista.x + this.protagonista.anchoPersonaje >= this.enemigoHacienda.x) &&
            (this.protagonista.x <= this.enemigoHacienda.x + this.enemigoHacienda.anchoPersonaje) &&
            (this.protagonista.y + this.protagonista.altoPersonaje >= this.enemigoHacienda.y) &&
            (this.protagonista.y <= this.enemigoHacienda.y + this.enemigoHacienda.altoPersonaje)
        ) { 
            
        }

     }
}