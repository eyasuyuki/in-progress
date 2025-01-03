import app from './app';
import http from 'http';
import socketIo from 'socket.io';

const server = http.createServer(app);
const io = new socketIo.Server(server);

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
