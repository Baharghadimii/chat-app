import socketIO from 'socket.io';
const port = 5000;
const io = socketIO(port);

io.on('connection', function (socket) {
  console.log('connection established!');
  socket.on('message', function (data) {
    console.log('Message recieved:', data);
  });
  socket.on('disconnect', function () { });
});

console.log(`Server listening on Port: ${port}`);
