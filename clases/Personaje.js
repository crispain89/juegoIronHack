

export class Personaje {
 
    constructor(posicionX, posicionY) { 
       
        
        this.x=posicionX;
        this.y=posicionY;
        this.anchoPersonaje;
        this.altoPersonaje;
        
    }
    detectarColision = (otroObjeto) => {
     
        
        if (otroObjeto.y + otroObjeto.altoPersonaje < this.y) {
          return "";
        }
        if (otroObjeto.x + otroObjeto.anchoPersonaje < this.x) {
          return "";
        }
        if (this.y + this.altoPersonaje < otroObjeto.y) {
          return "";
        }
        if (this.x + this.anchoPersonaje < otroObjeto.x) {
          return "";
        }
    
        if (otroObjeto.y + otroObjeto.altoPersonaje <= (this.y + 10)) {
          return "colision-superior";
        }
    
        if (otroObjeto.x + otroObjeto.anchoPersonaje <= (this.x + 10 )) {
          return "colision-izquierda";
        }
    
        if (otroObjeto.x <= (this.x + this.anchoPersonaje) + 10) {
          return "colision-derecha";
        }
        if ((otroObjeto.y - otroObjeto.altoPersonaje)-10 <= this.y  ) {
          //Por probar
          return "colision-inferior";
        }
    
    
        return "colision";
      };
    //genera cafe automaticamente será heredado de Objecto
    //cuanto más cafe mas velocidad.
    //quitar 1 de cafe al jugador
    //sumarselo al TA o al PROFE dependiendo de con quien colisione
    //movimiento aleatorio por el canvas


}