const express = require('express');
const router = express.Router();
const passport = require('passport');
const Book = require('./../models/book');
const mongoose= require('mongoose');




router.post('/',(req,res)=>{


Book.find()
    .then(books=>{
      let newList=[];
      let test=books.map(book=>{
        let x= book.category.includes(req.body.keyword.toLowerCase());
        return x?newList.push(book):null
      })
      Promise.all(test).then((completed)=>{
    return res.json(newList)
      })
    })
})




router.post('/navigation',(req,res)=>{
  Book.find()
      .then(books=>{
        let newList=[];
        let test=books.map(book=>{
          let x= book.tag.includes(req.body.keyword);
          console.log(req.body.keyword);
          return x?newList.push(book):null
        })
        Promise.all(test).then((completed)=>{
      return res.json(newList)
        })
      })
})




module.exports=router;
