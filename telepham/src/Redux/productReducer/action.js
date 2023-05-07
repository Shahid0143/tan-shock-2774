import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./actiontype";
import axios from "axios"

export const getproduct =()=>(dispatch)=>{
    
  // Write logic here
  dispatch({type:GET_PRODUCT_REQUEST})
  axios.get(`http://localhost:8080/products`).then((res)=>{
    // console.log(res.data)
    dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data})
    
  }).catch((err)=>{
    dispatch({type:GET_PRODUCT_FAILURE})
  })
};