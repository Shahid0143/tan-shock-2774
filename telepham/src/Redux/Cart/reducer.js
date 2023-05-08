import { ADDTOCART,  CARTPRICE,  CLEAR_CART, PAYMENT_SUCCESS, REMOVEFROMCART } from "./actionType";

const initState = {
    cart: [],
    subTotal: 0,
    discountTotal: 0,
  };

  export const reducer = (state = initState, { type, payload }) => {
    switch (type) {
   
      case ADDTOCART: {
        return {
          ...state,
          cart: [...state.cart, payload],
        };
      }
      case REMOVEFROMCART: {
        return {
          ...state,
          cart: [...payload],
        };
      }
      case CARTPRICE: {
        return {
          ...state,
          subtotal: state.subTotal + payload.total,
          discountTotal: payload.discount,
        };
      }
      case PAYMENT_SUCCESS: {
        return{
          ...state,
          paymentDetails: payload,
          paymentSuccess: true,
        };
      }
      case CLEAR_CART:{
        return {
          ...state,
          cart: [],
        };
      }
      default: {
        return state;
      }
    }
  };