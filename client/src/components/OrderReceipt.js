import React from 'react';
import Map from './GMaps.js';

//Order receipt with google maps component showing the delivery address.
const OrderReceipt = (props) => (
  <div id="receipt-page">
    <h1>Receipt</h1>
    <p>Your receipt was sent to {props.email}. It should arrive shortly.</p>
    <div className="Receipt"></div>
    <p>Card: {props.card}</p>
    <p>Address: {props.address}</p>
    <p>Email: {props.email}</p>
    <p>Total: ${props.total}</p>
      {props.orderedItems.map(item => (
        <div>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <img src = {item.img} alt ={item.img} />
          <p>{item.price}</p>
        </div>
      ))}
      <Map
        location={props.location}
        address={props.address}
        city={props.city}
        state={props.state}
        />
  </div>
)

export default OrderReceipt;
