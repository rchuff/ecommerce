import React from 'react';
import './Account.css';

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

  formatDate(dateString){
    let dateArray = dateString.split('T');
    return `${dateArray[0]}`
  }

  render(){
    let tableBorder={
      border: "2px solid black"
    }

    let orders = this.state.orders.map(order => (
      <div className="order-receipt" key={order._id} style={{
          border: "5px solid black",
          margin: "10px auto"
        }}>
        <div className="info-table">
          <table>
            <tbody>

            <tr style= {tableBorder}>
              <td><h4>Date: {this.formatDate(order.date)}</h4></td>
            </tr>
            <tr style= {tableBorder}>
              <td><h4>Delivery Address: {order.address}, {order.city}, {order.state}</h4></td>
            </tr>
            <tr style= {tableBorder}>
              <td><h4>Card: {order.card}</h4></td>
            </tr>
            <tr style= {tableBorder}>
              <td><h4>Total: ${order.order.reduce((acc, nextVal) => {
                  return acc + nextVal.price;
                }, 0)}
            </h4></td>
            </tr>
            </tbody>
          </table>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            {order.order.map((item, idx) => (
              <div className ="order-item col-lg-4 col-md-6 col-12" key={idx} style={{
                backgroundColor: "#F8F9FA",
                margin: "10px auto",
                border: "3px solid #9e9e9e",
                width: "25%",
                padding: "0"
                }}>
                <p style={{fontWeight:"bold", textDecoration: "underline"}}>{item.name}</p>
                <p>{item.description}</p>
                <p>${item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    ))



    return (
      <div>
        <h1>My Account</h1>
        <h3> {this.props.user.firstName} {this.props.user.lastName}</h3>
        <h3>Username: {this.props.user.username}</h3>
        <h3>Email: {this.props.user.email}</h3>
        {orders.length === 0 ? (
          <h3>No prior orders on this account</h3>
        ) : (
          <div style={{textAlign:"center", margin: "auto", width: "85%"}}>
            <h3>Orders</h3>
            <div>
              {orders}
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Account;
