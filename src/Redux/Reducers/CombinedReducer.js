import { combineReducers } from 'redux'
import signupFn from './SignupReducer'
import loginFn from './LoginReducer'

export default combineReducers({
    signupFn,
    loginFn
  });
  
