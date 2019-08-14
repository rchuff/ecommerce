import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

verifyToken();

//Initial API call to check whether the user is logged in or not.
//Result is passed in as a prop to the application.
async function verifyToken(){
  let token = sessionStorage.getItem('token');
  if(token){
      let promise = await fetch('/api/auth', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then(res => {
        //Token not valid then we don't pass in user info
        if (res.ok) return res.json();
        else return false;
      });
      if (promise) {
        renderApp(true, promise.authData.user);
      } else {
        renderApp(false)
      }
  } else {
    renderApp(false);
  }


}

//render app based on token status
function renderApp(status, user){
  ReactDOM.render(
    <Router>
      <App loggedIn={status} user={user}/>
    </Router>
    ,
    document.getElementById('root'));

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();
}
