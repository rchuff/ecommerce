

export async function handleLogin(username, password){
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
    console.log(promise);
    alert(`Success: ${promise.user.username}`);
    this.setState({loggedIn: true});
    this.setState({user: promise.user});
    return true;
  }
  else {
    alert('Invalid login credentials');
    return false;
  }
}

export async function handleRegister(username, password){
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
  this.setState({loggedIn: true});
  this.setState({user: promise});
  return true;
}
