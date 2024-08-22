// Números

const nombre = 'Luis';
const numero1 = '100'; // esto no es un numero es una cadena de texto (string)
const numero2 = 200; // numero definido correctamente
const numero3 = 200.20; // A diferencia de algunos lenguajes de programacion JS interpreta todos los numeros por igual no importa si tienen decimales
const numero4 = .1015; // Si solo es decimal
const numero5 = -5; // O si es negativo todos son numeros
const numero6 = 13;


console.log(numero1+numero2); // Esto es un error ya que numero1 no es numero es un string entonces solo se concatenan
console.log(numero2 + numero3);
console.log(numero3 - numero4);
console.log(numero4 / numero2);
console.log(numero5 * numero2);
console.log(numero2 % numero6); // El resultado que arroja esta operacion es el reciduo de la division
console.log(nombre);

const cliente = 'Luis';
const cliente2 = 'Angel';

console.log(cliente * numero1); // NaN Not a Number