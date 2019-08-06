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

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      loggedIn: false,
      cart: 0,
      user: {}
    }
    this.handleLogin = this.handleLogin.bind(this);
  }

  async handleLogin(username, password){
    let promise = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({
        username: username,
        password: password
      }),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json());

    if (promise.pass){
      alert(`Success: ${promise.user.username}`);
      this.setState({loggedIn: true});
      return true;
    }
    else {
      alert('Invalid login credentials');
      return false;
    }
  }

  async handleRegister(username, password){
    let promise = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({
        username: username,
        password: password
      }),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json());
    alert(`Success: ${promise.username}`);
    this.setState({loggedIn: true});
    return true;
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
          <PrivateRoute component={Checkout} path="/checkout" exact loggedIn={this.state.loggedIn}/>
          <PrivateRoute component={About} path="/about" exact loggedIn={this.state.loggedIn}/>
          <PrivateRoute component={Home} path="/" exact loggedIn={this.state.loggedIn}/>

        </Switch>
      </div>

    )
  }
}

export default App;
