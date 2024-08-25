// this (palabra reservada)

const reservacion = {
    nombre: 'Luis',
    apellido:'Perez',
    total: 500,
    pagado: false,
    informacion:function(){ // arrow fuction no funciona con this por que hace referencia a la ventana global y function hace referencia a las propiedades del objeto
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`); // this hace referencia al mismo objeto sobre el cual se manda a llamar esta funcion
    }
}

const reservacion2 = {
    nombre: 'Angel',
    apellido:'Damian',
    total: 550,
    pagado: false,
    informacion:function(){
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`); // this hace referencia al mismo objeto sobre el cual se manda a llamar esta funcion
    }
}




reservacion.informacion();
reservacion2.informacion();