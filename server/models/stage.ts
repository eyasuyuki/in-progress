import mongoose, { Document, Schema } from 'mongoose';

interface IStage extends Document {
    title: string;
    subtitle: string;
    cards: mongoose.Types.ObjectId[];
    wipLimit: number;
    createdAt: Date;
    updatedAt: Date;
}

const stageSchema: Schema = new Schema({
    title: { type: String, required: true },
    subtitle: { type: String },
    cards: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Card' }],
    wipLimit: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Stage = mongoose.model<IStage>('Stage', stageSchema);

export default Stage;
