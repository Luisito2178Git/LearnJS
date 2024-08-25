// Clases

// Clases en mayuscula
class Producto {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
    formatearProducto(){
        return `El producto ${this.nombre} tiene un precio de: ${this.precio}`;
    }
    precioProducto(){
        return `El precio del producto es: $${this.precio}`;
    }
    modificarProducto(nuevoPrecio){
        return `El producto esta en descuento de: $${this.precio} a tan solo: $${nuevoPrecio}`;
    }
    modificarNombre(nuevoNombre){
        return `El producto cambio de nombre de: ${this.nombre} a: ${nuevoNombre}`;
    }
    
}

const producto2 = new Producto('Monitor Curvo de 40"', 15000);
const producto3 = new Producto('laptop', 20000);



// HERENCIA extends <nombre de la otra clase>
class Libro extends Producto{
    constructor(nombre,precio,isbn){
        super(nombre,precio); // Heredar el constructor, va al constructor padre y se trae los valores
        this.isbn = isbn; // colocar los parametros extras de la clase heredada (isbn no esta en la clase padre)
    }
    formatearProducto(){
        return `${super.formatearProducto()} y su ISBN es: ${this.isbn}`;
    }
    // formatearProducto(){ FORMA VALIDA PERO CODIGO REPETITIVO
    //     return `El producto ${this.nombre} tiene un precio de: ${this.precio} y su ISBN es: ${this.isbn}`;
    // }
}

const libro = new Libro('La revolucion de JS', 120, '5789154610575');
console.log(libro);
console.log(producto3.formatearProducto());
console.log(libro.formatearProducto());



console.log(producto2);
console.log(producto3);
console.log(producto3.precioProducto());
console.log(producto3.modificarProducto(18000));
console.log(producto3.modificarNombre('Laptop HP'));