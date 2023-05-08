import { ADDTOCART, CARTPRICE, CLEAR_CART, PAYMENT_SUCCESS, REMOVEFROMCART } from "./actionType";

export const addToCart=(dispatch,el)=> {
  dispatch({type:ADDTOCART, payload:el})
  
}

export const deleteFromCart = (cart, dispatch, id) => {
  const newCart = cart.filter((el, ind) => {
    return el.id !== id;
  });
  dispatch({type: REMOVEFROMCART, payload: newCart})
}

export const cartPrice = (dispatch, total, discount) => {
  dispatch({
    type: CARTPRICE,
    payload: {
      total,
      discount
    },
  });
};


export const makePayment = (paymentDetails) => (dispatch) => {
   const paymentResponse = { success: true };

  if (paymentResponse.success) {
    dispatch({
      type: PAYMENT_SUCCESS,
      payload: paymentDetails
    });
  }
}

export const clearCart = (dispatch) => {
 dispatch({type: CLEAR_CART})
};