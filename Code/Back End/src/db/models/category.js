const mongoose = require('mongoose');

const Category = mongoose.model('Category', {
    name: {
        type: String,
        required: true
    },
    subcategories: {
        type: Array,
        required: true
    },
    products: {
        type: Array,
        required: true
    }
});

module.exports = Category;