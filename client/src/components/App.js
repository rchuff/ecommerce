//Main application component which conditionally renders
//based on user login. Tracks the logged in user and the cart.
//Generates API calls to the backend server.

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
      loggedIn: false,
      cart: 0,
      user: {}
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }



  handleLogin(username, password){
    return api.handleLogin.call(this,username,password);
  }

  handleRegister(username, password){
    return api.handleRegister.call(this,username,password);
  }

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
            />
          <PrivateRoute component={About}
            path="/about"
            exact
            loggedIn={this.state.loggedIn}
            user={this.state.user}
            />
          <PrivateRoute
            component={Home}
            path="/"
            exact
            loggedIn={this.state.loggedIn}
            user={this.state.user}
            />

        </Switch>
      </div>

    )
  }
}

export default App;
