import mongoose, { Document, Schema } from 'mongoose';

interface ICard extends Document {
    title: string;
    comments: string;
    status: string;
    dueDate: Date;
    startDate: Date;
    endDate: Date;
    createdAt: Date;
    updatedAt: Date;
}

const cardSchema: Schema = new Schema({
    title: { type: String, required: true },
    comments: { type: String, required: true },
    status: { type: String, default: '未着手' },
    dueDate: { type: Date },
    startDate: { type: Date },
    endDate: { type: Date },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Card = mongoose.model<ICard>('Card', cardSchema);

export default Card;
