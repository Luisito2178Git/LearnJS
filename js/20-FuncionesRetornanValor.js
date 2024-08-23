// // funciones que retornan valor

// function sumar(numero1, numero2){ 
//     return(numero1 + numero2);
// }

// const resultado = sumar(2,4);

// console.log(resultado);


let total = 0;

function agregarCarritoi(precio){
    return total += precio;
}


function calcularImpuesto(total){
    return total * .16;
}

total = agregarCarritoi(5000);
total = agregarCarritoi(5000);
total = agregarCarritoi(500);
total = agregarCarritoi(50);

const impuesto = calcularImpuesto(total);

const totalPagar = total + impuesto;

console.log(total);
console.log(impuesto);
console.log(`El total es de: $${total} + el impuesto $${impuesto} Total a pagar de $${totalPagar}`);
