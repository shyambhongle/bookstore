const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
const keys=require('./config/keys');

const app = express();

//routes
const register=require('./routes/register');
const login=require('./routes/login');
const home=require('./routes/home');
const profile=require('./routes/profile');
const cart=require('./routes/cart');




// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



mongoose
  .connect(keys.mongoURI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);



//router user
app.use('/home',home);
app.use('/register',register);
app.use('/login',login);
app.use('/profile',profile);
app.use('/cart',cart);




app.listen(5000,()=>{console.log("server Connected")})
