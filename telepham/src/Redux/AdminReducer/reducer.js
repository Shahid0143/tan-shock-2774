import { GET_PRODUCTS_FAILURE,
     GET_PRODUCTS_REQUEST,
      GET_PRODUCTS_SUCCESS } from "./actionType";

const initialstate = {
  isLoading: false,
  isError: false,
  medicine: [],
};
export const reducer=(state=initialstate,{type,payload})=>{
    switch(type){
        case GET_PRODUCTS_REQUEST:
            return { ...state, isLoading: true };
          case GET_PRODUCTS_SUCCESS:
            return { ...state, isLoading: false, medicine: payload };
          case GET_PRODUCTS_FAILURE:
            return { ...state, isLoading: false, isError: true };
          default:
            return state   
    }
}