// Tipos de datos

//String - Cadenas de texto
const producto = "Monitor 27 Pulgadas"; // La mejor sintaxis 
const producto4 = "Monitor 27\""; // Para usar las comillas dobles en una variable declara con estas mismas se recomienda usar \ 
const producto5 = 'Monitor 27"'; // Mejor forma
const producto2 = String("Monitor 20 Pulgadas");
const producto3 = new String('Monitor 25 Pulgadas');
const letras = 'Hola soy Luis y estoy aprendiendo JS';
const email = 'correo@correo.com';


// Metodos/funciones con cadenas de texto
console.log(letras.length); // /;legth es para saber la extension (cuantas letras contiene el string - contando espacios) 

// indexOf Funciona para saber si una palabra existe en una cadena de texto
console.log(letras.indexOf('Hola soy')); // Imprime la posicion en la que se encuentra el mensaje, si imprime -1 no pudo encontrar el mensaje en la cadena de texto (funciona con espacios)
console.log(letras.indexOf('estoy')); // imprime 16 - empieza desde 0

// includes (retorna true o false)
console.log(letras.includes('Luis')); //true
console.log(letras.includes('Python')); //false
console.log(email.includes('@')); // Forma sencilla de validar un correo mediante el arroba


//
console.log(producto);
console.log(producto2);
console.log(producto3);