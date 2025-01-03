import express from 'express';
import mongoose from 'mongoose';
import boardRoutes from './routes/board';
import stageRoutes from './routes/stage';
import cardRoutes from './routes/card';

const app = express();

app.use(express.json());
app.use('/boards', boardRoutes);
app.use('/stages', stageRoutes);
app.use('/cards', cardRoutes);

mongoose.connect('mongodb://localhost/in-progress');

export default app;
