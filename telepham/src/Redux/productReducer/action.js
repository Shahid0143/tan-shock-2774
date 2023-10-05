import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./actiontype";
import axios from "axios"

export const getproduct =(obj,page,setcount)=>(dispatch)=>{
    
  // Write logic here
  dispatch({type:GET_PRODUCT_REQUEST})
     return axios.get(`https://tele-f0mr.onrender.com/products?_limit=6&_page=${page}`,obj).then((res)=>{
    //  console.log(res)
     setcount(res)
    dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data})
    
  }).catch((err)=>{
    dispatch({type:GET_PRODUCT_FAILURE})
  })
};