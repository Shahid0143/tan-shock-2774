import React, { useEffect } from "react";
import "../components/Product.scss";
import { getproduct } from "../Redux/productReducer/action";
import { useDispatch, useSelector } from "react-redux";
const maindata = [
  {
    img: "https://static.vecteezy.com/system/resources/previews/000/297/920/original/vector-set-of-various-medicines.jpg",
    name: "Comprehensive Gold Full Body Checkup",
    desc: "Includes 78 Tests",
    rating: "4.9",
    o_price: 3500,
    price: 2099,
  },
  {
    img: "https://static.vecteezy.com/system/resources/previews/000/297/920/original/vector-set-of-various-medicines.jpg",
    name: "Comprehensive Gold Full Body Checkup",
    desc: "Includes 78 Tests",
    rating: "4.9",
    o_price: 3500,
    price: 2099,
  },
  {
    img: "https://static.vecteezy.com/system/resources/previews/000/297/920/original/vector-set-of-various-medicines.jpg",
    name: "Comprehensive Gold Full Body Checkup",
    desc: "Includes 78 Tests",
    rating: "4.9",
    o_price: 3500,
    price: 2099,
  },
  {
    img: "https://static.vecteezy.com/system/resources/previews/000/297/920/original/vector-set-of-various-medicines.jpg",
    name: "Comprehensive Gold Full Body Checkup",
    desc: "Includes 78 Tests",
    rating: "4.9",
    o_price: 3500,
    price: 2099,
  },
  {
    img: "https://static.vecteezy.com/system/resources/previews/000/297/920/original/vector-set-of-various-medicines.jpg",
    name: "Comprehensive Gold Full Body Checkup",
    desc: "Includes 78 Tests",
    rating: "4.9",
    o_price: 3500,
    price: 2099,
  },
  {
    img: "https://static.vecteezy.com/system/resources/previews/000/297/920/original/vector-set-of-various-medicines.jpg",
    name: "Comprehensive Gold Full Body Checkup",
    desc: "Includes 78 Tests",
    rating: "4.9",
    o_price: 3500,
    price: 2099,
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const product = useSelector((store) => store.ProductReducer.products);
  // console.log(product);

  useEffect(() => {
    dispatch(getproduct());
  }, []);

  return (
    <div className="products" id="products">
      <div className="container">
        {product.map((item) => (
          <div className="child" key={item.id}>
            <div className="childimage">
              {" "}
              <img src={item.img} alt="das" />
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
