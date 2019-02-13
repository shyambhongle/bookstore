const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const bookSchema=new Schema({
  title:{
    type:String
  },
  category:{
    type:Array
  },
  description:{
    type:String
  },
  price:{
    type:String
  },
  quantity:{
    type:String
  },
  author:{
    type:String
  },
  img:{
    type:String
  },
  tag:{
    type:String
  }
});


const Book=mongoose.model('book',bookSchema);
module.exports=Book;
