const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ecommerce', {useNewUrlParser: true});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  let userSchema = new mongoose.Schema({
    username: String,
    password: String
  });

  let User = mongoose.model('User', userSchema);

  module.exports.User = User;
});
