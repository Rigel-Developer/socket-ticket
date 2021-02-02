//Comando para establecer la conexion
var socket = io()
var label = $('#lblNuevoTicket')

//COnectado al servidor
socket.on('connect', function() {
    console.log('Conectado al servidor')
})

//Desconectado del servidor 
socket.on('disconnect', function() {
    console.log('Desconectado del servidor')
})

//on estadoActual
//
socket.on('estadoActual',function(resp){
  console.log(resp)
  label.text(resp.actual)
})


//Evento del boton
$('button').on('click', function() {


    //Enviar mensaje al Backend
    socket.emit('siguienteTicket',null,function(siguienteTicket){
    label.text(siguienteTicket)
    })
})




