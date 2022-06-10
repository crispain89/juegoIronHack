import { Juego } from './Juego.js'
// import{Personaje } from './Personaje.js'
// import { Objeto } from './Objeto.js'

window.addEventListener('load', () => { 

    console.log('uno')
    const imagenFondo='./20605.jpg'
    const juego = new Juego();

    const animateFunction = () => { 
    
        juego.crearCanvas(imagenFondo);
        requestAnimationFrame(animateFunction)
        juego.drawObject();
    
    }
    animateFunction();
})




// juego.crearCafes();
