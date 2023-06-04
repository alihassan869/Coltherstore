require('dotenv').config();
const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
  User: {
    Country: String,
    Fname: String,
    Lname: String,
    Phone: String,
    Address: String,
    City: String,
    State: String,
    Code: String,
    message: String,
    checkbox: Boolean,
  },
  Carts: [
    {
      rname: {
        type: String,
        
      },
      imgdata: {
        type: String,
        
      },
      price: {
        type: Number,
        
      },
      qnty: {
        type: Number,
        
      },
    },
  ],
  Total: {
    type: String,
  },
});

module.exports = mongoose.model(process.env.COLLECTION2, orderSchema);
