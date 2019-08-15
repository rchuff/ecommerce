import React from 'react';

class Account extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      orders: []
    }
  }
  async componentDidMount(){
    let docs = await this.props.orders();
    this.setState({orders: docs});
  }

  render(){
    let orders = this.state.orders.map(order => (
      <div className="order-receipt">
        <h4>Date</h4>
        <h4>Address: {order.address}</h4>
        <h4>Card: {order.card}</h4>
        <h4>Email {order.email}</h4>
        {order.order.map(item => (
          <div className ="order-item">
            <p>{item.name}</p>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    ))

    return (
      <div>
        <h1>My Account</h1>
        <h3> {this.props.user.username} </h3>
        <h3>Orders</h3>
        <div>
          {orders}
        </div>
      </div>
    )
  }
}

export default Account;
