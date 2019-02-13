const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const adminSchema = new Schema({
  products:{
    type:Array
  },
  orders:{
    type:Array
  },
  banner:{
    type:Array
  }

});

module.exports = Admin = mongoose.model('admin', adminSchema);
