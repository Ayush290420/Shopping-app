const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Product = require('./product');

const userSchema = new mongoose.Schema({
    userType: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNo: {
        type: Number,
        unique: true,
        required: false
    },
    cart: [{
        pId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        },
        Quantity: { type: Number }
    }]
});
userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', userSchema);

module.exports = User;