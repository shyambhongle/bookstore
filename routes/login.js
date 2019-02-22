const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('./../config/keys');
const passport = require('passport');
const User = require('./../models/user');



router.post('/', (req, res) => {

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then(user => {
    // Check for user
    if (!user) {

      return res.status(404).json({message:"email not registerd"});
    }

    // Check Password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
      if (user.id==="5c5f6f4f3ec16b0e5c4ebf96") {
        // User Matched
        const payload = { id: user.id,admin:true}; // Create JWT Payload
        // Sign Token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: 'Bearer ' + token
            });
          }
        );
      }else {
        // User Matched
        const payload = { id: user.id,email:user.email}; // Create JWT Payload
        // Sign Token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: 'Bearer ' + token
            });
          }
        );
      }
      } else {
        return res.status(400).json({messgae:"password incorect"});
      }
    });
  });
});


module.exports=router;
