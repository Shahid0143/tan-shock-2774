import { ADDTOCART, PAYMENT_SUCCESS } from "./actionType";

export const addToCart = (dispatch, product) => {
    dispatch({type:ADDTOCART, payload:product})
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
