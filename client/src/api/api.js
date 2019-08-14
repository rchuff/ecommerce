
//handle user's login attempt.
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
    //User successfully logs in we store the token from jwt
    //locally in the session.
    alert(`Success: ${promise.user.username}`);
    this.setState({loggedIn: true});
    this.setState({user: promise.user});
    sessionStorage.setItem('token', promise.token);
    return true;
  }
  else {
    alert('Invalid login credentials');
    return false;
  }
}


//handle new user registration.
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
  //User successfully registers we store the token from jwt
  //locally in the session.
  this.setState({loggedIn: true});
  this.setState({user: promise});
  sessionStorage.setItem('token', promise.token);
  return true;
}

//Updates order information to confirm the checkout.
export async function updateInfo(address,city,state,email,card){
  let url = createURL();

  //Store the latitude and longitude in the location array.
  let res = await fetch(url)
  .then(res => res.json());

//Update state to move to OrderReceipt page.
  this.setState({
    confirmed: !this.state.confirmed,
    address,
    city,
    state,
    email,
    card,
    location: [
      res.results[0].geometry.location.lat,
      res.results[0].geometry.location.lng
    ]
  });

  //Post order to server
  fetch('/api/order', {
      method: 'POST',
      body: JSON.stringify({
        ...this.state,
        order: this.props.cart,
        user: this.props.user
      }),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(res => {
      console.log(res);
    });

//Generate url for google geolocation to use in the google maps API.
  function createURL() {
    let apiKey = 'AIzaSyDTuJCB4eWdnFlpf2_aqwMHI8B4KoDDscI'
    let urlAddress = address.replace(" ","+");
    let urlCity=city.replace(" ","+");
    return `https://maps.googleapis.com/maps/api/geocode/json?address=${urlAddress},${urlCity},${state}&key=${apiKey}`
  }
}
