import mongoose, { Document, Schema } from 'mongoose';

interface IBoard extends Document {
    title: string;
    subtitle: string;
    stages: mongoose.Types.ObjectId[];
    createdAt: Date;
    updatedAt: Date;
}

const boardSchema: Schema = new Schema({
    title: { type: String, required: true },
    subtitle: { type: String },
    stages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Stage' }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Board = mongoose.model<IBoard>('Board', boardSchema);

export default Board;
