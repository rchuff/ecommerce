const nodemailer = require('nodemailer');
require('dotenv').config();

//send receipt to user email with nodemailer.
function sendReceipt(){
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ecommerce.testing.rchuff@gmail.com',
      pass: `${process.env.NODE_MAIL}`
    }
  });

  const mailOptions = {
    from: 'ecommerce.testing.rchuff@gmail.com',
    to: 'rchuff@umich.edu',
    subject: 'Testing 123',
    html: '<h1>Howdy from nodemailer!</h1>'
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) console.log(err);
    else console.log(info);
  });
}

module.exports = sendReceipt;
