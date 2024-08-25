const boton = document.querySelector('#boton'); // document hace referencia a todo el html

boton.addEventListener('click', ()=>{
    Notification.requestPermission()
        .then(resultado =>{
            console.log(`El resultado es ${resultado}`)
        })

});

if(Notification.permission == 'granted'){
    new Notification('Notifiacion', {
        icon: '/img/alert.png',
        body: 'Se activaron las alertas'
    })
}