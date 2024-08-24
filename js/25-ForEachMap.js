const carrito = [
    {nombre: 'Monitor 20 Pulgadas', precio: 1500},
    {nombre: 'TV 50 pulgadas', precio: 7000},
    {nombre: 'Celular', precio: 4000},
    {nombre: 'Teclado', precio: 1500},
    {nombre: 'Mouse', precio: 1000}
];

// ForEach y map solo se pueden ejecutar con arreglos

// ForEach SI quieres iterar los elmentos en un arreglo y mostrarlos  en pantalla o consola USAR ForEach
// carrito.forEach(producto=>{
//     console.log(producto.precio)
// });
 
// // map Si quieres hacer un nuevo arreglo utilizar map 
// carrito.map(producto=>{
//     console.log(producto.precio)
// });

// EJEMPLO

const arreglo1 = carrito.forEach(producto=>producto.nombre);
const arreglo2 = carrito.map(producto=>producto.nombre);

console.log(arreglo2); // map si imprime el nuevo arreglo con los nombres
console.log(arreglo1); // forEach no imprime ningun arreglo (usarlo para iterar y mostrarlo en pantalla)