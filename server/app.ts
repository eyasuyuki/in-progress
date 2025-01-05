import express from 'express';
import mongoose from 'mongoose';
import { Server, Socket } from 'socket.io';
import http from 'http';
import boardRoutes from './routes/board';
import stageRoutes from './routes/stage';
import cardRoutes from './routes/card';
import path from 'path';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.json());
app.use('/boards', boardRoutes);
app.use('/stages', stageRoutes);
app.use('/cards', cardRoutes);

// 静的ファイルの提供
app.use(express.static(path.join(__dirname, '../client/public')));

// ルートパスの処理
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

mongoose.connect('mongodb://root:NSFQ5undasLVbg2vcoKQDPq7Q9wDoxXwRrZwWSKxKJ4K3wp9He@localhost:27017/in-progress')  .then(() => {
      console.log('Connected to MongoDB');
  })
  .catch((error) => {
      console.error('Error connecting to MongoDB:', error);
  });

io.on('connection', (socket: Socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

export default server;
