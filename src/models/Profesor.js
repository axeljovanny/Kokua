const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProSchema = new Schema({
    nomPro: {
        type: String,
        required: true
    },
    apePro: {
        type: String,
        required: true
    },
    emaPro: {
        type: String,
        required: true
    },
    cedProPro: {
        type: String,
        required: true
    },
    pasPro: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Profesor', ProSchema);