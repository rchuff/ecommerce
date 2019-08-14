const db = require('../models');
const express=require('express');
const shuffle = require('array-shuffle');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const sendReceipt = require('../handlers/email.js');
require('dotenv').config();
const saltRounds = 10;
router = express.Router();

//Register user. Salt/hash user password prior to storing it.
function registerUser(req, res){
  bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
    if (err) console.log(err);
    else {
      let newUser = new db.User({username: req.body.username, password: hash});
      newUser.save((err, newUser) => {
        if (err) return console.log(err);
        else {
          //Assing token and respond with user information.
          jwt.sign({newUser}, `${process.env.SECRET_KEY}`, { expiresIn: '1h' }, (err, token) => {
            res.json({
              newUser,
              pass: true,
              token
            });
          })
        }
      });
    }
  });
}

//Attempt to log in user.
function loginUser(req, res){
  db.User.findOne({ username: req.body.username}, (err, user) => {
    if (err) console.log(err);
    if (user){
      //Compare hashed passwords.
      bcrypt.compare(req.body.password, user.password, (err, hashComp) => {
        if (hashComp === true) {
          //Assign token if user successfully logs in.
          jwt.sign({user}, `${process.env.SECRET_KEY}`, { expiresIn: '1h' }, (err, token) => {
            res.json({
              user,
              pass: true,
              token
            });
          })
        }
        else res.json({
          pass: false
        });
      })
    }
    //No user found
    else res.json({pass: false});
  });
}

//Grabs random items to display on the login page.
function grabLoginItems(req, res){
  db.Item.find({}, (err, users) => {
    if (err) console.log(err);
    else {
      res.json(shuffle(users).slice(0,10));
    }
  });
}

//Grab categories for home page.
function grabCategories(req, res){
  db.Item.find({category: req.params.category}, (err,docs) => {
    if (err) console.log(err);
    else {
      res.json(docs);
    }
  });
}

//verifies token from client
function verifyToken(req, res){
  jwt.verify(req.token, `${process.env.SECRET_KEY}`, (err, authData) => {
    if(err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: 'Auth created',
        authData
      });
    }
  });
}


//Assembles token from header
function assembleToken(req, res, next) {
  //Grab Authorization header. Authorization: Bearer <token>
  const bearerHeader = req.headers['authorization'];
  if(typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    //Token not valid
    res.sendStatus(403);
  }
}

function newOrder(req, res){
  let newOrder = new db.Order({
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    email: req.body.email,
    card: req.body.card,
    order: req.body.order,
    user: req.body.user._id
  });
  newOrder.save((err, order) => {
    if (err) console.log(err);
    else res.json(order);
  });
  sendReceipt();
}

module.exports.registerUser = registerUser;
module.exports.grabLoginItems = grabLoginItems;
module.exports.assembleToken = assembleToken;
module.exports.verifyToken = verifyToken;
module.exports.loginUser = loginUser;
module.exports.grabCategories = grabCategories;
module.exports.newOrder = newOrder;
