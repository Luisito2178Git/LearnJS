// Funciones

// declaracion de funcion
function sumar(){
    console.log(10+10);
}

sumar() // Llamar a la funcion

// Expresion de la funcion
const sumar2 = function(){
    console.log(3+3);
}

sumar2();

// diferencias entre ellas el housting (Js se ejecuta en 2 etapas la primera es registro o creacion en donde se registran las funciones y la siguiente es de ejecucion)

// declaracion de funcion
sumar() // No hay problema ya que se crea primeor la funcion en la primer etapa y luego se manda a llamar en la segunda 
function sumar(){
    console.log(10+10);
}



// Expresion de la funcion
sumar3(); // ERROR a diferencia de la aterior, esto es mas como una variable entonces no se crea la funcion y todo se hace despues generando un error
const sumar3 = function(){
    console.log(3+3);
}

// IIFE -- Son utiles para proteger las variables y funciones de otros archivos
(function(){ // funciones que se mandan a llamar a si mismas
    console.log('Esto es una funcion');
})();

