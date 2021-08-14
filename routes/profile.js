const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/profile', (req, res) => {

    res.render('user/profile.ejs');
});

router.get('/profile/details', (req, res) => {

    res.render('user/change.ejs');
});
router.patch('/profile/:id', async(req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body.user);
        req.flash('success', 'Updated Successfully!!');
        res.redirect('/profile');

    } catch (e) {
        console.log(e.message);
        req.flash('error', 'Cannot find product!!');
        res.redirect('/error');
    }

});
module.exports = router;