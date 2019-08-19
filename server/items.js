const db = require('./models/index.js');

let items = [
  {
    category: "Shirts",
    name: "Blue Shirt",
    price: 10.00,
    img: "images/blue_shirt.jpg",
    description: "Standard athletic blue T-shirt for working out or lounging."
  },
  {
    category: "Pants",
    name: "Adidas Pants",
    price: 20.00,
    img: "images/adidas_pants.jpg",
    description: "Athletic pants by Adidas."
  },
  {
    category: "Shoes",
    name: "Adidas Shoe",
    price: 100.00,
    img:"images/adidas_shoe.jpg",
    description: "White Adidas ultra boost shoe."
  },
  {
    category: "Hats",
    name: "Black Hat",
    price: 15.00,
    img: "images/black_hat.jpg",
    description: "Simple black, sweat-wicking hat."
  },
  {
    category: "Socks",
    name: "Black Socks",
    price: 5.00,
    img: "images/black_socks.png",
    description: "Simple black socks for every occassion."
  },
  {
    category: "Pants",
    name: "Brown Pants",
    price: 30.00,
    img: "images/brown_pants.jpg",
    description: "Brown pants with deep pockets for your storage needs."
  },
  {
    category: "Special",
    name: "Bugatti Veyron",
    price: 2300000.00,
    img:"images/bugatti.jpg",
    description: "Black and blue Bugatti Veyron. You only live once right?"
  },
  {
    category: "Socks",
    name: "Crazy Socks",
    price: 12.00,
    img: "images/crazy_socks.jpg",
    description: "Crazy socks for the fun occassion."
  },
  {
    category: "Hats",
    name: "Fedora",
    price: 45.00,
    img: "images/fedora.jpg",
    description: "Brown fedora for those of you that can wear a fedora."
  },
  {
    category: "Hats",
    name: "Bucket Hat",
    price: 15.00,
    img: "images/bucket_hat.jpg",
    description: "White bucket hat for fishing and fishing related activities."
  },
  {
    category: "Shoes",
    name: "Gold Shoes",
    price: 120.00,
    img: "images/gold_shoe.jpeg",
    description: "Gold shoes for the special occassions in your life."
  },
  {
    category: "Pants",
    name: "Jeans",
    price: 50.00,
    img: "images/jeans.jpg",
    description: "Standard blue jeans with elastic waist band."
  },
  {
    category: "Shoes",
    name: "Nike Shoes",
    price: 150.00,
    img: "images/nike_shoe.jpeg",
    description: "Nike sneakers with velcro strap and cushioned insole."
  },
  {
    category: "Shirts",
    name: "Red Shirt",
    price: 10.00,
    img: "images/red_shirt.jpeg",
    description: "Red cotton shirt."
  },
  {
    category: "Shirts",
    name: "White Shirt",
    price: 10.00,
    img: "images/white_shirt.jpg",
    description: "White cotton shirt.",
  },
  {
    category: "Socks",
    name: "White Socks",
    price: 5.00,
    img: "images/white_socks.jpg",
    description: "Knee-high white socks."
  }
];

(function(){
  items.map((item) => {
    let newItem = new db.Item({
      category: item.category,
      name: item.name,
      price: item.price,
      img: item.img,
      description: item.description
    });

    newItem.save((err, newItem) => {
      if (err) console.log(err);
      else console.log(`Saved ${newItem.name}`)
    });
  });
})();
