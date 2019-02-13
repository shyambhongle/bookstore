const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('./../config/keys');
const passport = require('passport');
const User = require('./../models/user');



router.post('/', (req, res) => {


  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({message:"email already registerd"});
    } else {

          const newUser = new User({
            email: req.body.email,
            password: req.body.password,
            gender:req.body.gender
          });

          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser
                .save()
                .then(user => res.json({"message":"successfuly registerd"}))
                .catch(err => console.log(err));
            });
          });


    }
  });


});


module.exports = router;
