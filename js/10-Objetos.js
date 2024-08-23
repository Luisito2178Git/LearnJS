// Objetos TEMA BASTANTE IMPORTANTE

// variables
const nombreProducto = "Monitor de 20 Pulgadas";
const precio = 3000;
const disponible = true;

// Objeto (se le pueden asignar varios valores (propiedades) a uno solo)
const producto = { //creamos un objeto llamado producto
    nombreProducto: "Monitor de 20 Pulgadas", // a esto se le llama propiedad
    precio: 3000,
    disponible: true 
}

console.log(producto);

// como acceder a las propiedades del producto
console.log(producto.precio); // Con la sintaxis de punto se pueden acceder a las propiedades del objeto
console.log(producto.nombreProducto);
console.log(producto.disponible);



console.log(producto["precio"]); // Esta es otra forma para acceder a las propiedades de un objeto