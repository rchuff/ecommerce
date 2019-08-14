import React from 'react';
import './Checkout.css';
import Order from './Order';
import OrderReceipt from './OrderReceipt';
import dotenv from 'dotenv';
import { updateInfo } from '../api/api.js';

//Checkout renders Order or OrderReceipt based on whether the order
//has been confirmed.
class Checkout extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      confirmed: false,
      address: "",
      city:"",
      state:"",
      email: "",
      card: 0,
      location:[]
    }
    this.updateStatus = this.updateStatus.bind(this);
  }

//Update status after user finished on the Order page. Will display
//OrderReceipt when complete.
  updateStatus(address,city,state,email,card){
    updateInfo.call(this,address,city,state,email,card);
  }


  render(){
    let orderedItems = this.props.cart.map(item => (
      <div className="order-item">
        <img src={item.img} alt={item.name} style={{
            width: "200px",
            height: "200px"
          }}/>
        <h4>{item.name}</h4>
        <p>{item.price}</p>
      </div>
    ))

    let total= this.props.cart.reduce((acc, nextVal) => {
      return acc + nextVal.price;
    },0);

    return (

        <div>
          {!this.state.confirmed ? (
            <Order
              {...this.state}
              orderedItems = {orderedItems}
              total={total}
              updateStatus={this.updateStatus}
              user={this.props.user}
              />
          ) : (
            <OrderReceipt
              {...this.state}
              orderedItems={this.props.cart}
              total={total}
              user={this.props.user}
              />
          )
        }
        </div>

    )
  }
}

export default Checkout;
