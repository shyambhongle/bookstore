const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
const router=express.Router();
const passport=require('passport');
const Profile=require('./../models/profile');


const stripe = require("stripe")("sk_test_rX54it3bevDhJ638D7jiFMI8");
const stripeChargeCallback = (req,res) => (stripeErr, stripeRes) => {
  if (stripeErr) {
    res.status(500).send({ error: stripeErr });
  } else {
    Profile.findOne({user:req.user.id})
            .then(profile=>{
              let newOrder=[];
              if (profile.orders.length>0) {
                newOrder=[...profile.orders];
              }
              let bodycart=req.body.cart;
              bodycart.time=new Date().toLocaleString().split(',')[0];
              newOrder.push(bodycart)
              Profile.findOneAndUpdate(
                {user:req.user.id},
                {$set:{orders:newOrder}},
                { new: true },
              ).then(pro=>{console.log(pro);})
            });





    res.status(200).send({ success: stripeRes });
  }
};


router.post("/charge",passport.authenticate('jwt',{session:false}),(req, res) => {
    const body = {
      source: req.body.data.token.id,
      amount: req.body.data.amount,
      currency: "usd"
    };
    stripe.charges.create(body, stripeChargeCallback(req,res));
});

module.exports = router;
