import mongoose, { Schema, Document } from 'mongoose';

interface ICard extends Document {
    title: string;
    assignees: string[];
    url: string;
    status: string;
    dueDate: Date;
    startDate: Date;
    endDate: Date;
    comments: string;
    stage: mongoose.Types.ObjectId;
}

const CardSchema: Schema = new Schema({
    title: { type: String, required: true },
    assignees: [String],
    url: String,
    status: { type: String, default: '未着手' },
    dueDate: Date,
    startDate: Date,
    endDate: Date,
    comments: String,
    stage: { type: Schema.Types.ObjectId, ref: 'Stage' }
});

export default mongoose.model<ICard>('Card', CardSchema);
