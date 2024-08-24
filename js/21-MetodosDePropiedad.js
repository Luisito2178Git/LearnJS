// Metodos de propiedad
const reproductor = {
    reproducir : function(id){
        console.log(`Reproduciendo cancion con el id: ${id}`)
    },
    pausa : function(){
        console.log('Pausando')
    },
    crearPlaylist: function(nombre){
        console.log(`Creando la playlist ${nombre}`)
    },
    reproducirPlaylist: function(nombre){
        console.log(`reproduciendo la playlist ${nombre}`)
    }
}

reproductor.borrarCancion = function(id){
    console.log(`Eliminando la cancion: ${id}`);
}

reproductor.reproducir(3840);
reproductor.pausa();
reproductor.borrarCancion(38);
reproductor.crearPlaylist('La vida loca');
reproductor.reproducirPlaylist('La vida loca');
