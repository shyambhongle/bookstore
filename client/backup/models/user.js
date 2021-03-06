const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  gender:{
    type:String,
    required:true,
    trim:true
  }
});

module.exports = User = mongoose.model('user', UserSchema);
