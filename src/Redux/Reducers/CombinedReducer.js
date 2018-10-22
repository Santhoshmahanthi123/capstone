import { combineReducers } from 'redux'
import signupFn from './SignupReducer'
import loginFn from './LoginReducer'
import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";

export default combineReducers({
    signupFn,
    loginFn,
    productsReducer,
    cartReducer
  });
  
