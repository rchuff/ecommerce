import React from 'react';

const Item = ({name, img, description, price, addToCart}) => (
  <div class="card col-10 col-sm-10 col-md-5 col-lg-3" style={{
      width: "30vw",
      height: "60vh",
      margin: "5px 0"
    }
    }>
    <div style={{
        height: "30vh",
        width: "30vh",
        margin: "auto",
        display: "flex"
      }}>
      <img src={img} alt={img} style={{
          maxHeight: "100%",
          maxWidth: "100%",
          width: "auto",
          height: "auto",
          margin: "auto"
        }}/>
    </div>
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <h6>${price}</h6>
      <p className="card-text">{description}</p>
      <button onClick={addToCart} className="btn btn-light">Add Item</button>
    </div>
  </div>
)


export default Item;
