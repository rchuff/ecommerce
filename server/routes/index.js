const express = require('express');
const bodyParser = require('body-parser');
const db = require('../models');
router = express.Router();

router.post('/register', (req, res) =>{
  let newUser = new db.User({username: req.body.username, password: req.body.password});
  newUser.save((err, newUser) => {
    if (err) return console.log(err);
    else res.json(newUser);
  });
});

router.post('/login', (req, res) => {
  db.User.findOne({ username: req.body.username}, (err, user) => {
    if (err) console.log(err);
    if (user){
      if (user.password === req.body.password) res.json({
        user,
        pass: true
      });
      else res.json({
        pass: false
      });
    }
    else res.json({pass: false});
  });
});

module.exports = router;
