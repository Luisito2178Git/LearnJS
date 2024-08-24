// if / else if / else

const puntaje = 100;

if(puntaje===200){
    console.log(`El Puntaje: ${puntaje} es igual a 200`)
}else{
    console.log(`El puntaje es diferente de 200`)
}


const efectivo = 1000;
const carrito = 800;

if(efectivo>carrito){
    console.log(`Su compra se ha compleado con exito`)
}else{
    console.log(`Saldo insuficiente`)
}

const rol = 'editor';

if(rol === 'ADMIN'){
    console.log(`Acceso a todas las funciones`);
} else if(rol === 'editor'){
    console.log(`Acceso a la mayoria de funciones`)
} else{
    console.log(`Acceso denegado`)
}

// Switch

const metodoPago = 'paypal';

switch(metodoPago){
    case 'tarjeta':
        console.log('pago con tarjeta');
        break;
    case 'oxxo':
        console.log('Imprima su recibo para pagar en oxxo');
        break;
    case 'paypal':
        console.log('Redireccionando a PayPal');
        break;
    default: 
        console.log('Pago denegado');
        break;
}