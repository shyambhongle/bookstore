const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const bookSchema=new Schema({
  title:{
    type:String
  },
  genre:{
    type:String
  },
  description:{
    type:String
  },
  price:{
    type:Number
  },
  quantity:{
    type:String
  },
  author:{
    type:String
  },
  img:{
    type:String
  }
});


const Book=mongoose.model('book',bookSchema);
module.exports=Book;
