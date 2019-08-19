import React from 'react';

const Cart = ({cart}) => (
  <div style={{textAlign: "center", margin: "0 15px"}}>
    <img src="images/cart.svg" alt="shopping-cart" style={{
      width: "45px",
      height: "45px",
      margin: "auto"
    }}/>
  <p style={{margin: "auto", color: "white", fontSize: "1.1rem"}}>{cart.length}</p>
  </div>
)

export default Cart;
