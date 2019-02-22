const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();
const Book=require('./../models/book');
const passport=require('passport');


router.post('/order',(req,res)=>{

  let allOrders=[];
  let quantity;
  let totalAmount=0;
  let results=req.body.cartItemsWithQuantities.map((singleItem,i)=>{
      return Book.findById(singleItem.id)
        .then(itemdetail=>{
          itemdetail.quantity=singleItem.quantity;
          totalAmount=totalAmount+(parseInt(itemdetail.price)*singleItem.quantity)
          allOrders.push(itemdetail)})
  });


  Promise.all(results).then((completed) =>
  {
    return   res.json({allOrders,totalAmount});

  }
);
})





module.exports=router;
