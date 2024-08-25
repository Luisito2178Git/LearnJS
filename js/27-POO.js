// POO


// Objeto liteal
const producto = {
    nombre: 'tablet',
    precio:200
}

// Object Constructor
function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
}
Producto.prototype.formatearProducto = function(){
    return `El producto ${producto.nombre} tiene un precio de: ${producto.precio}`;
}

function Cliente(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}
Cliente.prototype.formatearCliente= function(){
    return `El Cliente ${this.nombre}  ${this.apellido}`;
}

const producto2 = new Producto('Monitor Curvo de 40"', 15000);
const producto3 = new Producto('laptop"', 20000);
const cliente1 = new Cliente('Luis', 'Perez');


console.log(cliente1);
console.log(cliente1.formatearCliente());

console.log(producto2);
console.log(producto2.formatearProducto());



// practice

// Ejercicio 1: Añadir una nueva propiedad a los objetos creados con el constructor
// Modifica el constructor Producto para que acepte una nueva propiedad llamada categoria. Luego, crea al menos dos productos con esta nueva propiedad.

function Producto2(nombre, precio, categoria){
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
}

const producto11 = new Producto2('Mouse',1000,'Perifericos');
const producto12 = new Producto2('Teclado',1000,'Perifericos');

