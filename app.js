if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const seedDb = require('./seed');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const localStrategy = require('passport-local');
const User = require('./models/user');


//env key is used in place of connect url
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true }).then(() => {
        console.log("Connected to database");
    })
    .catch(err => {
        console.log("Erroe in db Connection");
        console.log(err.message);
        console.log(err.lineNumber);
        console.log(err.fileName);
    });

//Routes
const productRoute = require('./routes/product');
const authRoute = require('./routes/auth');
const cartRoute = require('./routes/cart');
const retailerRoute = require('./routes/retailer') //@
const profileRoute = require('./routes/profile') //@
    //env key is used in place of connect url
    // mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true }).then(() => {
    //         console.log("Connected to database");
    //     })
    //     .catch(err => {
    //         console.log("Erroe in db Connection");
    //         console.log(err.message);
    //     });

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));


app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));
app.use(methodOverride('_method'));
app.use(flash());

const sessionConfig = {
    secret: 'thisisreallyasecret',
    resave: false,
    saveUninitialized: true
}
app.use(session(sessionConfig));

//initializing the passport and session to store user info
app.use(passport.initialize());
app.use(passport.session());

passport.use(new localStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    res.locals.currentUser = req.user;

    next();
});





app.get('/', (req, res) => {

    res.render('home.ejs');
});

// seedDb();

app.use(productRoute);
app.use(authRoute);
app.use(cartRoute);
app.use(retailerRoute); //@
app.use(profileRoute); //@

app.listen(process.env.PORT || 3000, (req, res) => {
    console.log("Connected to server Port 3000");
});
