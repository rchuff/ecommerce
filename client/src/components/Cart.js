import React from 'react';

const Cart = ({cart}) => (
  <div>
    <img src="images/shopping-cart.svg" alt="shopping-cart" style={{
      width: "50px",
      height: "50px"
    }}/>
    <h4>{cart.length}</h4>
  </div>
)

export default Cart;
