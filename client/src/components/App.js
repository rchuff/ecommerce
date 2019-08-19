//Main application component which conditionally renders
//based on user login. Tracks the logged in user and the cart.

import React, {Component} from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import {
  Switch, Route, Redirect
} from 'react-router-dom';
import Home from './Home';
import Account from './Account';
import Checkout from './Checkout';
import Login from './Login';
import PrivateRoute from './PrivateRoute';
import * as api from '../api/api';
import Navbar from './Navbar.js';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      loggedIn: props.loggedIn,
      cart: props.cart,
      user: props.user
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.addItem = this.addItem.bind(this);
    this.logout = this.logout.bind(this);
    this.grabOrders = this.grabOrders.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.clearCart = this.clearCart.bind(this);
  }

  static defaultProps = {
    loggedIn: false,
    cart: [],
    user: {}
  }

//Checks to see if user logged in
  handleLogin(username, password){
    return api.handleLogin.call(this,username,password);
  }

//Registers new user.
  handleRegister(stateObj){
    return api.handleRegister.call(this,stateObj);
  }

//adds item to user's cart
  addItem(item){
    let cart = this.state.cart.slice();
    cart.push(item);
    this.setState({cart}, () => {
      sessionStorage.setItem('cart', JSON.stringify(this.state.cart));
    });
  }

//Logout user and clear saved session information.
  logout(){
    this.setState({loggedIn: false, cart:[], user:{}}, () => {
      sessionStorage.clear();
    })
  }

  async grabOrders(){
    let orders = await api.grabOrders.call(this);
    return orders;
  }

  removeItem(orderItem, orderIndex){
    let newCart = this.state.cart.filter((item, idx) => {
      if (orderItem._id === item._id && orderIndex === idx) return false
      else return true
    });
    this.setState({cart: newCart}, ()=> {
      sessionStorage.setItem('cart', JSON.stringify(this.state.cart));
    });
  }

  clearCart(){
    this.setState({cart: []});
  }

//If not logged in the user can't access any PrivateRoutes in the application.
//If logged in user can't access login page.
  render(){
    return(
      <div id="application">
        {this.state.loggedIn ? (
          <Navbar
            cart={this.state.cart}
            logout={this.logout}
            />
        ) : <div></div>}


        <Switch>
          <Route path="/login" render={props => (
              !this.state.loggedIn ?
            <Login
              {...props}
              loggedIn={this.state.loggedIn}
              login={this.handleLogin}
              register={this.handleRegister}
            /> : <Redirect to="/" />
          )}/>


          <PrivateRoute
            component={Checkout}
            path="/checkout"
            exact
            loggedIn={this.state.loggedIn}
            user={this.state.user}
            cart={this.state.cart}
            logout={this.logout}
            removeItem={this.removeItem}
            clearCart = {this.clearCart}
            />
          <PrivateRoute component={Account}
            path="/account"
            exact
            loggedIn={this.state.loggedIn}
            user={this.state.user}
            cart={this.state.cart}
            logout={this.logout}
            orders={this.grabOrders}
            />
          <PrivateRoute
            component={Home}
            path="/"
            exact
            loggedIn={this.state.loggedIn}
            user={this.state.user}
            addToCart={this.addItem}
            cart={this.state.cart}
            logout={this.logout}
            />

        </Switch>
      </div>

    )
  }
}
//
// <div>
// <Link to="/">Home</Link>
// <Link to="/account">Account</Link>
// <Link to="/checkout">Checkout</Link>
// </div>


export default App;
