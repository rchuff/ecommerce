import React from 'react';

//Deisplays random items from the store in a carousel slide show.
class LoginPics extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount(){

  //Grab random array of items and display them.
    // fetch('/api/login')
    // .then(res => res.json())
    // .then(res => {
    // this.setState({items: res}, () => {
    //   console.log(this.state.items);
    // });
    // });
  }

  render(){
    const imgStyle={
      height: "100%",
      width: "100%",
      margin: "auto"
    }

    return(
      <div>
        <div id="carousel" className="carousel slide" data-ride="carousel"
        style={{
          height: "15%",
          width: "15%",
          margin: "auto"
        }}>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
              src="images/online-shop.svg"
              className="d-block"
              alt="shop"
              style={imgStyle} />
            </div>
            <div className="carousel-item">
              <img
              src="images/delivery-truck.svg"
              className="d-block"
              alt="truck"
              style={imgStyle} />
            </div>
            <div className="carousel-item">
              <img
              src="images/house.svg"
              className="d-block"
              alt="house"
              style={imgStyle} />
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default LoginPics;
