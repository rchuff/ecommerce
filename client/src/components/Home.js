import React from 'react';
import Item from './Item';
import './Home.css';
import Cart from './Cart';
import {Link} from 'react-router-dom';
import Logout from './Logout';

let categories= ['Shirts', 'Shoes', 'Pants', 'Hats', 'Socks', 'Special'];

//Displays all items for user to select and add to the shopping cart.
class Home extends React.Component{
  constructor(props){

    super(props);
    this.state = {
      'Shirts': [],
      'Shoes': [],
      'Pants': [],
      'Hats': [],
      'Socks': [],
      'Special': []
    }
  }

//Fetch all items from server to display on the home page.
componentDidMount(){
  categories.forEach(cat => {
    fetch(`/api/items/${cat}`)
    .then(res => res.json())
    .then(catItems => {
      for (let prop in this.state){
        if (prop === cat){
          this.setState({[prop]: catItems});
        }
      }
    })
    })
  }


  render(){
    let stockpile = {};
    for (let index in this.state){
      stockpile[index] = this.state[index].map(item => (
        <Item
          key={item._id}
           {...item}
           addToCart={this.props.addToCart.bind(this, item)}
          />
      ))
    }

    return (

      <div id='homepage'>
        <Logout logout={this.props.logout} />
        <Cart cart={this.props.cart} />
        <Link to="/checkout" style = {{
            backgroundColor: "#3177BD",
            color: "white",
            textDecoration: "none"
          }}>Checkout</Link>
        <h1>HOMEPAGE</h1>
        <div>
          <h2>Shirts</h2>
          <div className = 'item-section'>
            {stockpile["Shirts"]}
          </div>
        </div>
        <div>
          <h2>Pants</h2>
          <div className = 'item-section'>
            {stockpile["Pants"]}
          </div>
        </div>
        <div>
          <h2>Shoes</h2>
          <div className = 'item-section'>
            {stockpile["Shoes"]}
          </div>
        </div>
        <div>
          <h2>Hats</h2>
          <div className = 'item-section'>
            {stockpile["Hats"]}
          </div>
        </div>
        <div>
          <h2>Socks</h2>
          <div className = 'item-section'>
            {stockpile["Socks"]}
          </div>
        </div>
        <div>
          <h2>Specialty Items</h2>
          <div className = 'item-section'>
            {stockpile["Special"]}
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
