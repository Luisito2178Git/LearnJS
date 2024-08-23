"use strict"; // Usar el modo estricto de JS
// Objetos
const producto = { //creamos un objeto llamado producto
    nombreProducto: "Monitor de 20 Pulgadas", // a esto se le llama propiedad
    precio: 3000,
    disponible: true 
}

// Como evitar que se agreguen propieades a producto? con freeze
Object.freeze(producto); // Object freeze no te permite agregar,cambiar o  eliminar una propiedad del objeto
Object.seal(producto); // Object seal no te permite agregar o eliminar pero SI modificar propieadades del objeto


console.log(Object.isFrozen(producto)); // imprime true ya que el objeto esta congelado
console.log(Object.isSealed(producto)); // imprime true ya que el objeto esta congelado

// producto.imagen = 'imagen.jpg'; // Con strict marca un error esto sin el no marca nada



console.log(producto);
