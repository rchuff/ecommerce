const db = require('../models');
const express=require('express');
const shuffle = require('array-shuffle');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const sendReceipt = require('../handlers/email.js');
const logic = require('./logic.js')
require('dotenv').config();
const saltRounds = 10;
router = express.Router();

//Routes for the application.
router.get('/auth', logic.assembleToken, (req,res) => {
  logic.verifyToken(req, res);

});


router.post('/register', (req, res) =>{
  logic.registerUser(req, res);
});

router.route('/login')
.get((req,res) => {
  logic.grabLoginItems(req,res);
})
.post((req, res) => {
  logic.loginUser(req, res);
});

router.get('/items/:category',(req, res) => {
  logic.grabCategories(req, res);
});

router.route('/order')
.get()
.post((req,res) => {
  logic.newOrder(req,res);
});







module.exports.router = router;
