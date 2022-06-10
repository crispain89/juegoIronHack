
export class Cafe  { 
    
    constructor(x,y) { 
        this.x = x;
        this.y = y;
        this.cafe=2
      
        this.alto = 40;
        this.ancho = 40;
        this.imagen = document.getElementById('cafe');
        
    }

    draw(context) {
        console.log('entra en cafe')
        context.drawImage(this.imagen, this.x, this.y, this.ancho, this.alto);
    }



}