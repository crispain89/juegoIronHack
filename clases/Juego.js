import { Moneda } from './Moneda.js'
import { EnemigoHacienda } from './EnemigoHacienda.js'
import { Protagonista } from './Protagonista.js'
import { Cafe } from './Cafe.js'
import { EnemigoProfe } from './EnemigoProfe.js'
import { TA } from './TA.js'

export class Juego { 
    
    ctx
    listCafes
    listMonedas
    enemigoHacienda;
    protagonista;
    enemigoProfe;
    listTA 
    intervalId;
    width;
    height;
    MAX_CAFEs = 18;
    MAX_MONEDAS = 20;
    sengunda;
    MAX_TA = 4;
    listImgTA = []
    audioGameOver;
    
    constructor(ctx,imagenCanvas) { 
        this.marcadorProtagonista =document.getElementById('dinerito_conseguido')
        this.marcadorMontoro = document.getElementById('dinerito_robado')
        this.marcadorCafe =document.getElementById('cafe_conseguido')
        this.marcadorCurro=document.getElementById('cafe_robado')
        this.ctx = ctx;
        this.width = 800;
        this.height = 600;
        this.listCafes = [];
        this.listMonedas = [];
        this.enemigoHacienda;
        this.enemigoProfe;
        this.protagonista;
        this.listTA = [];
        this.imagenWin = new Image();
        this.imagenWin.src = './imagenes/diplomaGanador.jpg';
        this.imagenLostCafe = new Image();
        this.imagenLostCafe.src = './imagenes/gameOverenergia.png';
        this.imagenLostDinero = new Image();
        this.imagenLostDinero.src = './imagenes/gameOverDinero.jpg';
        this.audioLost = new Audio();
        this.audioLost.src = './musica/gameOverrey.mp3',
        this.audioGanador = new Audio();
        this.audioGanador.src='./musica/rajoy.mp3'
        this.interval
        this.fondoCanvas = imagenCanvas;
        this.level=1;
        this.listImgTA[0] = new Image();
        this.listImgTA[0].src = './imagenes/edu.png'
        this.listImgTA[1] = new Image();
        this.listImgTA[1].src = './imagenes/victor.png'
        this.listImgTA[2] = new Image();
        this.listImgTA[2].src = './imagenes/alejandro.png'
        this.listImgTA[3] = new Image();
        this.listImgTA[3].src = './imagenes/aitor.png'
        this.audioGameOver = new Audio();
        this.audioGameOver.src='./musica/gameOverrey.mp3'
        
       
    }
    init() { 
        if (this.level===1) {
            this.crearProtagonista();
            this.crearMonedas();
            this.crearMontoro();
        }
        if (this.level===2) { 
            this.crearCurro();
            this.crearCafes();
            this.crearTA();
        }
        this.intervalId = setInterval(() => { 
            this.engine()
        },1000/65)
    }
    engine() {
        this.clearScreen();
        this.move();
        this.draw();
        if (this.level === 1) {
            if (this.listMonedas.length === 0 && this.protagonista.dinero < 7000) {
                this.stop()
                this.clearScreen()
                this.fondoCanvas = this.imagenLostDinero;
                this.drawFondo()
                this.audioLost.play()
            }
            if (this.listMonedas.length === 0 && this.protagonista.dinero >= 7000) {
                document.getElementById('marcador').style.display = 'none';
                this.nextLevel();
                document.getElementById('marcadorCafe').style.display = 'flex';
            }
        } else if (this.level === 2) {
      

            if (this.listCafes.length === 0) {
                if (this.protagonista.cafe > this.enemigoProfe.cafe) {
                    this.stop()
                    this.clearScreen();
                    this.fondoCanvas = this.imagenWin;
                    this.drawFondo();
                    
                    this.audioGanador.play()

                } else {
                    this.stop()
                    this.clearScreen()
                    this.fondoCanvas = this.imagenLostCafe;
                    this.drawFondo();
                    this.audioLost.play()
                }
            }
        }
    }
    stop() { 
        clearInterval(this.intervalId);
    }
    
    clearScreen() {
        this.ctx.clearRect(0,0,this.width,this.height)
    }
    move() { 
        if (this.level === 1) {
            this.enemigoHacienda.comprobarRebote(this.ctx);
            this.protagonista.move(this.ctx)
            this.colisionMonedas();
            this.colisionMonPro();
        } else if (this.level === 2) { 
            this.enemigoProfe.comprobarRebote(this.ctx);
            this.protagonista.move(this.ctx)
            this.colisionesCafes();
            this.colisionCurronPro();
            for (let i = 0; i < this.listTA.length; i++) { 
                this.listTA[i].comprobarRebote(this.ctx);
            }
            this.colisionesTAPro();
           

        }
    }
    draw() { 
        if (this.level===1) { 
            this.drawFondo();
            this.drawMonedas();
            this.drawMontoro();
            this.drawProtagonista();
        }
        if (this.level===2) { 
            this.drawFondo();
            this.drawTa();
            this.drawProtagonista();
            this.drawProfe();
            this.drawCafe();
        }
    }
    
    
    // ---------------------CREACION--------------------------------
    crearMonedas() { 
        let posicionX = 120;
        let posicionY = 80;
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                let moneda = new Moneda(posicionX, posicionY);
                this.listMonedas.push(moneda)
                posicionX += 130;
            }
            posicionX=120
            posicionY += 82;
        }
    }
    crearCafes() { 
        let posicionX = 120;
        let posicionY = 80;
        for (let i = 0; i < 6; i++) { 
            for (let j = 0; j < 3; j++) { 
                let cafe = new Cafe(posicionX, posicionY)
                this.listCafes.push(cafe)
                posicionX += 225;
            }
            posicionX = 120;
            posicionY += 80;
        }
    }

    crearMontoro() { 
        let posicionX =Math.floor(Math.random()*this.width) ;
        let posicionY = Math.floor(Math.random()*this.height);
        let montoro = new EnemigoHacienda(posicionX, posicionY);
        this.enemigoHacienda=montoro
    }
    crearProtagonista() {
        let posicionX =Math.floor(Math.random()*this.width-40) ;
        let posicionY = Math.floor(Math.random()*(500-(this.height-10))+500);
        this.protagonista = new Protagonista(posicionX, posicionY);
    }
    // falta ACABAR!!!!!!!!
    crearCurro() { 
        let posicionX = Math.floor(Math.random() * this.width);
        let posicionY = Math.floor(Math.random() * this.height);
        this.enemigoProfe =new EnemigoProfe(posicionX, posicionY);
    }
    crearTA() { 
        let posicionX = 10;
        let posicionY = 10;
        for (let i = 0; i < this.MAX_TA; i++){
            let tA = new TA(posicionX, posicionY,this.listImgTA[i]);
            this.listTA.push(tA)
            posicionX += 80;
            posicionY += 100;
        }
    }
        // ---------------------DIBUJO--------------------------------

    drawFondo() { 
        this.ctx.drawImage(this.fondoCanvas,0,0,this.width,this.height)
    }
    //------------------primera parte--------------------------------
    drawMontoro() { 
        this.enemigoHacienda.draw(this.ctx)
    }
    drawMonedas() { 
        this.listMonedas.forEach((moneda)=>moneda.draw(this.ctx))
    }
    drawProtagonista() { 
        this.protagonista.draw(this.ctx)
    }
    //-----------------segunda parte ---------------------------------
    drawTa() { 
        for (let i = 0; i < this.listTA.length; i++) { 
            this.listTA[i].draw(this.ctx)
        }
    }
    drawCafe() { 
        for (let i = 0; i < this.listCafes.length; i++) { 
            this.listCafes[i].draw(this.ctx)
        }
    }
    drawProfe() { 
        this.enemigoProfe.draw(this.ctx)
    }

     // ---------------------COLISIONES--------------------------------

    colisionMonedas() { 

        for (let i = 0; i < this.listMonedas.length; i++) {
            if ((this.protagonista.x + this.protagonista.anchoPersonaje >= this.listMonedas[i].x) &&
                (this.protagonista.x <= this.listMonedas[i].x + this.listMonedas[i].anchoMoneda) && 
                (this.protagonista.y + this.protagonista.altoPersonaje >= this.listMonedas[i].y) && 
                (this.protagonista.y<=this.listMonedas[i].y+this.listMonedas[i].altoMoneda)
            ) {
              
                this.protagonista.dinero += this.listMonedas[i].valor 
                this.marcadorProtagonista.innerHTML = this.protagonista.dinero;
             
                this.listMonedas[i].audio.play()
                this.listMonedas.splice(i, 1)
            }
        }
    }
    colisionesCafes() { 
   
        for (let i = 0; i < this.listCafes.length; i++) {
            if ((this.protagonista.x + this.protagonista.anchoPersonaje >= this.listCafes[i].x) &&
                (this.protagonista.x <= this.listCafes[i].x + this.listCafes[i].anchoCafe) && 
                (this.protagonista.y + this.protagonista.altoPersonaje >= this.listCafes[i].y) && 
                (this.protagonista.y<=this.listCafes[i].y+this.listCafes[i].altoCafe)
            ) {
        
                this.protagonista.cafe += this.listCafes[i].valor 
                this.marcadorCafe.innerHTML = this.protagonista.cafe;
                this.listCafes[i].audio.play()
                this.listCafes.splice(i, 1)
            }
        }
    }
    //REFACTORIZAR PARTE DE ESTE CODIGO
    colisionMonPro() {
        let colision = this.enemigoHacienda.detectarColision(this.protagonista)
        if (colision == 'colision-superior') { 
            this.enemigoHacienda.audio.play();
            this.enemigoHacienda.y+= 10
            this.enemigoHacienda.direccionY = 'abajo'
            this.enemigoHacienda.vy = Math.floor(Math.random() * 5)
            this.enemigoHacienda.robado += 400;
            this.protagonista.dinero -= 400
            this.marcadorMontoro.innerText = this.enemigoHacienda.robado
            this.marcadorProtagonista.innerHTML = this.protagonista.dinero
        }
        if (colision == 'colision-inferior') { 
            this.enemigoHacienda.audio.play();
            this.enemigoHacienda.y = -10;
            this.direccionY = 'arriba'
            this.enemigoHacienda.robado += 400;
            this.protagonista.dinero -= 400
            this.marcadorMontoro.innerText = this.enemigoHacienda.robado
            this.marcadorProtagonista.innerHTML=this.protagonista.dinero
        }
        if (colision == 'colision-derecha') {
            this.enemigoHacienda.audio.play();
            this.enemigoHacienda.robado += 400;
            this.protagonista.dinero -= 400
            this.marcadorMontoro.innerText = this.enemigoHacienda.robado
            this.marcadorProtagonista.innerHTML=this.protagonista.dinero
            this.enemigoHacienda.x-= 20
            this.enemigoHacienda.direccionX = 'izquierda'   
        }
        if (colision == 'colision-izquierda') { 
            this.enemigoHacienda.audio.play();
            this.enemigoHacienda.robado += 400;
            this.protagonista.dinero -= 400;
            this.marcadorMontoro.innerText = this.enemigoHacienda.robado
            this.marcadorProtagonista.innerHTML=this.protagonista.dinero
            this.enemigoHacienda.x+= 20
            this.enemigoHacienda.direccionX = 'derecha'
        }
    }
  
     colisionCurronPro() {
        let colision = this.enemigoProfe.detectarColision(this.protagonista)
        if (colision == 'colision-superior') { 
            this.enemigoProfe.audio.play();
            this.enemigoProfe.y+= 10
            this.enemigoProfe.direccionY = 'abajo'
            this.enemigoProfe.vy = Math.floor(Math.random() * 5)
            this.enemigoProfe.cafe += 10;
            this.protagonista.cafe -= 10
            this.marcadorCurro.innerText = this.enemigoProfe.cafe
            this.marcadorCafe.innerHTML = this.protagonista.cafe
        }
        if (colision == 'colision-inferior') { 
            this.enemigoProfe.audio.play();
            this.enemigoProfe.y = -10;
            this.direccionY = 'arriba'
            this.enemigoProfe.robado += 10;
            this.protagonista.cafe -= 10
            this.marcadorCurro.innerText = this.enemigoProfe.cafe
            this.marcadorCafe.innerHTML = this.protagonista.cafe
        }
        if (colision == 'colision-derecha') {
            this.enemigoProfe.audio.play();
            this.enemigoProfe.cafe += 10;
            this.protagonista.cafe -= 10
            this.marcadorCurro.innerText = this.enemigoProfe.cafe
            this.marcadorCafe.innerHTML = this.protagonista.cafe
            this.enemigoProfe.x-= 20
            this.enemigoProfe.direccionX = 'izquierda'   
        }
        if (colision == 'colision-izquierda') { 
            this.enemigoProfe.audio.play();
            this.enemigoProfe.robado += 10;
            this.protagonista.cafe -= 10;
            this.marcadorCurro.innerText = this.enemigoProfe.cafe
            this.marcadorCafe.innerHTML = this.protagonista.cafe
            this.enemigoProfe.x+= 20
            this.enemigoProfe.direccionX = 'derecha'
        }
    }
    colisionesTAPro() {
        for (let i = 0; i < this.listTA.length; i++) {
            let colision = this.listTA[i].detectarColision(this.protagonista)
            if (colision == 'colision-superior') {
                this.listTA[i].audio.play();
                this.listTA[i].y += 10
                this.listTA[i].direccionY = 'abajo'
                this.listTA[i].vy = Math.floor(Math.random() * 5)
                this.listTA[i].robado += 10;
                this.protagonista.cafe -= 10
                this.enemigoProfe.cafe += 10;
                this.marcadorCurro.innerText = this.enemigoProfe.cafe
                this.marcadorCafe.innerHTML = this.protagonista.cafe
            }
            if (colision == 'colision-inferior') {
                this.listTA[i].audio.play();
                this.listTA[i].y = -10;
                this.direccionY = 'arriba'
                this.listTA[i].robado += 10;
                this.protagonista.cafe -= 10
                this.enemigoProfe.cafe += 10;

                this.marcadorCurro.innerText = this.enemigoProfe.cafe
                this.marcadorCafe.innerHTML = this.protagonista.cafe
            }
            if (colision == 'colision-derecha') {
                this.listTA[i].audio.play();
                this.listTA[i].cafe += 10;
                this.protagonista.cafe -= 10
                this.enemigoProfe.cafe += 10;

                this.marcadorCurro.innerText = this.enemigoProfe.cafe
                this.marcadorCafe.innerHTML = this.protagonista.cafe
                this.listTA[i].x -= 10
                this.listTA[i].direccionX = 'izquierda'
            }
            if (colision == 'colision-izquierda') {
                this.listTA[i].audio.play();
                this.listTA[i].robado += 10;
                this.protagonista.cafe -= 10;
                this.enemigoProfe.cafe += 10;
                this.marcadorCurro.innerText = this.enemigoProfe.cafe
                this.marcadorCafe.innerHTML = this.protagonista.cafe
                this.listTA[i].x += 10
                this.listTA[i].direccionX = 'derecha'
            }
        }
    }


    nextLevel() {
        this.stop();
        this.clearScreen();
        this.level++;
        this.init();
    }
   
}