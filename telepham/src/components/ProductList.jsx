import React, { useEffect } from "react";
import "../style/Product.scss";
import { getproduct } from "../Redux/productReducer/action";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { addToCart } from "../Redux/Cart/action";
function ProductList() {
  const dispatch = useDispatch();
  let {cart} = useSelector((store)=>store.cartReducer)
  const product = useSelector((store) => store.ProductReducer.products);
  // console.log(product);
  const Location = useLocation();
  const [seaechParams] = useSearchParams();
  let obj = {
    params: {
      _sort: seaechParams.get("order") && "price",
      _order: seaechParams.get("order"),
    },
  };
  useEffect(() => {
    dispatch(getproduct(obj));
  }, [Location.search]);

  const handleAdd = (id) =>{
    
    const existingItem = cart.find(item => item.id === id);
  
    if (existingItem) {
      alert("Product already present in the cart");
    } else {
      const itemToAdd = product.find((item) => item.id === id);
      addToCart(dispatch, itemToAdd);
      alert("Product added to the cart");
    }
    }
    
  return (
    <div className="products" id="products">
      <div className="container">
        {product.map((item) => (
          <div className="child" key={item.id}>
          <Link to={`/singleProduct/${item.id}`}>
            <div className="childimage">
              {" "}
              <img src={item.img} alt="das" />
            </div>
            </Link>
            <div className="childnamem">
              <h2>{item.name}</h2>
            </div>
            <div className="price">
              <del style={{ color: "grey" }}>₹{item.o_price}</del>
              <p style={{ color: "teal", fontWeight: "bold" }}>₹{item.price}</p>
            </div>

            <button className="cartbutton" onClick={()=>handleAdd(item.id)}  >ADD TO CART</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
