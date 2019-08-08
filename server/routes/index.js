const db = require('../models');
const express=require('express');
const shuffle = require('array-shuffle')
router = express.Router();

router.post('/register', (req, res) =>{
  let newUser = new db.User({username: req.body.username, password: req.body.password});
  newUser.save((err, newUser) => {
    if (err) return console.log(err);
    else res.json(newUser);
  });
});

router.route('/login')
.get((req,res) => {
  db.Item.find({}, (err, users)=> {
    if (err) console.log(err);
    else {

      res.json(shuffle(users).slice(0,10));
    }
  });
})
.post((req, res) => {
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

router.get('/items/:category',(req, res) => {
  console.log("Received");
  console.log(req.params.category);
  db.Item.find({category: req.params.category}, (err,docs)=>{
    if (err) console.log(err);
    else {
      console.log(docs);
      res.json(docs);
    };
  });
});



module.exports.router = router;
