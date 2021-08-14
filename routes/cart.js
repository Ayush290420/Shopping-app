const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middleware');
const Product = require('../models/product');
const User = require('../models/user');

router.get('/user/:userid/cart', isLoggedIn, async(req, res) => {
    try {
        const user = await User.findById(req.params.userid).populate('cart.pId');

        res.render('cart/showcart.ejs', { cart: user.cart });
    } catch (e) {
        req.flash('error', 'Unable to get the cart at the moment');
        res.render('error.ejs');
    }

});

router.post('/user/:id/add', isLoggedIn, async(req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        const user = req.user;
        const obj = { pId: product, Quantity: req.body.Quantity };
        user.cart.push(obj); //here the objectid of product is only going to store inside the cart array.
        await user.save();
        req.flash('success', 'Added to the cart');
        res.redirect(`/user/${req.user._id}/cart`);
    } catch (e) {
        req.flash('error', 'Cannot add this product to Cart!!');
        console.log(e.message + " Error is here");
        res.render('error.ejs');
    }

});

router.delete('/user/:userid/cart/:id', async(req, res) => {
    const { userid, id } = req.params;
    await User.findByIdAndUpdate(userid, { $pull: { cart: { pId: id } } });
    req.flash('success', 'Product Removed')
    res.redirect(`/user/${req.user._id}/cart`);
});

router.get('/payment/cart', (req, res) => {
    res.render('payment/payment.ejs');
});


module.exports = router;