import mongoose, { Schema, Document } from 'mongoose';

interface IBoard extends Document {
    title: string;
    subtitle: string;
    stages: mongoose.Types.ObjectId[];
    users: string[];
}

const BoardSchema: Schema = new Schema({
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    stages: [{ type: Schema.Types.ObjectId, ref: 'Stage' }],
    users: [String]
});

export default mongoose.model<IBoard>('Board', BoardSchema);
