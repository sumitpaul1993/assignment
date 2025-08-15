import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const UserAccountEntity = mongoose.model('user_accounts', new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: false
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true
    },
}, {
    timestamps: true
}));

export default UserAccountEntity;