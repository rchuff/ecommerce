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
    fetch('/api/login')
    .then(res => res.json())
    .then(res => {
    this.setState({items: res}, () => {
      console.log(this.state.items);
    });
    });
  }

  render(){
    let items = this.state.items.map((item,idx) => (
      <div className={idx===0 ? "carousel-item active" : "carousel-item"}>
        <img
        src={item.img}
        className="d-block"
        alt={item.img}
        style={{
          height: "400px",
          width: "400px",
          margin: "auto"
        }} />
      </div>
    ))

    return(
      <div>
        <div id="carousel" className="carousel slide" data-ride="carousel"
        style={{
          height: "30%",
          width: "30%",
          margin: "auto"
        }}>
          <div className="carousel-inner">
            {items}
          </div>
        </div>
      </div>

    )
  }
}

export default LoginPics;
