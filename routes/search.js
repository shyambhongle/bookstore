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


router.post('/input',(req,res)=>{
  Book.find()
      .then(books=>{
        let newList=[];
        let test=books.map(book=>{
          let x= book.title.includes(req.body.keyword.toUpperCase());
          return x?newList.push({title:book.title,id:book._id}):null
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
          return x?newList.push(book):null
        })
        Promise.all(test).then((completed)=>{
      return res.json(newList)
        })
      })
})


router.post('/inputclick',(req,res)=>{
Book.findById(req.body.id)
    .then(book=>{
      let bookList=[];
      bookList.push(book)
      return res.json(bookList);
    })
})





router.post('/inputsearchclick',(req,res)=>{
let newList=[];
let test=req.body.items.map(book=>{
  return Book.findById(book.id)
      .then(single=>{
        return newList.push(single);
      })
})

Promise.all(test).then((completed)=>{
res.json(newList)})
})




module.exports=router;
