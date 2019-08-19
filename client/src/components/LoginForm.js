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
        <div className="user-info">
          <form onSubmit={this.handleSubmit}>
            <h2>Login</h2>
            <input
              type="text"
              value={this.state.username}
              onChange= {this.handleUsername}
              placeholder="Username"
              required
            />
            <input
              type="password"
              value={this.state.password}
              onChange= {this.handlePassword}
              placeholder="Password"
              required
            />
            <input type="submit" value="Submit" className="btn btn-primary"/>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm;
