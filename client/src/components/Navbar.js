import React from 'react';
import {Link} from 'react-router-dom';
import Logout from './Logout';
import Cart from './Cart';
import './Navbar.css'

const Navbar = (props) => (



  <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="https://github.com/rchuff/ecommerce">Ecommerce</a>
  <div className = "special-items-collapse">
    <Logout logout={props.logout}/>
    <Cart cart={props.cart}/>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </div>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/account">Account</Link>
      </li>
      <li className="nav-item">
        <Link to="/checkout">Checkout</Link>
      </li>
    </ul>
    <span className="navbar-text special-items-open">
      <Logout logout={props.logout} />
      <Cart cart={props.cart} />
    </span>
  </div>
</nav>


)
export default Navbar;

// <nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <a class="navbar-brand" href="https://github.com/rchuff/ecommerce">E</a>
//   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>
//   <div class="collapse navbar-collapse" id="navbarNav">
//     <ul class="navbar-nav">
//       <li class="nav-item active">
//         <Link to="/">Home</Link>
//       </li>
//       <li class="nav-item">
//         <Link to="/account">Account</Link>
//       </li>
//       <li class="nav-item">
//         <Link to="/checkout">Checkout</Link>
//       </li>
//     </ul>
//   </div>
//   <Logout logout={props.logout} />
//   <Cart cart={props.cart} />
// </nav>
