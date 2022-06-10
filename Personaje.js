export class Personaje extends Objeto{
    constructor( ctx) { 
        super(x, y, ancho, alto, imagen,cafe, dream)
        this.velocidad;
        this.nombre;
        this.tipo;//profesor o TA
        this.ctx = ctx;
        
    }
    //genera cafe automaticamente será heredado de Objecto
    //cuanto más cafe mas velocidad.
    //quitar 1 de cafe al jugador
    //sumarselo al TA o al PROFE dependiendo de con quien colisione
    //movimiento aleatorio por el canvas


}