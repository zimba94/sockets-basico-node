const { io } = require('../server');

io.on("connection", (client) => {
    console.log("Usuario conectado");

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Que hay de nuevo viejo?'
    });

    client.on("disconnect", () => {
        console.log("Usuario desconectado");
    });

    //escuchar al cliente

    client.on("enviarMensaje", (data, callback) => {
        console.log(data);
        client.broadcast.emit('enviarMensaje', data);
        // if (data.usuario) {
        //     callback({
        //         resp: "Todo salio bien :)"
        //     });
        // } else {
        //     callback({
        //         resp: "Todo salio mal :("
        //     });
        // }
    })

});