import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../pages/auth/redux/authSlice";
import productsReducer from "../pages/product/redux/productSlice";
const rootReducer = combineReducers({
  auth: authReducer,
  product: productsReducer,
  // Add your reducers here
});

export default rootReducer;
