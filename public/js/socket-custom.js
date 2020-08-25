var socket = io();

//On = escuchar
socket.on('connect', () => {
    console.log("Conectado al servidor");
});

socket.on('disconnect', () => {
    console.log("Perdimos conexión con el servidor");
});

//Emit = enviar información

socket.emit('enviarMensaje', {
    usuario: "SIMBA",
    mensaje: "Hola Simba"
}, (resp) => {
    console.log('Servidor: ', resp);
});

//Escuchar información

socket.on('enviarMensaje', (mensaje) => {
    console.log('Servidor:', mensaje);
});