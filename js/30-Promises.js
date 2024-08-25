// Promises

const usuarioAutenticado = new Promise((resolve, reject) => {
   const auth = false;
   if(auth){
    resolve('Usuario autenticado') // Si PROMISE se cumple se ejecuta resolve
   }else{
    reject('Usuario no identificado'); // Si PROMISE no se cumple se ejecuta reject
   } 
});

console.log(usuarioAutenticado);

usuarioAutenticado
    .then((resultado)=>{
    console.log(resultado)
})
    .catch((error)=>{
        console.log(error)
});

// En los promises existen 3 valores
// pending: No se ha cumplido pero tampoco se ha rechazado
// Fulfilled: Ya se cumplio
// Rejected: Se ha rechazado o no se pudo cumplicar 
