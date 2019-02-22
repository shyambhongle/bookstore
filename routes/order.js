const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();
const Book=require('./../models/book');
const Profile=require('./../models/profile');
const passport=require('passport');


router.get('/',passport.authenticate('jwt',{session:false}),(req,res)=>{

Profile.findOne({user:req.user.id})
        .then(profile=>{
          res.json(profile.orders)
        })


})




module.exports=router;
