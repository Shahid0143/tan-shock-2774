import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, GET_SINGLEPRODUCT_ERROR, GET_SINGLEPRODUCT_LOADING, GET_SINGLEPRODUCT_SUCCESS } from "./actionTypes"

const initState = {
    isLoading: true,
    products: [],
    singleProduct: "",
    isError: false,
}

export const reducer = (state = initState, {type,payload}) => {
    switch(type){
  
        case GET_SINGLEPRODUCT_LOADING: {
             return{
                ...state,
                isLoading: true,
                isError: false,
              };
        }

        case GET_SINGLEPRODUCT_SUCCESS: {
            return {
              ...state,
              isLoading: false,
              singleProduct: payload,
              isError: false,
            };
          }

          case GET_SINGLEPRODUCT_ERROR: {
            return {
              ...state,
              isLoading: false,
              isError: true,
            };
          }
          
          default:
            return state;
    }
}