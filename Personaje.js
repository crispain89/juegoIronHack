import { Objeto} from './Objeto.js'

export class Personaje extends Objeto{
    cafe;
    dream;
    velocidad;


    constructor( x, y, ancho, alto, imagen,cafe, dream) { 
        super(x, y, ancho, alto, imagen)
        this.cafe = cafe;
        this.dream = dream;
        // this.velocidad=cafe/3

    
    }
   
    dibujar() { 
        
    }
    //genera cafe automaticamente será heredado de Objecto
    //cuanto más cafe mas velocidad.
    //quitar 1 de cafe al jugador
    //sumarselo al TA o al PROFE dependiendo de con quien colisione
    //movimiento aleatorio por el canvas


}