// funciones con parametros 

function sumar(numero1, numero2){ // numero1, 2 son parametros 
    console.log(numero1 + numero2);
}

sumar(1000, 23); // Argumentos o valores reales 
sumar(100, 23); // Argumentos o valores reales 
sumar(1000, 123); // Argumentos o valores reales 
sumar(1, 23); // Argumentos o valores reales 

// Parametros por default
function sumarDefault(numero1 = 0, numero2 = 0){ // parametros por default en caso que falte un argumento o valor real
    console.log(numero1 + numero2);
}
sumarDefault(); // imprime 0 ya que no esta presente ninguno de los valores se usan los default en este caso 0 y 0
sumarDefault(2); // Imprime 2 / 2 + 0 = 2

// Expresion de la funcion
const sumar2 = function(n1,n2){
    console.log(n1*n2);
}

sumar2(3,3);
