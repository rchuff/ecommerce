import React from 'react';

//Order entry form for delivery/email.
class Order extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      address: "",
      city: "",
      state: "",
      email: "",
      card:""
    }
    this.handleEmail = this.handleEmail.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handleCity=this.handleCity.bind(this);
    this.handleState=this.handleState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCard= this.handleCard.bind(this);
  }
  handleEmail(e){
    this.setState({email: e.target.value})
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
    this.props.updateStatus(
      this.state.address,
      this.state.city,
      this.state.state,
      this.state.email,
      this.state.card);
    alert('Submitted!');
  }

  render(){

    return (
      <div>
        <div className = "order">
          <h1>Checkout</h1>
          <h3>Order Details</h3>
          <div className="order-list">
            {this.props.orderedItems}
          </div>
          <h4>Total: ${this.props.total}.00</h4>
        </div>
        <div>
          <h3>Order Information</h3>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="email">Email</label>
            <input type="text" value={this.state.email} onChange = {this.handleEmail} />

            <label htmlFor="address">Address</label>
            <input type="text" value={this.state.address} onChange={this.handleAddress} />

            <label htmlFor="city">City</label>
            <input type="text" value={this.state.city} onChange={this.handleCity} />

            <label htmlFor="state">State</label>
            <select value={this.state.state} onChange={this.handleState} >
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

            <label htmlFor="card">Credit Card</label>
            <input type="number" value={this.state.card} onChange={this.handleCard} />

            <button onClick={this.handleSubmit}>Submit</button>
          </form>

        </div>
      </div>
    )
  }
}

export default Order;
