import React from 'react';
import Item from './Item';
import './Home.css';

let categories= ['Shirts', 'Shoes', 'Pants', 'Hats', 'Socks', 'Special'];


class Home extends React.Component{
  constructor(props){

    super(props);
    this.state = {
      'Shirts': [],
      'Shoes': [],
      'Pants': [],
      'Hats': [],
      'Socks': [],
      'Specialty': []
    }
  }

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
      console.log(this.state[index]);
      stockpile[index] = this.state[index].map(item => (
        <Item
          key={item._id}
           {...item}
          />
      ))
      console.log(stockpile)
    }

    return (
      <div id='homepage'>
        <h1>HOMEPAGE</h1>
        <div>
          <h2>Shirts</h2>
          <div className = 'item-section'>
            <div className='hoverCart'>
              <img src="images/shopping-cart.svg" alt="cart" />
            </div>
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
