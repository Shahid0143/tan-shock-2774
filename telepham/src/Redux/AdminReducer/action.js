import axios from "axios";
import {
  ADD_PRODUCT_FAILURE,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  DELETE_ADMIN_FAILURE,
  DELETE_ADMIN_REQUEST,
  DELETE_ADMIN_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_USER_FAILURE,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  GET_ADMINLIST_FAILURE,
  GET_ADMINLIST_REQUEST,
  GET_ADMINLIST_SUCCESS,
  GET_CARTS_SUCCESS,
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_SUCCESS,
  GET_ORDERS_FAILURE,
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_USERLIST_FAILURE,
  GET_USERLIST_REQUEST,
  GET_USERLIST_SUCCESS,
  UPDATE_PRODUCT_FAILURE,
  UPDATE_PRODUCT_REQUEST,
} from "./actionType";

const getProductDataRequest = () => ({ type: GET_PRODUCTS_REQUEST });
const getProductDataSuccess = (payload) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: payload,
});
const getProductDataFailure = () => ({ type: GET_PRODUCTS_FAILURE });
const addProductRequest = () => ({ type: ADD_PRODUCT_REQUEST });
const addProductSuccess = (payload) => ({ type: ADD_PRODUCT_SUCCESS, payload });
const addProductFailure = () => ({ type: ADD_PRODUCT_FAILURE });
const deleteProductRequest = () => ({ type: DELETE_PRODUCT_REQUEST });
const deleteProductSuccess = (payload) => ({
  type: DELETE_PRODUCT_SUCCESS,
  payload,
});
const deleteProductFailure = () => ({ type: DELETE_PRODUCT_FAILURE });

const updateProductRequest = () => ({ type: UPDATE_PRODUCT_REQUEST });

const updateProductFailure = () => ({ type: UPDATE_PRODUCT_FAILURE });
const getUserListRequest = () => ({ type: GET_USERLIST_REQUEST });
const getUserListSuccess = (payload) => ({
  type: GET_USERLIST_SUCCESS,
  payload,
});
const getUserListFailure = () => ({ type: GET_USERLIST_FAILURE });
const deleteUserRequest = () => ({ type: DELETE_USER_REQUEST });
const deleteUserSuccess = (payload) => ({ type: DELETE_USER_SUCCESS, payload });
const deleteUserFailure = () => ({ type: DELETE_USER_FAILURE });
const getAdminListRequest = () => ({ type: GET_ADMINLIST_REQUEST });
const getAdminListSuccess = (payload) => ({
  type: GET_ADMINLIST_SUCCESS,
  payload,
});
const getAdminListFailure = () => ({ type: GET_ADMINLIST_FAILURE });
const addAdminRequest = () => ({ type: ADD_PRODUCT_REQUEST });
const addAdminSuccess = (payload) => ({ type: ADD_PRODUCT_SUCCESS, payload });
const addAdminFailure = () => ({ type: ADD_PRODUCT_FAILURE });
const deleteAdminRequest = () => ({ type: DELETE_ADMIN_REQUEST });
const deleteAdminSuccess = (payload) => ({
  type: DELETE_ADMIN_SUCCESS,
  payload,
});
const deleteAdminFailure = () => ({ type: DELETE_ADMIN_FAILURE });
const getCategoriesRequest = () => ({ type: GET_CATEGORIES_REQUEST });
const getCategoriesSuccess = (payload) => ({
  type: GET_CATEGORIES_SUCCESS,
  payload,
});
const getOrdersRequest = () => ({ type: GET_ORDERS_REQUEST });
const getOrdersSuccess = (payload) => ({ type: GET_ORDERS_SUCCESS, payload });
const getOrdersFailure = () => ({ type: GET_ORDERS_FAILURE });

const getCartsSuccess = (payload) => ({ type: GET_CARTS_SUCCESS, payload });

export const getProducts = (dispatch) => {
  
  dispatch(getProductDataRequest());
  axios
    .get(`https://tele-f0mr.onrender.com/medicine`)
    
    .then((res) => dispatch(getProductDataSuccess((res.data)))
    )
   
    .catch(() => dispatch(getProductDataFailure()));
   
};

export const addProduct = (product) => async (dispatch) => {
  dispatch(addProductRequest(""));
  try {
    const { data } = await axios.post(
      "https://tele-f0mr.onrender.com/medicine",
      product
    );
    dispatch(addProductSuccess(data));
    return data;
  } catch (error) {
    dispatch(addProductFailure(error));
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  dispatch(deleteProductRequest());
  try {
    axios.delete(`https://tele-f0mr.onrender.com/medicine/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (error) {
    dispatch(deleteProductFailure(error));
  }
};

export const updateProduct = (id, editValue) => async (dispatch) => {
  dispatch(updateProductRequest());
  try {
    axios.patch(`https://tele-f0mr.onrender.com/medicine/${id}`, {
      discountPrice: +editValue,
    });
  } catch (error) {
    dispatch(updateProductFailure(error));
  }
};

export const getUsersList = async (dispatch) => {
  dispatch(getUserListRequest());
  try {
    const { data } = await axios.get(
      "https://tele-f0mr.onrender.com/admin"
    );
    dispatch(getUserListSuccess(data));
  } catch (error) {
    dispatch(getUserListFailure(error));
  }
};

export const deleteUser = (id) => async (dispatch) => {
  dispatch(deleteUserRequest());
  try {
    let res = await axios.delete(
      `https://tele-f0mr.onrender.com/admin/${id}`
    );
    console.log(res);
    dispatch(deleteUserSuccess(id));
    return res;
  } catch (error) {
    dispatch(deleteUserFailure("error", error));
  }
};

export const getAdminList = async (dispatch) => {
  dispatch(getAdminListRequest());
  try {
    const { data } = await axios.get("https://tele-f0mr.onrender.com/admin");
  
    dispatch(getAdminListSuccess(data));
  } catch (error) {
    dispatch(getAdminListFailure(error));
  }
};

export const addAdmin = (admin) => async (dispatch) => {
  dispatch(addAdminRequest());
  try {
    let { data } = await axios.post("https://tele-f0mr.onrender.com/admin", admin);
    dispatch(addAdminSuccess(data));
    return data;
  } catch (error) {
    dispatch(addAdminFailure(error));
  }
};

export const deleteAdmin = (id) => async (dispatch) => {
  dispatch(deleteAdminRequest());
  try {
    let { data } = await axios.delete(`https://tele-f0mr.onrender.com/admin/${id}`);
    dispatch(deleteAdminSuccess(id));
    return data;
  } catch (error) {
    dispatch(deleteAdminFailure(error));
  }
};

const getAllCategories = async () => {
  let { data } = await axios.get(
    "https://tele-f0mr.onrender.com/medicine"
  );
  const categories = [];
  data.forEach((product) => {
    if (!categories.includes(product.category))
      categories.push(product.category);
  });
  return categories;
};

export const getCategories = async (dispatch) => {
  dispatch(getCategoriesRequest());
  const allCategories = await getAllCategories();
  const { data: orders } = await axios.get(
    "https://tele-f0mr.onrender.com/medicine"
  );
  let obj = {};
  orders.forEach((order) => {
    if (!obj[order.category]) obj[order.category] = 1;
    else obj[order.category]++;
  });
  console.log(allCategories, obj);
  dispatch(getCategoriesSuccess([allCategories, obj]));
};

export const getOrders = async (dispatch) => {
  dispatch(getOrdersRequest());
  try {
    const { data } = await axios.get(
      "https://tele-f0mr.onrender.com/medicine"
    );
    dispatch(getOrdersSuccess(data));
  } catch (error) {
    dispatch(getOrdersFailure(error));
  }
};

export const pendingOrder = (orderId) => async (dispatch) => {
  const { data: orders } = await axios.get(
    `https://tele-f0mr.onrender.com/orders`
  );
  orders.forEach((order) => {
    if (order.id === orderId) {
      axios
        .patch(`https://tele-f0mr.onrender.com/orders/${orderId}`, {
          status: "Delayed",
        })
        .then(() => dispatch(getOrders));
    }
  });
};

export const passOrder = (orderId) => async (dispatch) => {
  const { data: orders } = await axios.get(
    `https://tele-f0mr.onrender.com/orders`
  );
  orders.forEach((order) => {
    if (order.id === orderId) {
      axios
        .patch(`https://tele-f0mr.onrender.com/orders/${orderId}`, {
          status: "Passed",
        })
        .then(() => dispatch(getOrders));
      
    }
  });
};

export const rejectOrder = (orderId) => async (dispatch) => {
  const { data: orders } = await axios.get(
    `https://tele-f0mr.onrender.com/orders`
  );
  orders.forEach((order) => {
    if (order.id === orderId) {
      axios
        .patch(`https://tele-f0mr.onrender.com/orders/${orderId}`, {
          status: "Rejected",
        })
        .then(() => dispatch(getOrders));
    }
  });
};
