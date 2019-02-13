const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const profileSchema = new Schema({
  user:{
    type:Schema.Types.ObjectId
  },
  email: {
    type: String,
    required: true,
    trim:true
  },
  gender:{
    type:String
  },
  orders:{
    type:Array
  },
  cart:{
      type:Array
    },
  address:{
    type:String
  }
});

module.exports = Profile = mongoose.model('profile', profileSchema);
