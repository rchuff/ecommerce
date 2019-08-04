const express = require ('express');
const bodyParser = require('body-parser');
const app = express();
let port = process.env.PORT;
if (port == null || port == ""){
  port = 3000;
}

app.listen(port, () => console.log(`Server now running on port ${port}`));
