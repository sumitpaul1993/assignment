import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const UserEntity = mongoose.model('users', new Schema({
    name: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true,
        pattern: [/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/, 'DOB must be in YYYY-MM-DD format']
    },
    address: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['Female', 'Male'],
        required: true
    },
    user_type: {
        type: String,
        required: true
    },
}, {
    timestamps: true
}));

export default UserEntity;