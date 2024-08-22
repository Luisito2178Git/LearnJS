// Orden de las operaciones

let resultado;

resultado = 20-2*10;  // da como resultado 0 ya que la prioridad de las operaciones dice que primero multiplique
resultado = (20-2)*10; // 180 el resultado que se queria lograr en lo anterior 
resultado = (100+40+65)*.2; // ejemplo basico de calcular el descuento del 20% de los productos
resultado = (100+40+65)*1.16; // ejemplo basico de calcular el impuesto de los productos
resultado = Math.round((100+40+65)*1.16); // ejemplo basico de calcular el impuesto redondeando el resultado


console.log(resultado);


// Incrementos
let puntaje = 10;

puntaje++ // incremeto en uno a la variable 

console.log(puntaje);// imprime 11 ya que se agrego un numero mas 
console.log(puntaje++); // Imprime 11 ya que el incremento se hace despues de la impresion
console.log(puntaje); // Imprime 12 por que ya se aplico el incremento anterior 
console.log(++puntaje); // Imprime 13 ya que el incremento se hace despues de la impresion


puntaje-- // decremento en 1 IMPRIME 12
console.log(puntaje--); // Imprime 12 por que el decremento esta despues 
console.log(puntaje); // Imprime 11 
console.log(--puntaje); // Imprime 10 por que el decremento esta despues 