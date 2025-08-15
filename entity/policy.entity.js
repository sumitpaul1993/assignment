import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const PolicyEntity = mongoose.model('policies', new Schema({
    number: {
        type: String,
        required: true
    },
    start_date: {
        type: String,
        required: true,
        pattern: [/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/, 'start date must be in YYYY-MM-DD format']
    },
    end_date: {
        type: String,
        required: true,
        pattern: [/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/, 'start date must be in YYYY-MM-DD format']
    },
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    company_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    mode: {
        type: String,
        required: false
    },
    producer: {
        type: String,
        required: false
    },
    amount_written: {
        type: Number,
        required: false
    },
    amount: {
        type: Number,
        required: false
    },
    type: {
        type: String,
        required: false
    },
    csr: {
        type: String,
        required: false
    },
    primary: {
        type: String,
        required: false
    },
    applicant_id: {
        type: String,
        required: false
    },
    agency_id: {
        type: String,
        required: false
    },
    hasActive:{
        type: String,
    }
}, {
    timestamps: true
}));

export default PolicyEntity;