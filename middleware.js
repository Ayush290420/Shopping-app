const isLoggedIn = (req, res, next) => {
        if (!req.isAuthenticated()) {
            req.flash('error', 'You need to login first!!');
            return res.redirect('/login');
        }
        next();
    }
    // const userCheck = (req, res, next) => {
    //     if (req.body.userType === 'retailer') {
    //         req.body.username = req.body.username + '_admin';
    //         console.log('it  is');
    //     }
    //     next();
    // }

module.exports = {
    isLoggedIn
}

// ,
//     userCheck