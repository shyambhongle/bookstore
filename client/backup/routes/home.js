const express =require('express');
const router =express.Router();
const Book=require('./../models/book');


router.get('/',(req,res)=>{

Book.find().then(books=>{
  return res.json(books);
})

});





module.exports=router;
