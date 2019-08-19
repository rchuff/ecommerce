const mongoose = require('mongoose');
require('dotenv').config();

//Handles all database queries and operations.
//Contains User collection, Item collection, and Order collection


mongoose.connect(`mongodb+srv://admin-ryan:${process.env.MONGO_PASS}@cluster0-kzf2g.mongodb.net/ecommerceDB?retryWrites=true&w=majority`, {useNewUrlParser: true});



var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){


  let userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    }
  });

  let User = mongoose.model('User', userSchema);

  let itemSchema = new mongoose.Schema({
    category: String,
    img: String,
    name: String,
    price: Number,
    description: String
  });

  let Item = mongoose.model('Item', itemSchema);

  let orderSchema = new mongoose.Schema({
    order: Array,
    card: Number,
    email: String,
    address: String,
    city: String,
    state: String,
    user: String,
    date: {
      type: Date,
      default: Date.now
    }
  });

  let Order = mongoose.model('Order', orderSchema);

  module.exports.Order= Order;
  module.exports.User= User;
  module.exports.Item= Item;
});
