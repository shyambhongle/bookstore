const express=require('express');
const router =express.Router();
const Book =require('./../models/book');
const passport=require('passport');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});


router.post('/addproduct',passport.authenticate('jwt',{session:false}),upload.single('img'),(req,res)=>{


if (req.user.id==="5c5f6f4f3ec16b0e5c4ebf96") {
  const newItem=new Book({
        title:req.body.title,
        description:req.body.description,
        price:req.body.price,
        author:req.body.author,
        category:[req.body.category],
        tag:req.body.tag,
        img:req.file.path
  }).save().then(success=>{res.json({message:"success"})})

}


})



module.exports=router;
