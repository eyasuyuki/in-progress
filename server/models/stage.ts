import mongoose from 'mongoose';

const stageSchema = new mongoose.Schema({
    title: { type: String, required: true },
    cards: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Card' }]
});

const Stage = mongoose.model('Stage', stageSchema);

export default Stage;
