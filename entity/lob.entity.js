import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const LobEntity = mongoose.model('lobs', new Schema({
    name: {
        type: String,
        required: true
    }
}, {
    timestamps: true
}));

export default LobEntity;