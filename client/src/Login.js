import React from 'react';

class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      regUser: "",
      regPass: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.handleRegUsername = this.handleRegUsername.bind(this);
    this.handleRegPassword = this.handleRegPassword.bind(this);
  }

  async handleSubmit(e){
    e.preventDefault();
    this.setState({username: '', password: ''})
    let logTry = await this.props.login(this.state.username, this.state.password);
    if (logTry) this.props.history.push('/');
  }

  handleUsername(e){
    this.setState({username: e.target.value});
  }

  handlePassword(e){
    this.setState({password: e.target.value});
  }

  async handleRegister(e){
    e.preventDefault();
    this.setState({regUser:'', regPass: ''});
    let newUser = await this.props.register(this.state.regUser, this.state.regPass);
    if (newUser) this.props.history.push("/");

  }

  handleRegUsername(e){
    this.setState({regUser: e.target.value});
  }

  handleRegPassword(e){
    this.setState({regPass: e.target.value});
  }

  render(){
    return(
      <div>
        <h1>My Account</h1>
        <div className="login">
          <form onSubmit={this.handleSubmit}>
            <h2>Username</h2>
            <input
              type="text"
              value={this.state.username}
              onChange= {this.handleUsername}
            />
            <h2>Password</h2>
            <input
              type="text"
              value={this.state.password}
              onChange= {this.handlePassword}
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div className="register">
          <form onSubmit={this.handleRegister}>
            <label htmlFor="username">Enter username</label>
            <input
              type="text"
              value={this.state.regUser}
              onChange= {this.handleRegUsername}
            />
            <label htmlFor="password">Enter password</label>
            <input
              type="text"
              value={this.state.regPass}
              onChange= {this.handleRegPassword}
            />
            <input type="submit" value="Submit" />
          </form>
        </div>

      </div>

    )
  }
}

export default Login;
