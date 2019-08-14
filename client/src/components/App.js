//Main application component which conditionally renders
//based on user login. Tracks the logged in user and the cart.

import React, {Component} from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import {
  Switch, Route
} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Checkout from './Checkout';
import Login from './Login';
import PrivateRoute from './PrivateRoute';
import * as api from '../api/api';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      loggedIn: props.loggedIn,
      cart: [],
      user: props.user
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.addItem = this.addItem.bind(this);
  }

//Checks to see if user logged in
  handleLogin(username, password){
    return api.handleLogin.call(this,username,password);
  }

//Registers new user.
  handleRegister(username, password){
    return api.handleRegister.call(this,username,password);
  }

//adds item to user's cart
  addItem(item){
    let cart = this.state.cart.slice();
    cart.push(item);
    this.setState({cart});
  }

//If not logged in the user can't access any PrivateRoutes in the application.
  render(){
    return(
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/checkout">Checkout</Link>
        <Link to="/login">Login</Link>

        <Switch>
          <Route path="/login" render={props => (
            <Login
              {...props}
              login={this.handleLogin}
              register={this.handleRegister}
              loggedIn={this.state.loggedIn}
              />
          )}/>

          <PrivateRoute
            component={Checkout}
            path="/checkout"
            exact
            loggedIn={this.state.loggedIn}
            user={this.state.user}
            cart={this.state.cart}
            />
          <PrivateRoute component={About}
            path="/about"
            exact
            loggedIn={this.state.loggedIn}
            user={this.state.user}
            cart={this.state.cart}
            />
          <PrivateRoute
            component={Home}
            path="/"
            exact
            loggedIn={this.state.loggedIn}
            user={this.state.user}
            addToCart={this.addItem}
            cart={this.state.cart}
            />

        </Switch>
      </div>

    )
  }
}

export default App;
