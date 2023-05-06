import React from "react";
import "../components/Product.scss";
import { Link } from "react-router-dom";
const maindata = [
  {
    img: "https://static.vecteezy.com/system/resources/previews/000/297/920/original/vector-set-of-various-medicines.jpg",
    name: "Comprehensive Gold Full Body Checkup",
    desc: "Includes 78 Tests",
    rating: "4.9",
    o_price: 3500,
    price: 2099,
    id: 1,
  },
  {
    img: "https://static.vecteezy.com/system/resources/previews/000/297/920/original/vector-set-of-various-medicines.jpg",
    name: "Comprehensive Gold Full Body Checkup",
    desc: "Includes 78 Tests",
    rating: "4.9",
    o_price: 3500,
    price: 2099,
    id: 2,
  },
  {
    img: "https://static.vecteezy.com/system/resources/previews/000/297/920/original/vector-set-of-various-medicines.jpg",
    name: "Comprehensive Gold Full Body Checkup",
    desc: "Includes 78 Tests",
    rating: "4.9",
    o_price: 3500,
    price: 2099,
    id: 3,
  },
  {
    img: "https://static.vecteezy.com/system/resources/previews/000/297/920/original/vector-set-of-various-medicines.jpg",
    name: "Comprehensive Gold Full Body Checkup",
    desc: "Includes 78 Tests",
    rating: "4.9",
    o_price: 3500,
    price: 2099,
    id: 4,
  },
  {
    img: "https://static.vecteezy.com/system/resources/previews/000/297/920/original/vector-set-of-various-medicines.jpg",
    name: "Comprehensive Gold Full Body Checkup",
    desc: "Includes 78 Tests",
    rating: "4.9",
    o_price: 3500,
    price: 2099,
    id: 5,
  },
  {
    img: "https://static.vecteezy.com/system/resources/previews/000/297/920/original/vector-set-of-various-medicines.jpg",
    name: "Comprehensive Gold Full Body Checkup",
    desc: "Includes 78 Tests",
    rating: "4.9",
    o_price: 3500,
    price: 2099,
    id: 6,
  },
];

function ProductList() {

    const handleAddToCart = (id) => {
     
    } 
  return (
    <div className="products" id="products">
        
      <div className="container">
        {maindata.map((item) => (
         <div className="child">
            <div className="childimage">
              {" "}
              <img src={item.img} alt="" />
            </div>
            <div className="childnamem">
              <h2>{item.name}</h2>
            </div>
            <div className="price">
              <del style={{ color: "grey" }}>₹{item.o_price}</del>
              <p style={{ color: "teal", fontWeight: "bold" }}>₹{item.price}</p>
            </div>

            <button className="cartbutton">ADD TO CART</button>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default ProductList;