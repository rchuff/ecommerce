import React from 'react';

class RegisterForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      email: ""
    }
    this.handleRegister = this.handleRegister.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleFName = this.handleFName.bind(this);
    this.handleLName = this.handleLName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
  }

  async handleRegister(e){
    e.preventDefault();
    this.props.submit(this.state);
    this.setState({username:'', password: '', firstName:'', lastName: '', email: ''});
  }

  handleUsername(e){
    this.setState({username: e.target.value});
  }

  handlePassword(e){
    this.setState({password: e.target.value});
  }

  handleFName(e){
    this.setState({firstName: e.target.value});
  }

  handleLName(e){
    this.setState({lastName: e.target.value});
  }

  handleEmail(e){
    this.setState({email: e.target.value});
  }

  render(){
    return(
      <div>
      <div className="user-info">
        <form onSubmit={this.handleRegister}>
          <h2>Register</h2>
          <input
            type="text"
            value={this.state.username}
            placeholder="Username"
            onChange= {this.handleUsername}
            required
          />
          <input
            type="text"
            value={this.state.firstName}
            placeholder="First Name"
            onChange= {this.handleFName}
            required
          />
          <input
            type="text"
            value={this.state.lastName}
            placeholder="Last Name"
            onChange= {this.handleLName}
            required
          />
          <input
            type="email"
            value={this.state.email}
            placeholder="Email"
            onChange= {this.handleEmail}
            required
          />
          <input
            type="password"
            value={this.state.password}
            placeholder="Password"
            onChange= {this.handlePassword}
            required
          />
          <input type="submit" value="Submit" className="btn btn-primary"/>
        </form>
      </div>
    </div>
    )
  }
}

export default RegisterForm;
