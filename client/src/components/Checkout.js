import React from 'react';
import './Checkout.css';
import Order from './Order';
import OrderReceipt from './OrderReceipt';
import { updateInfo, confirmOrder } from '../api/api.js';
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
      card: 0,
      location:[],
      receiptPage: false
    }
    this.updateStatus = this.updateStatus.bind(this);
    this.confirmOrder = this.confirmOrder.bind(this);
    this.editOrder=this.editOrder.bind(this);
  }

//Update status after user finished on the Order page. Will display
//OrderReceipt when complete.
  updateStatus(address,city,state,card){
    updateInfo.call(this,address,city,state,card,this.props.user);
    window.scrollTo(0,0);
  }

  confirmOrder(address,city,state,card){
    confirmOrder.call(this,address,city,state,card, this.props.user);
    this.props.clearCart();
  }

  editOrder(){
    this.setState({receiptPage: false});
  }


  render(){

    let total= this.props.cart.reduce((acc, nextVal) => {
      return acc + nextVal.price;
    },0);

    return (

        <div>
          {!this.state.receiptPage ? (
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
              confirmOrder={this.confirmOrder}
              confirmed={this.state.confirmed}
              editOrder={this.editOrder}
              />
          )
        }
        </div>

    )
  }
}

export default Checkout;
