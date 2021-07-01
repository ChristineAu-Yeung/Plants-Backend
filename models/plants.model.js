const mongoose = require('mongoose');
const Schema = mongoose.Schema

const plantSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    photos: {
        type: [String]
    },
    selectedPhoto: {
        type: String
    },
    userId: { 
        type: String
    },
    type: { // plant.type 
        type: String
    }

}, { timestamps: true })

module.exports = mongoose.model('Plants', plantSchema);
