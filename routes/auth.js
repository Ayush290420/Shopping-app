const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');

// const { userCheck } = require('../middleware');


router.get('/register', (req, res) => {
    res.render('auth/signup.ejs');
});

router.post('/register', async(req, res) => {
    try {

        let user;
        user = new User({ username: req.body.username, email: req.body.email, userType: req.body.userType, phoneNo: req.body.phoneNo });
        const newUser = await User.register(user, req.body.password);

        req.flash('success', 'Register Successfully');
        res.redirect('/login');
    } catch (e) {
        req.flash('error', e.message);
        res.redirect('/register');
    }
});

router.get('/login', (req, res) => {
    res.render('auth/login.ejs');
});

router.post('/login',
    passport.authenticate('local', {
        failureRedirect: '/login',
        failureFlash: true
    }), (req, res) => {

        if (req.user.userType === 'retailer') {

            req.flash('success', `Welcome Back!!!`);
            // res.redirect('/products');
            res.redirect(`/retailer/${req.user.id}`); //@
        } else {
            req.flash('success', `Welcome Back!!!${req.user.username}`);
            res.redirect('/');
        }



    });

router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success', 'Logged Out successfully');
    res.redirect('/login');
});

module.exports = router;