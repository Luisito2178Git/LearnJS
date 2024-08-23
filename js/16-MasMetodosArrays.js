// Arrays methods

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

const carrito = [
    {nombre: 'Monitor 20 Pulgadas', precio: 1500},
    {nombre: 'TV 50 pulgadas', precio: 7000},
    {nombre: 'Celular', precio: 4000},
    {nombre: 'Teclado', precio: 1500},
    {nombre: 'Mouse', precio: 1000}
];

// forEach

meses.forEach(function(mes){
    if(mes == 'Enero'){
        console.log('si esta enero');
    }
});

// Includes
const resultado = meses.includes('Enero'); // si esta o no en el arreglo 'Enero'
console.log(resultado); // True or False

// Some ideal para arreglo de objetos
const resultado2 = carrito.some(function(producto){
    return producto.nombre === 'Teclado'
});


// AHora con Arrowfuctions

const resultado3 = carrito.some(producto => producto.nombre === 'Mouse');


console.log(resultado2); // True or False


//reduce 
const result = carrito.reduce(function(total, producto){
    return producto.precio > 3500 ?  total + producto.precio: total;
}, 0);

console.log(result); 


// filter 
resultado7 = carrito.filter(function(producto){
    return producto.precio > 4000;
});

console.log(resultado7);


nombre = carrito.filter(function(producto){
    return producto.nombre !== 'Celular';
});

console.log(nombre);


// Practice

// Array de productos electrónicos
const productos = [
    {nombre: 'Laptop', precio: 5000},
    {nombre: 'Tablet', precio: 3000},
    {nombre: 'Smartwatch', precio: 1500},
    {nombre: 'Monitor', precio: 4000},
    {nombre: 'Cámara', precio: 3500}
];

// Array de categorías
const categorias = ['Electrónica', 'Hogar', 'Ropa', 'Juguetes', 'Deportes'];

// Ejercicio 1 verificar si una categoria existe (Ropa) Usar includes
const existeRopa = categorias.includes('Ropa');
console.log(existeRopa);

// Ejercicio 2 Buscar un producto especifico Usar some
const existeSmart = productos.some(function(smart){
    return smart.nombre === 'Smartwatch';
});

if(existeSmart){
    console.log("El Smartwatch está disponible");
}else{
    console.log("El Smartwatch no está disponible");
}

// Ejercicio 3 Filtrar productos segun un rango de precio Usar filter / nuevo array con los productos cuyo precio esté entre 3000 y 4000 (incluidos)
const rango = productos.filter(function(rango){
    return rango.precio >= 3000 && rango.precio <= 4000
});

console.log(rango);

// Ejercicio 4: Calcular el total de precios de productos caros USAR reduce
const caros2 = productos.reduce(function(total,producto){
    return producto.precio>3500;
});


// Resultado
const caros = productos.reduce(function(total, producto){
    return producto.precio > 3500 ? total + producto.precio : total;
}, 0);

console.log(`Total de productos caros: ${caros}`);

console.log(caros);

// Ejercicio 5: Contar productos económicos
const eco = productos.filter(function(producto){
    return producto.precio <= 2000;
});

console.log(`Cuantos productos economicos hay: ${eco.length}`);