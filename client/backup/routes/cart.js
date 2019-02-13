const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();
const Book=require('./../models/book');
const passport=require('passport');


router.post('/order',(req,res)=>{

  let allOrders=[];
  let results=req.body.cartItemsWithQuantities.map((singleItem,i)=>{
      return Book.findById(singleItem.id)
        .then(itemdetail=>{return allOrders.push(itemdetail)})
  });


  Promise.all(results).then((completed) =>
  {
    return   res.json(allOrders);

  }
);
})





module.exports=router;
