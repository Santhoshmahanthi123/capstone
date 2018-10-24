import { combineReducers } from 'redux'
import signupFn from './SignupReducer'
import loginFn from './LoginReducer'
import productReducer from "./ProductReducer";
// import cartReducer from "./cartReducer";

export default combineReducers({
    signupFn,
    loginFn,
    productReducer
    // productsReducer,
    // cartReducer
  });
  
