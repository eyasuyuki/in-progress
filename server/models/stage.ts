import mongoose, { Schema, Document } from 'mongoose';

interface IStage extends Document {
    title: string;
    subtitle: string;
    cards: mongoose.Types.ObjectId[];
    wipLimit: number;
    parentStage: mongoose.Types.ObjectId;
    board: mongoose.Types.ObjectId;
}

const StageSchema: Schema = new Schema({
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    cards: [{ type: Schema.Types.ObjectId, ref: 'Card' }],
    wipLimit: { type: Number, default: 0 },
    parentStage: { type: Schema.Types.ObjectId, ref: 'Stage' },
    board: { type: Schema.Types.ObjectId, ref: 'Board' }
});

export default mongoose.model<IStage>('Stage', StageSchema);
