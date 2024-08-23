// Objetos

// Objeto (se le pueden asignar varios valores (propiedades) a uno solo)
const producto = { //creamos un objeto llamado producto
    nombreProducto: "Monitor de 20 Pulgadas", // a esto se le llama propiedad
    precio: 3000,
    disponible: true 
}

// Aregar nuevas propiedades a un objeto
producto.imagen = 'imagen.jpg';

// Eliminar propiedades de un objeto
delete producto.imagen;

console.log(producto);