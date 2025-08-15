import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const CarrierEntity = mongoose.model('carriers', new Schema({
    name: {
        type: String,
        required: true
    }
}, {
    timestamps: true
}));

export default CarrierEntity;