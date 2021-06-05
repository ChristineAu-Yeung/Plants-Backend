const mongoose = require('mongoose');

const plantSchema = newschema({
    name: {
        type: String,
        required: true,
    },
    media: {
        type: [String]
    }
}, { timestamps: true })

module.exports = mognoose.model('Plants', plantSchema);