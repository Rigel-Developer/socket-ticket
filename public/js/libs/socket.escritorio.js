//const {io} = require("../../../server/server");
//comando para establecer la conexion socket
var socket = io()

var searchParams = new URLSearchParams(window.location.search)

//validar que se enviar por el URL el parametro escritorio
 if(!searchParams.has('escritorio')) {
    window.location = 'index.html'
    throw new Error('El escritorio es necesario')
 }

var escritorio = searchParams.get('escritorio')
var label = $('small')
console.log(escritorio)

$('h1').text('Escritorio ' + escritorio)

$('button').on('click',function(){

  socket.emit('atenderTicket',{escritorio:escritorio},function(resp){
    if (resp === 'No hay tickets') {
      label.text(resp) 
      alert(resp)
      return;
    }   

    label.text(resp.numero) 
  })


})




