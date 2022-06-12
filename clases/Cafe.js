
export class Cafe  { 
    
    constructor(canvasW,canvasH) { 
        this.cafe=2
        this.height = 40;
        this.width = 40;
        this.x = this.generarX(canvasW) ;
        this.y =this.generarY(canvasH);
        
    }

    
    generarX(canvasW) {
        console.log('canvasW', canvasW)
        console.log(this.width, this.height)
        let posicionX = Math.floor(Math.random() * (canvasW -this.width))+this.width;
        console.log('posicion', posicionX)
        return posicionX;
    }
    generarY(canvasH) {
        console.log('canvasH',canvasH)
        let posicionY = Math.floor(Math.random() * (canvasH - this.height))+this.height;
        console.log('posicion', posicionY)
        return posicionY;
    }
    
    dibujar(ctx,imgCafe) {
        console.log('entra en cafe')
        console.log(ctx)
        ctx.drawImage(imgCafe, this.x, this.y, this.width, this.height);
    }


}