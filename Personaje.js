import { Objeto} from './Objeto.js'

export class Personaje extends Objeto{

    constructor( x, y, ancho, alto, imagen,ctx,cafe, dream) { 
        super(x, y, ancho, alto, imagen,ctx,cafe, dream)
        this.velocidad;
        this.nombre;
        this.tipo;//profesor , TA, Jugador
        
    }
   
   
    //genera cafe automaticamente será heredado de Objecto
    //cuanto más cafe mas velocidad.
    //quitar 1 de cafe al jugador
    //sumarselo al TA o al PROFE dependiendo de con quien colisione
    //movimiento aleatorio por el canvas


}