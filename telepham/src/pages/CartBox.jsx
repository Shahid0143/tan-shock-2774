import { Select } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import cartStyle from "./Cartstyle.module.css";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { cartPrice, deleteFromCart } from "../Redux/Cart/action";

const CartBox = ({elem}) => {
  function generateRandomDate() {
    return new Date(+new Date() + Math.floor(Math.random() * 10000000000));
  }
  const deliveryDate = new generateRandomDate().toLocaleDateString("en-IN");

  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const {cart} = useSelector((store) => store.cartReducer); 

  useEffect(() => {
    let cartTotal = qty *elem.o_price;
    let cartDiscount = qty * elem.price;
    cartPrice(dispatch, cartTotal, cartDiscount);
  }, [qty]);

  const handleDelete = () => {
    deleteFromCart(cart, dispatch,elem.id);
  };
  const handleChange = (e) => {
    setQty(e.target.value);
    let cartTotal = qty *elem.o_price;
    let cartDiscount = qty *elem.price;
    cartPrice(dispatch, cartTotal, cartDiscount);  
  };

  return (
    <div>
    <div className={cartStyle.leftBottom}>
      <div>
        <img src={elem.img} alt="" />
      </div>
      <div>
        <h1>
          <b>{elem.name}</b>
        </h1>
        <p className={cartStyle.leftBottomPrice}>Rs.{elem.price}</p>
        <p>Delivery by {deliveryDate}</p>
      </div>
      <div>
        <div className={cartStyle.delete}>
          <button>
            <RiDeleteBinLine size="25px" color="black" onClick={handleDelete} />
          </button>
        </div>
        <div className={cartStyle.leftSelect}>
          <Select onChange={handleChange} >
            <option value="1">Qty 1</option>
            <option value="2">Qty 2</option>
            <option value="3">Qty 3</option>
            <option value="4">Qty 4</option>
            <option value="5">Qty 5</option>
            <option value="6">Qty 6</option>
            <option value="7">Qty 7</option>
            <option value="8">Qty 8</option>
            <option value="9">Qty 9</option>
            <option value="10">Qty 10</option>
          </Select>
        </div>
      </div>
    </div>
  </div>
  )
};

export default CartBox;
