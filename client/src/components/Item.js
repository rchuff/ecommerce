import React from 'react';

const Item = ({name, img, description, price, addToCart}) => (
  <div className="item" style = {{
    border: "5px solid",
    borderRadius: "5px"
  }}>
    <img src={img} alt={img}/>
    <h3>{name}</h3>
    <h4>${price}</h4>
    <p>{description}</p>
    <button onClick={addToCart}>Add Item</button>
  </div>

)

export default Item;
