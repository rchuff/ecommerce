const express = require ('express');
const bodyParser=require('body-parser');
const router = require('./routes');
const errorHandler = require('./handlers/error.js');
const app = express();
let port = process.env.PORT;
if (port == null || port == ""){
  port = 3001;
}

app.use(bodyParser.json());

app.use('/api', router.router);

app.use(function(req,res,next) {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use(errorHandler);

app.listen(port, () => console.log(`Server now running on port ${port}`));
