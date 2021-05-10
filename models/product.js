const mongoose = require('mongoose');
const review = require('./review');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    image: {
        type: String
    },
    price: {
        type: Number,
        min: 0
    },
    desc: {
        type: String
    },
    review: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    }]
});

const product = mongoose.model('Product', productSchema);

module.exports = product;