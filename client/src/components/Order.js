import React from 'react';

//Order entry form for delivery/email.
class Order extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      address: "",
      city: "",
      state: "",
      card:""
    }
    this.handleAddress = this.handleAddress.bind(this);
    this.handleCity=this.handleCity.bind(this);
    this.handleState=this.handleState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCard= this.handleCard.bind(this);
  }

  handleAddress(e){
    this.setState({address: e.target.value})
  }

  handleCity(e){
    this.setState({city: e.target.value})
  }

  handleState(e){
    this.setState({state: e.target.value})
  }

  handleCard(e){
    this.setState({card: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault();
    if (this.props.orderedItems.length === 0) alert("Cart is empty. Please add items to your cart.");
    else {
      this.props.updateStatus(
        this.state.address,
        this.state.city,
        this.state.state,
        this.state.card
      );
    }

  }

  render(){
    let orderedItems = this.props.orderedItems.map((item, idx) => (
      <div className="order-item col-lg-4 col-md-6 col-12" key={idx}>
        <img src={item.img} alt={item.name} style={{
            width: "200px",
            height: "200px",
            borderRadius: "5px"
          }}/>
        <h4>{item.name}</h4>
        <p>${item.price}</p>
        <button onClick={this.props.remove.bind(this,item, idx)} className="btn btn-secondary">Remove Item</button>
      </div>
    ))

    return (
      <div>
        <div style={{
          textAlign: "center"
          }}>
          <h1>Checkout</h1>
          <h3 style={{textDecoration: "underline"}}>Selected Items</h3>
          <div className="order-list">
            {orderedItems.length===0 ? (
              <div style={{
                  backgroundColor: "#F8F9FA",
                  padding: "10px 0",
                  width: "75%",
                  margin: "auto"
                }}>
                <h4>Your cart is empty</h4>
              </div>
            ) : (
              <div className="container" style={{
                backgroundColor: "#F8F9FA",
                padding: "10px 0"
                }}>
                  <div className="row justify-content-start">
                    {orderedItems}
                  </div>

              </div>
            )}

          </div>
          <h4>Total: ${this.props.total}</h4>
        </div>
        <hr style={{
          borderStyle: "dotted none none",
          borderWidth: "5px 0",
          width: "50%",
          borderTopWidth: "10px",
          borderColor: "#b8b8b8",
          margin: "2em auto"
          }}/>




        <div style={{
            textAlign: "center",
            width: "75%",
            margin: "auto"
          }}>
          <h3>Order Information</h3>
          <form onSubmit={this.handleSubmit} style={{
              textAlign: "left",
              paddingBottom:"2em"}}>

            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input required className="form-control" id="address" type="text" value={this.state.address} onChange={this.handleAddress} />
            </div>

            <div className="form-group">
              <label htmlFor="city">City</label>
              <input required className="form-control" id="city" type="text" value={this.state.city} onChange={this.handleCity} />
            </div>

            <div className="form-group">
              <label htmlFor="state">State</label>
              <select required className="form-control" id="state" value={this.state.state} onChange={this.handleState}>
              	<option value="AL">Alabama</option>
              	<option value="AK">Alaska</option>
              	<option value="AZ">Arizona</option>
              	<option value="AR">Arkansas</option>
              	<option value="CA">California</option>
              	<option value="CO">Colorado</option>
              	<option value="CT">Connecticut</option>
              	<option value="DE">Delaware</option>
              	<option value="DC">District Of Columbia</option>
              	<option value="FL">Florida</option>
              	<option value="GA">Georgia</option>
              	<option value="HI">Hawaii</option>
              	<option value="ID">Idaho</option>
              	<option value="IL">Illinois</option>
              	<option value="IN">Indiana</option>
              	<option value="IA">Iowa</option>
              	<option value="KS">Kansas</option>
              	<option value="KY">Kentucky</option>
              	<option value="LA">Louisiana</option>
              	<option value="ME">Maine</option>
              	<option value="MD">Maryland</option>
              	<option value="MA">Massachusetts</option>
              	<option value="MI">Michigan</option>
              	<option value="MN">Minnesota</option>
              	<option value="MS">Mississippi</option>
              	<option value="MO">Missouri</option>
              	<option value="MT">Montana</option>
              	<option value="NE">Nebraska</option>
              	<option value="NV">Nevada</option>
              	<option value="NH">New Hampshire</option>
              	<option value="NJ">New Jersey</option>
              	<option value="NM">New Mexico</option>
              	<option value="NY">New York</option>
              	<option value="NC">North Carolina</option>
              	<option value="ND">North Dakota</option>
              	<option value="OH">Ohio</option>
              	<option value="OK">Oklahoma</option>
              	<option value="OR">Oregon</option>
              	<option value="PA">Pennsylvania</option>
              	<option value="RI">Rhode Island</option>
              	<option value="SC">South Carolina</option>
              	<option value="SD">South Dakota</option>
              	<option value="TN">Tennessee</option>
              	<option value="TX">Texas</option>
              	<option value="UT">Utah</option>
              	<option value="VT">Vermont</option>
              	<option value="VA">Virginia</option>
              	<option value="WA">Washington</option>
              	<option value="WV">West Virginia</option>
              	<option value="WI">Wisconsin</option>
              	<option value="WY">Wyoming</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="card">Credit Card (Does not need to be valid)</label>
              <input required className="form-control" id="card" type="number" value={this.state.card} onChange={this.handleCard} />
            </div>


            <div style={{
                textAlign: "center",
                margin: "auto"
              }}>
              <input className="btn btn-primary" type="submit" value="Submit" />

            </div>
          </form>
        </div>
      </div>
    )
  }
}

// <button onClick={this.handleSubmit} className="btn btn-primary">Submit</button>

export default Order;
