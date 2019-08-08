const express = require ('express');
const bodyParser=require('body-parser');
const router = require('./routes');
const app = express();
let port = process.env.PORT;
if (port == null || port == ""){
  port = 3001;
}

app.use(bodyParser.json());

app.use('/api', router.router);

app.listen(port, () => console.log(`Server now running on port ${port}`));
