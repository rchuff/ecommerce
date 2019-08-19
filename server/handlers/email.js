const nodemailer = require('nodemailer');
require('dotenv').config();

//send receipt to user email with nodemailer.
function sendReceipt(order,user){
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ecommerce.testing.rchuff@gmail.com',
      pass: `${process.env.NODE_MAIL}`
    }
  });
  
  let total = orderTotal(order);

  const mailOptions = {
    from: 'ecommerce.testing.rchuff@gmail.com',
    to: `${user.email}`,
    subject: 'Receipt from ECOMMERCE',
    html: `<h3>Order for ${user.firstName} ${user.lastName}</h3>
    <p>Delivery Address: ${order.address}, ${order.city}, ${order.state}</p>
    <p>Card: ${order.card}</p>
    <p>Total: ${total}</p>

    <p>Thank you for shopping on ecommerce.com! Shop again soon!</p>`
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) console.log(err);
    else console.log(info);
  });
}

//sum order's monetary total
function orderTotal(order){
  let total= order.order.reduce((acc, nextVal) => {
    return acc + nextVal.price;
  },0);

  return total;
}

module.exports = sendReceipt;
