const express = require('express');
const router = express.Router();
const product = require('../models/product');
const review = require('../models/review');
const { isLoggedIn } = require('../middleware');


router.get('/products', async(req, res) => {
    try {
        const products = await product.find({});
        res.render('products/index.ejs', { products });
    } catch (e) {
        console.log(e.message);
        req.flash('error', 'Cannot find the products');
        res.redirect('/error');
    }
});

router.get('/products/new', isLoggedIn, (req, res) => {

    res.render('products/new.ejs');

});

router.post('/products', async(req, res) => {
    try {
        console.log(req.body.product);
        await product.create(req.body.product);
        req.flash('success', 'Product Created!!');
        res.redirect('/products');
    } catch (e) {
        console.log(e.message);
        req.flash('error', 'Cannot create product!!');
        res.redirect('/error');
    }

});

router.get('/products/:id', async(req, res) => {
    try {
        const oneProduct = await product.findById(req.params.id).populate('review');
        res.render('products/show.ejs', { oneProduct });
    } catch (e) {
        console.log(e.message);
        req.flash('error', 'Cannot find product!!');
        res.redirect('/error');
    }
});

router.get('/products/:id/edit', isLoggedIn, async(req, res) => {
    const editProduct = await product.findById(req.params.id);
    res.render('products/edit.ejs', { editProduct });
});

router.patch('/products/:id', isLoggedIn, async(req, res) => {

    await product.findByIdAndUpdate(req.params.id, req.body.product);
    req.flash('success', 'Updated Successfully!!');
    res.redirect(`/products/${req.params.id}`);
});

router.delete('/products/:id', isLoggedIn, async(req, res) => {

    await product.findByIdAndDelete(req.params.id);
    res.redirect('/products');
});

//

router.post('/products/:id/reviews', isLoggedIn, async(req, res) => {
    const Product = await product.findById(req.params.id);
    // const Reviews = new review(req.body); //New review is created
    const Reviews = new review({
        user: req.user.username,
        ...req.body //Spread operator
    }); //Here username is also is added  to the review.

    Product.review.push(Reviews); //in the product it pushes the id of review(as in Schema type is ObjectId with reference of review)
    //Whole review is is passed but mongoose will only extract out the objectId and save inside product collection 
    await Reviews.save();
    await Product.save();
    res.redirect(`/products/${req.params.id}`);
});

router.get('/error', (req, res) => {
    res.render('error.ejs');
});



module.exports = router;