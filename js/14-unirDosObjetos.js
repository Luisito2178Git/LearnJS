"use strict"; // Usar el modo estricto de JS
// Objetos
const producto = { //creamos un objeto llamado producto
    nombreProducto: "Monitor de 20 Pulgadas", // a esto se le llama propiedad
    precio: 3000,
    disponible: true 
}

const medidas = { // Buenas practicas no modificar las propiedades de los objetos
    peso: '1kg',
    medida: '1m'
}

const nuevoProducto = { ...producto, ...medidas} // Unir dos objetos 

console.log(nuevoProducto);
console.log(producto);
