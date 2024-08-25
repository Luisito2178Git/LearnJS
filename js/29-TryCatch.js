const n1 = 20;
const n3 = 30;



// Manejo de errores
console.log(n1);
try { // En el try se agrega el codigo a evaluar
    console.log(n2);
} catch (error) { // captura cualquier error surgido en try
    console.log('ERROR');
    console.log(error);
}finally{ // siempre se ejecutara al final de un bloque try-catch

}

console.log(n3);

// Errores dentro de la logica del programa (personalizar nuestros mensajes de error)

try {
    let numero = 'hola';
    if(isNaN(numero)){
        throw new Error("El caracter introducido no es un numero");
    }

    console.log(numero*numero)
} catch (error) {
    console.log(`Se produjo el siguiente ${error}`)
}
