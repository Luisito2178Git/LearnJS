// For Loop

// for( let i = 0; i<10; i++ ){
//     console.log(`Conteo ${i}`)
// }

// // imprimir si el numer es par o si no es par
// for(let i= 1; i<=100;i++){
//     if(i%2 === 0){
//         console.log(`Es par ${i}`)
//     }else{
//         console.log(`Es impar ${i}`)
//     }
// }


const carrito = [
    {nombre: 'Monitor 20 Pulgadas', precio: 1500},
    {nombre: 'TV 50 pulgadas', precio: 7000},
    {nombre: 'Celular', precio: 4000},
    {nombre: 'Teclado', precio: 1500},
    {nombre: 'Mouse', precio: 1000}
];



// for(i=0;i<carrito.length;i++){
//     console.log(carrito[i].nombre);
// }


// While Loop

// let i=0; // indice / valor inicial

// while( i<10 ){ // condicion
//     console.log(i)

//     i++ // incremento
// }


// let i = 1;

// while(i<=100){ 
//     if(i%2===0){
//         console.log(`El numero ${i} es PAR`)
//     }else{
//         console.log(`El numero ${i} es IMPAR`)
//     }


// i++
// }



// let ind = 0;

// while(ind<carrito.length){ // While Evalua la condicion si no se cumple no ejecuta el codigo
//     console.log(carrito[ind].nombre)
//     ind++
// }



// Do While Loop 

let i = 0;

do{ // do while ejecuta el codigo al menos una vez y aunque la condicion no se cumpla
    console.log(i)
    i++
}while(i<10)