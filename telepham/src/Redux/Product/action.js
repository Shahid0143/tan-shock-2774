import { GET_SINGLEPRODUCT_LOADING, GET_SINGLEPRODUCT_SUCCESS } from "./actionTypes"

export const getSingleProduct = (dispatch, el) => {
    dispatch({type:GET_SINGLEPRODUCT_LOADING});
    dispatch({type: GET_SINGLEPRODUCT_SUCCESS, payload:el})
    
}