const express=require('express');
const router=express();
const mongoose= require('mongoose');
const passport=require('passport');
const Profile=require('./../models/profile');


router.post('/',passport.authenticate('jwt',{session:false}),(req,res)=>{
  Profile.findOne({user:req.user.id})
          .then(profile=>{
            if (profile.length===0) {
              const newProfile=new Profile({
                user:req.user.id,
                email:req.user.email
              }).save();
            }else {
              console.log(profile);
            }
          })
});

router.get('/cartitems',passport.authenticate('jwt',{session:false}),(req,res)=>{
  Profile.findOne({user:req.user.id})
          .then(profile=>{
            if (profile.cart.length>0) {
              return res.json(profile.cart)
            }else {
              let some=[]
              return res.json(some)
            }
          })
})


router.post('/addtocart',passport.authenticate('jwt',{session:false}),(req,res)=>{
          Profile.findOneAndUpdate(
            {user:req.user.id},
            {$set:{cart:req.body.payload}},
            {new:true}
          ).then(newcart=>{res.json(newcart.cart)})
})

router.post('/removecart',passport.authenticate('jwt',{session:false}),(req,res)=>{
  Profile.findOneAndUpdate(
    {user:req.user.id},
    {$set:{cart:[]}},
    {new:true}
  ).then(newcart=>{res.json(newcart.cart)})
})



module.exports=router;
