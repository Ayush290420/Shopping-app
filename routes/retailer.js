const express = require('express');
const route = express.Router();
const User = require('../models/user');
const Product = require('../models/product');
const { isLoggedIn } = require('../middleware');


route.get('/retailer/:id', async(req, res) => {

    const products = await Product.find({ "retailer": req.params.id });

    // const user = await User.findById(req.params.id);

    res.render("retailer/index.ejs", { products });

    // console.log(req.user);

});



route.get('/retailer/view/:id', async(req, res) => {
    try {
        const oneProduct = await Product.findById(req.params.id).populate('review');
        res.render('retailer/show.ejs', { oneProduct });
    } catch (e) {
        console.log(e.message);
        req.flash('error', 'Cannot find product!!');
        res.redirect('/error');
    }
});

route.get('/retailer/:id/edit', isLoggedIn, async(req, res) => {
    const editProduct = await Product.findById(req.params.id);
    res.render('retailer/edit.ejs', { editProduct });
});



route.patch('/retailer/:id', isLoggedIn, async(req, res) => {

    await Product.findByIdAndUpdate(req.params.id, req.body.product);
    req.flash('success', 'Updated Successfully!!');
    res.redirect(`/retailer/${req.user._id}`);
});

route.delete('/retailer/:id', isLoggedIn, async(req, res) => {

    await Product.findByIdAndDelete(req.params.id);
    res.redirect(`/retailer/${req.user._id}`);
});


module.exports = route;