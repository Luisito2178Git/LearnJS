// Arreglos o Arrays representados por []

const numero = [10,20,30,40,650];

console.table(numero);

const meses = ["Enero", "Febrero", "Marzo"];
console.table(meses);

const arreglo = ["hola", 10, true, 'si', null, {nombre: "Luis", trabajo: 'Desarrollador Web'}]; // Los arrays pueden tener todo tipo de valores en ellos

console.log(arreglo);

// // Acceder a los valores de un arreglo  --------------
// console.log(numero[0]); 
// console.log(numero[2]); 
// console.log(numero[6]); // undefined (No esta definido)

// // Conocer la extension de un arreglo -----------------
// console.log(meses.length);
// console.log(numero.length);


// // forEach es la forma mas sencilla para iterar un arreglo

// numero.forEach( function(numeros){
//     console.log(numeros);
// })


// Agregar elementos y eliminarlos del arreglo

// numero[5] = 80; // No es una forma comun y no es recomendada

//AGREGAR ELEMENTOS -------------

numero.push(900,700,90); // Ya no se recomienda modificar los arreglos
numero.push(902); // con push se arregla un elemento al final del arreglo

numero.unshift(-10); // unshift agrega elementos al inicio del arreglo

console.table(numero);

//ELIMINAR ELEMENTOS ------------------

// meses.pop();
// console.table(meses); // Elimina el ultimo elemento del arreglo
// meses.shift();
// console.table(meses); // Elimina el primer elemento del arreglo

meses.splice(1,1); // Elimina uno o varios elementos (<indice para comenzar a eliminar>, <cuantos mas a partir de ese indice>)
console.table(meses);



// Rest Operator o Spread Operator

const nuevoArreglo = [...meses, 'Abril']; // Hacer un nuevo arreglo para no modificar el original, este caso hacemos la funcion de push pero en un nuevo arreglo
console.table(nuevoArreglo);

const nuevoArreglo2 = ['Enero', ...meses];// Este simula el unshift ya que agrega al principio el valor aignado
console.table(nuevoArreglo2);

//