const { ObjectID } = require('bson');
const mongoose = require('mongoose');

const Promotion = mongoose.model('Promotion', {
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    avaible: {
        type: Boolean,
        required: true

    },
    productId: {
        type: String,
        required: true
    }
});

module.exports = Promotion;