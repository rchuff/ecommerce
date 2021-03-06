
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
export async function handleRegister({username, password, firstName, lastName, email}){
  let promise = await fetch('/api/register', {
    method: 'POST',
    body: JSON.stringify({
      username,
      password,
      firstName,
      lastName,
      email
    }),
    headers:{
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json());
  //User successfully registers we store the token from jwt
  //locally in the session.
  this.setState({loggedIn: true});
  this.setState({user: promise.user});
  sessionStorage.setItem('token', promise.token);
  return true;
}

//Updates order information so user can confirm the checkout.
export async function updateInfo(address,city,state,card,user){
  let url = createURL();

  //Store the latitude and longitude in the location array.
  let res = await fetch(url)
  .then(res => res.json());

//Update state to move to OrderReceipt page.
  this.setState({
    receiptPage: true,
    address,
    city,
    state,
    card,
    location: [
      res.results[0].geometry.location.lat,
      res.results[0].geometry.location.lng
    ]
  });

  //Generate url for google geolocation to use in the google maps API.
    function createURL() {
      let apiKey = 'AIzaSyDTuJCB4eWdnFlpf2_aqwMHI8B4KoDDscI'
      let urlAddress = address.replace(" ","+");
      let urlCity=city.replace(" ","+");
      return `https://maps.googleapis.com/maps/api/geocode/json?address=${urlAddress},${urlCity},${state}&key=${apiKey}`
    }
}

//Post the order to the server.
export async function confirmOrder(address,city,state,card,user){
  this.setState({confirmed: true});

  //Post order to server
  await fetch(`/api/order/${user._id}`, {
      method: 'POST',
      body: JSON.stringify({
        ...this.state,
        order: this.props.cart,
        user: this.props.user
      }),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json());

    sessionStorage.setItem('cart', '');
}

//Grab orders for user's account page.
export async function grabOrders(){
  try{
    let docs = await fetch(`/api/order/${this.state.user._id}`)
    .then(res => res.json());

    return docs;
  } catch(error){
    console.log(error);
  }
}
