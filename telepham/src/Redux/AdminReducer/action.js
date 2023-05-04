import { GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "./actionType";

const getProductDataRequest = () => ({ type: GET_PRODUCTS_REQUEST });
const getProductDataSuccess = (payload) => 
({ type: GET_PRODUCTS_SUCCESS, payload : payload });
const getProductDataFailure = () => ({ type: GET_PRODUCTS_FAILURE });


export const getProducts =  (dispatch) => {
    dispatch(getProductDataRequest());
    axios.get(`https://shy-puce-binturong-ring.cyclic.app/medicine`)
      .then((res) =>dispatch(getProductDataSuccess(res.data)))
      .catch(()=>dispatch(getProductDataFailure()));
  };

