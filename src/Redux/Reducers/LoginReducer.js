import Promise from "es6-promise";
//import file from "../file.json";
import Axios from "axios";

import { setLoginSuccess, setLoginPending, setLoginError, setLoginClick } from '../Actions/LoginAction'
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
    visibleModal: true
  },
  action
) {
  switch (action.type) {
    case LOGIN_PENDING:
      return {
        ...state,
        isLoginPending: action.isLoginPending,
        visibleModal: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoginSuccess: action.isLoginSuccess,
        user: action.payload,
        visibleModal: false
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loginError: action.loginError,
        visibleModal: true
      };
    case LOGINBUTTON_CLICK:
      return {
        ...state,
        visibleModal: true
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
      // url: 'https://e-commerce-application.herokuapp.com/users',
      method: "get",
      //headers: {'Content-Type': 'application/json'},
      data: {
        username: username,
        password: password
      }
    })
      .then(userData => {
        console.log("USER DATA", userData);
        dispatch(setLoginPending(false));
        dispatch(setLoginSuccess(true, userData));
      })
      .catch(err => {
        dispatch(setLoginPending(false));
        dispatch(setLoginError(err));
      });
  };
}

// function sendLoginRequest(username, password){
//     //var result={}
//     //console.log("##################", file)
//     // old method of fetching data from json file
//     // fetch(file)
//     // .then((response) => {
//     //     console.log(response)
//     //     return response.json()

//     // })
//     // .then((findresponse) =>{
//     //     result= findresponse
//     //     console.log("loginrequest fxn ", result)
//     //  })
//     //  .catch((err) =>{
//     //         console.log(err)
//     //       });

//     return new Promise ((resolve, reject) => {
//         var flag= false
//         console.log(file.contacts)
//         file.contacts.forEach((user) => {
//             console.log(user.email+"*********************")
//             console.log(username+"&&&&&&&&&&&&&&&&&&")
//             if(username ===user.email){
//                 //try to use indexOf
//                 if(password === user.password){
//                     console.log(user)
//                     return resolve(user)
//                 }
//                 else{
//                     return reject(new Error("Invalid password"))
//                 }
//             }
//             else{// check with flags
//                flag= true
//             }

//         })
//         if(flag){
//             console.log("In Reducer value is "+flag)
//             return reject(new Error("Invalid username"))
//         }

//     })
// }
