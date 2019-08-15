import React from 'react';
import './Checkout.css';
import Order from './Order';
import OrderReceipt from './OrderReceipt';
import { updateInfo } from '../api/api.js';
import Logout from './Logout';

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
    updateInfo.call(this,address,city,state,email,card,this.props.user);
  }


  render(){

    let total= this.props.cart.reduce((acc, nextVal) => {
      return acc + nextVal.price;
    },0);

    return (

        <div>
          <Logout logout={this.props.logout} />
          {!this.state.confirmed ? (
            <Order
              {...this.state}
              orderedItems = {this.props.cart}
              total={total}
              updateStatus={this.updateStatus}
              user={this.props.user}
              remove={this.props.removeItem}
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
