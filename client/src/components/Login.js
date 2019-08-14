import React from 'react';
import './Login.css';

//Handles login and registration for the user.
class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      regUser: "",
      regPass: "",
      items: []
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
    let logTry = await this.props.login(this.state.username, this.state.password);
    if (logTry) this.props.history.push('/');
    this.setState({username: '', password: ''})
  }

  handleUsername(e){
    this.setState({username: e.target.value});
  }

  handlePassword(e){
    this.setState({password: e.target.value});
  }

  async handleRegister(e){
    e.preventDefault();
    let newUser = await this.props.register(this.state.regUser, this.state.regPass);
    if (newUser) this.props.history.push("/");
    this.setState({regUser:'', regPass: ''});
  }

  handleRegUsername(e){
    this.setState({regUser: e.target.value});
  }

  handleRegPassword(e){
    this.setState({regPass: e.target.value});
  }

//Grab random array of items and display them.
  componentDidMount(){
    fetch('/api/login')
    .then(res => res.json())
    .then(res => {
    this.setState({items: res});
    });
  }

  render(){
    let items = this.state.items.map(item => {
      return <li><img className="login-item" src={item.img} alt={item.name}/></li>
    });

    return(
      <div id="login-page">
        <div>
          <ul>
            {items}
          </ul>
        </div>
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
              type="text"
              value={this.state.password}
              onChange= {this.handlePassword}
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div className="user-info">
          <form onSubmit={this.handleRegister}>
            <h2>Register</h2>
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
