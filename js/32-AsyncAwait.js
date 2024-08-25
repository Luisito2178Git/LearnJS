// Async / Await
function descargarNuevosClientes (){
    return new Promise(resolve => {
        console.log('Descargando clientes espere...');
        
        setTimeout(()=>{
            resolve('Los clientes fueron descargados');
        }, 5000); // forma de hacer esperar a que se ejecute una parte del codigo

    });
}
function descargarUltimosPedidos (){
    return new Promise(resolve => {
        console.log('Descargando pedidos espere...');
        
        setTimeout(()=>{
            resolve('Los pedidos fueron descargados');
        }, 3000); // forma de hacer esperar a que se ejecute una parte del codigo

    });
}

async function app(){ // Esta es una funcion asincrona
    try {
        // const clientes = await descargarNuevosClientes();
        // const pedidos = await descargarUltimosPedidos();
        // console.log(`El siguiente codigo se ejecuta despues de descargar clientes`);
        // console.log(clientes);
        const resultado = await Promise.all([ descargarNuevosClientes(), descargarUltimosPedidos() ]);
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error)
    }
}


app();

console.log(`El siguiente codigo se ejecuta antes de descargar clientes`)

// setInterval ejecuta parte del codigo varias veces



// practice


function mensajesEnEspera(){
    return new Promise((resolve) => {
         console.log('esperando mensajes');

         setTimeout(() => {
            resolve('Los mensajes fuieron recibidos')
         }, 3000);
    })
}


async function app() {
    try{
        const mensaje = await mensajesEnEspera();
        console.log(mensaje);
    }catch(error){
        console.log(error);
    }
}