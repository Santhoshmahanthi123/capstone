// import Promise from "es6-promise";
//import file from "../file.json";
import Axios from "axios";
import jwt_decode from 'jwt-decode'
import { setLoginSuccess, setLoginPending, setLoginError } from '../Actions/LoginAction'
const LOGIN_PENDING = "LOGIN_PENDING";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_ERROR = "LOGIN_ERROR";
const LOGINBUTTON_CLICK = "LOGINBUTTON_CLICK";

// reducer function
export default function loginReducer(
  state = {
    isLoginPending: false,
    isLoginSuccess: false,
    loginError: null,
  //  visibleModal: true
  },
  action
) {
  switch (action.type) {
    case LOGIN_PENDING:
      return {
        ...state,
        isLoginPending: action.isLoginPending,
       // visibleModal: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoginSuccess: action.isLoginSuccess,
        user: action.payload,
     //   visibleModal: false
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loginError: action.loginError,
       // visibleModal: true
      };
    case LOGINBUTTON_CLICK:
      return {
        ...state,
        
      };
    default:
      return state;
  }
}

export function login(username, password) {
  return dispatch => {
    dispatch(setLoginPending(true));
    dispatch(setLoginSuccess(false, null));
    dispatch(setLoginError(null));
    // var bodyFormData = new FormData();
    // bodyFormData.set('userName', username);
    //sendLoginRequest(username,password)
    //checking whether the user exists or not in DB
    // Axios.get('https://e-commerce-application.herokuapp.com/login',{username, password} )
    //login should be a post request and not a get request
    Axios({
      url: 'https://capstone-inneed.herokuapp.com/user/login',
      method: "post",
      //headers: {'Content-Type': 'application/json'},
      data: {
        name: username,
        password: password
      }
    })
      .then(userData => {
        console.log("USER DATA", userData.data.token);
        var token= userData.data.token
        var decoded = jwt_decode(token);
        console.log("DECODEDDDDDDDDDDDDDDDD",decoded);
        dispatch(setLoginPending(false));
        dispatch(setLoginSuccess(true, decoded));
      })
      .catch(err => {
        dispatch(setLoginPending(false));
        dispatch(setLoginError(err));
      });
  };
}

