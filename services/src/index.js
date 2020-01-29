import socketIO from 'socket.io';
const port = 5000;
const io = socketIO(port);

io.on('connection', function (socket) {
  console.log('connection established!');

  socket.on('newChatMessage', function (data) {
    io.emit('newChatMessage', data);
  });

  socket.on('disconnect', function () {
    console.log('Disconnected!!');
  });
});

console.log(`Server listening on Port: ${port}`);
