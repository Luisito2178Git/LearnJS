// Arrow Functions
const sumar2 = (n1,n2)=>{
    console.log(n1+n2);
}

sumar2(5,10);

const aprendiendo = (tecnologia) => {
    console.log(`Aprendiendo ${tecnologia}`)
}

aprendiendo('JS');





const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

const carrito = [
    {nombre: 'Monitor 20 Pulgadas', precio: 1500},
    {nombre: 'TV 50 pulgadas', precio: 7000},
    {nombre: 'Celular', precio: 4000},
    {nombre: 'Teclado', precio: 1500},
    {nombre: 'Mouse', precio: 1000}
];

// forEach
meses.forEach(mes=>{
    if(mes == 'Enero'){
        console.log('si esta enero');
    }
});

// Some ideal para arreglo de objetos
const resultado2 = carrito.some((producto)=> producto.nombre === 'Teclado');
console.log(resultado2); 


const result = carrito.reduce((total, producto)=> producto.precio > 3500 ?  total + producto.precio: total, 0);

console.log(result); 

resultado7 = carrito.filter(producto=> producto.precio > 4000);

console.log(resultado7);


nombre = carrito.filter(producto=> producto.nombre !== 'Celular');

console.log(nombre);
