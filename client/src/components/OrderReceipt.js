import React from 'react';
import Map from './GMaps.js';

//Order receipt with google maps component showing the delivery address.
const OrderReceipt = (props) => (
  <div style={{padding: "2em"}}>
    {!props.confirmed ? (
      <div id="receipt-page" style={{
          textAlign: "center",
          margin: "auto"
        }}>
        <h2 style={{fontWeight: "bold"}}>Confirm order with the following information?</h2>

          <Map
              location={props.location}
              address={props.address}
              city={props.city}
              state={props.state}
              />
            <div style={{
              backgroundColor: "#F8F9FA",
              margin: "10px auto",
              border: "3px solid #9e9e9e",
              width: "25%"
              }}>
            <p style={{
              borderBottom: "3px solid #9e9e9e",
              margin: "0"
              }}><span style={{fontWeight: "bold"}}>Delivery Address: </span>{props.address}, {props.city}, {props.state}</p>
            <p style={{
              borderBottom: "3px solid #9e9e9e",
              margin: "0"
              }}><span style={{fontWeight: "bold"}}>Card: </span>{props.card}</p>
            <p style={{
              borderBottom: "3px solid #9e9e9e",
              margin: "0"
            }}><span style={{fontWeight: "bold"}}>Email: </span>{props.user.email}</p>
            <p style={{
              margin: "0"
              }}><span style={{fontWeight: "bold"}}>Total: </span>${props.total}</p>
          </div>
          <div className="container">
            <div className="row">
              {props.orderedItems.map(item => (
                <div className="col-lg-4 col-md-6 col-12" style={{
                  backgroundColor: "#F8F9FA",
                  margin: "10px auto",
                  border: "3px solid #9e9e9e",
                  width: "25%",
                  padding: "0"
                  }}>
                  <p style={{fontWeight: "bold"}}>{item.name}</p>
                  <p><span style={{fontWeight: "bold"}}>Description: </span>{item.description}</p>
                  <p style={{fontWeight: "bold"}}>${item.price}</p>
                </div>
              ))}
            </div>
          </div>




          <button onClick={props.confirmOrder} className="btn btn-primary" style={{margin:" 0 10px"}}>Confirm Order</button>
          <button onClick={props.editOrder} className="btn btn-light" style={{margin:" 0 10px"}}>Edit Order</button>
      </div>
    ) : (
    <div id="receipt-page" style={{textAlign: "center", margin: "auto"}}>
      <h2>Thank you {props.user.firstName} for shopping with us today!</h2>
      <p>Your receipt was sent to {props.user.email}. It should arrive shortly.</p>
        <Map
          location={props.location}
          address={props.address}
          city={props.city}
          state={props.state}
          />
        <div style={{
          backgroundColor: "#F8F9FA",
          margin: "10px auto",
          border: "3px solid #9e9e9e",
          width: "25%"
          }}>
        <p style={{
          borderBottom: "3px solid #9e9e9e",
          margin: "0"
          }}><span style={{fontWeight: "bold"}}>Delivery Address: </span>{props.address}, {props.city}, {props.state}</p>
        <p style={{
          borderBottom: "3px solid #9e9e9e",
          margin: "0"
          }}><span style={{fontWeight: "bold"}}>Card: </span>{props.card}</p>
        <p style={{
          borderBottom: "3px solid #9e9e9e",
          margin: "0"
          }}><span style={{fontWeight: "bold"}}>Email: </span>{props.user.email}</p>
      </div>

    </div>)

  }
  </div>

)

export default OrderReceipt;
