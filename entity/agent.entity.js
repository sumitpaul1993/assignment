import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const AgentEntity = mongoose.model('agents', new Schema({
    name: {
        type: String,
        required: true
    },
}, {
    timestamps: true
}));

export default AgentEntity;