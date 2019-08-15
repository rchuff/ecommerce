import React from 'react';

class LoginForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  async handleSubmit(e){
    e.preventDefault();
    this.props.submit(this.state.username, this.state.password);
    this.setState({username:"", password: ""});
  }

  handleUsername(e){
    this.setState({username: e.target.value});
  }

  handlePassword(e){
    this.setState({password: e.target.value});
  }

  render(){
    return (
      <div>
        <h1>My Account</h1>
        <div className="user-info">
          <form onSubmit={this.handleSubmit}>
            <h2>Login</h2>
            <label htmlFor="username">Enter username</label>
            <input
              type="text"
              value={this.state.username}
              onChange= {this.handleUsername}
            />
          <label htmlFor="password">Enter password</label>
            <input
              type="password"
              value={this.state.password}
              onChange= {this.handlePassword}
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm;
