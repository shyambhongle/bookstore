const express=require('express');
const router=express();
const mongoose= require('mongoose');
const passport=require('passport');
const Profile=require('./../models/profile');



router.get('/myorder',passport.authenticate('jwt',{session:false}),(req,res)=>{
  Profile.findOne({user:req.user._id})
          .then(profile=>{
            if (!profile) {
              let newProfile=new Profile({
                email:req.user.email,
                user:req.user._id,
                gender:req.user.gender
              }).save().then(userProfile=>{
              return res.json(userProfile)
            });
          }else{
            return res.json(profile);
          }
          })
});







router.post('/addtocart',passport.authenticate('jwt',{session:false}),(req,res)=>{
  Profile.findOne({user:req.user.id})
          .then(profile=>{
            if(profile){
              console.log(req.body.id);
              let newCart=[...profile.cart];
              newCart.push(req.body.id)

              Profile.findOneAndUpdate(
                {user: req.user.id},
                {$set: {cart:newCart}},
                {new: true}
              ).then(
                profileCart=>{return res.json(profileCart)}
              );
            }
          })
     })//ends


module.exports=router;
