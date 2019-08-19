import React from 'react';
import './Login.css';
import LoginPics from './LoginPics';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

//Handles login and registration for the user.
class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      regUser: "",
      regPass: "",
      items: [],
      signup: false
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.signup = this.signup.bind(this);
  }

  async handleLogin(username, password){
    let logTry = await this.props.login(username, password);
    if (logTry) this.props.history.push('/');
    this.setState({username: '', password: ''})
  }

  async handleRegister(stateObj){
    let newUser = await this.props.register(stateObj);
    if (newUser) this.props.history.push("/");
  }

  signup(){
    this.setState({signup: !this.state.signup});
  }


//Conditonally render the login or registration form depending
//on the status of signup.
  render(){

    let regstyle = {
      backgroundSize: "cover",
      paddingBottom: "10px"
    }

    let logStyle = {
      backgroundSize: "cover",
      height: "100vh",
      width: "100vw"
    }

    return(
      <div id="login-page" style={this.state.signup ? regstyle : logStyle}>
        <h1 style={{color: "white"}}>Welcome to Ecommerce.com</h1>
        <LoginPics />
        {this.state.signup ? (
          <div className = "register-form">
            <RegisterForm submit={this.handleRegister}/>
            <p>Already have an account?</p>
            <button className="btn btn-light" onClick={this.signup}>Login</button>
          </div>
        ) : (
          <div className = "login-form">
            <LoginForm submit={this.handleLogin}/>
            <p>New user?</p>
            <button className="btn btn-light" onClick={this.signup}>Create Account</button>
          </div>
        )}

      </div>
    )
  }
}

// <h1>My Account</h1>
// <div className="user-info">
//   <form onSubmit={this.handleSubmit}>
//     <h2>Login</h2>
//     <label htmlFor="username">Enter username</label>
//     <input
//       type="text"
//       value={this.state.username}
//       onChange= {this.handleUsername}
//     />
//   <label htmlFor="password">Enter password</label>
//     <input
//       type="text"
//       value={this.state.password}
//       onChange= {this.handlePassword}
//     />
//     <input type="submit" value="Submit" />
//   </form>
// </div>
// <div className="user-info">
//   <form onSubmit={this.handleRegister}>
//     <h2>Register</h2>
//     <label htmlFor="username">Enter username</label>
//     <input
//       type="text"
//       value={this.state.regUser}
//       onChange= {this.handleRegUsername}
//     />
//     <label htmlFor="password">Enter password</label>
//     <input
//       type="text"
//       value={this.state.regPass}
//       onChange= {this.handleRegPassword}
//     />
//     <input type="submit" value="Submit" />
//   </form>
// </div>
// </div>


export default Login;
