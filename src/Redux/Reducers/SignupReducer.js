// import Promise from "es6-promise";
//import file from '../file.json';
import Axios from "axios";
import {
  setSignupSuccess,
  setSignupPending,
  SignupError
} from "../Actions/SignupAction";
const BUTTON_CANCEL = "BUTTON_CANCEL";
// const LOGINBUTTON_CLICK = "LOGINBUTTON_CLICK";
const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
const SIGNUP_PENDING = "SIGNUP_PENDING";
const SIGNUP_ERROR = "SIGNUP_ERROR";

//signup reducer
export function signupReducer(
  state = {
    isSignupPending: false,
    isSignupSuccess: false,
    SignupError: null
    // visibleModal: true
  },
  action
) {
  switch (action.type) {
    case SIGNUP_PENDING:
      return {
        ...state,
        isSignupPending: action.isSignupPending,
        // visibleModal: true
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isSignupSuccess: action.isSignupSuccess,
        user: action.payload,
        // visibleModal: false
      };
    case SIGNUP_ERROR:
      return {
        ...state,
        SignupError: action.SignupError,
        // SignupError: true
      };
    case BUTTON_CANCEL:
      return {
        ...state
        // visibleModal: false
      };

    default:
      return state;
  }
}

export function signupFn(name, email, password, mobile, address, pincode) {
  return dispatch => {
    dispatch(setSignupPending(true));
    dispatch(setSignupSuccess(false, null));
    dispatch(SignupError(null));

    //sendSignupRequest(username, password)
    //error coming because the fxn call is not returning a promise. Better to use axios here so that a promise is returned
    // .then(userData =>{
    Axios({
      url: 'https://inneed-back-end.herokuapp.com/user/signup',
      method: "post",
      //headers: {'Content-Type': 'application/json'},
      data: {
        name: name,
        email: email,
        password: password,
        mobile: mobile,
        address: address,
        pincode: pincode
      }
    })
      .then(userData => {
        console.log("USER DATA", userData);
        dispatch(setSignupPending(false));
        dispatch(setSignupSuccess(true, userData));
      })
      // if(sendSignupRequest(username, password))
      //     {
      //         dispatch(setSignupPending(false));
      //         // dispatch(setSignupSuccess(true, userData)); use this when using axios
      //         dispatch(setSignupSuccess(true, username));

      //     }
      // })
      .catch(err => {
        dispatch(setSignupPending(false));
        dispatch(setSignupSuccess(err));
      });
  };
}

/*function sendSignupRequest(username, password){
   return true
   // create a post request
    axios.post(`DB URL`, { user })
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
    .catch((error)=>{
      console.log(error);
        });
    console.log("Data stored successfully: ", username,": ", password  )
    return true
}
*/

export default signupFn;
