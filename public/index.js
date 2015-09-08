console.log("Hello world!");


function testWebSocket() {

  var socket = io.connect();

  socket.emit('game:create');

  socket.on('received', function() {
    console.log("New visitor!");
  });

}

setTimeout(function() {
  testWebSocket();
}, 3000);
