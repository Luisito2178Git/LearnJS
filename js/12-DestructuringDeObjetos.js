// Objetos

// Objeto (se le pueden asignar varios valores (propiedades) a uno solo)
const producto = { //creamos un objeto llamado producto
    nombreProducto: "Monitor de 20 Pulgadas", // a esto se le llama propiedad
    precio: 3000,
    disponible: true 
}


// Forma anterior
// const precioProducto = producto.precio;
// const nombreProducto = producto.nombreProducto;

// console.log(precioProducto);
// console.log(nombreProducto);

// Destructuring (sacar de la estructura)
// const {precio} = producto; // usar llaves al usar destructuring
// const {nombreProducto} = producto;

const {precio,nombreProducto} = producto; // se puede hacer en una sola linea

console.log(nombreProducto);
console.log(precio);