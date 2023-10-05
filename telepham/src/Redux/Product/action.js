import { GET_SINGLEPRODUCT_ERROR, GET_SINGLEPRODUCT_LOADING, GET_SINGLEPRODUCT_SUCCESS } from "./actionTypes"
import axios from "axios"

export const getSingleProduct = ({ id, product }) => (dispatch) => {

    dispatch({ type: GET_SINGLEPRODUCT_LOADING })
    axios.get(` https://tele-f0mr.onrender.com/products/${id}`, product)
        .then((res) => {
            console.log(res.data)
            dispatch({ type: GET_SINGLEPRODUCT_SUCCESS, payload: res.data });

        }).catch((err) => {

            dispatch({ type: GET_SINGLEPRODUCT_ERROR })
        })
}


