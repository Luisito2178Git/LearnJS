// function obtenerEmpleados(){
//     const archivo = "/empleados.json";
//     fetch(archivo)
//         .then(resultado=>{
//             console.log(resultado)
//             return resultado.json();
//         })
//         .then(datos =>{
//             const {empleados} = datos;
//             console.log(empleados);
//             // empleados.forEach(empleado => {
//             //     console.log(empleado.nombre);
                
//             //     document.querySelector('.contenido').textContent += empleado.nombre;
//             // });
//         });

// }


async function obtenerEmpleados() {
    const archivo = "/empleados.json";
    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    console.log(datos);

    const {empleados} = datos;
    console.log(empleados)
    empleados.forEach(empleado => {
        console.log(empleado.puesto)
    });
}

obtenerEmpleados();




async function obtenerPelicula() {
    const archivo = "/peliculas.json";
    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    console.log(datos);

    const {peliculas} = datos;
    console.log(peliculas)
    peliculas.forEach(peliculas => {
        console.log(peliculas.titulo)
    });
}

obtenerPelicula();

