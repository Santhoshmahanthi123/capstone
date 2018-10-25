const LOGIN_PENDING = "LOGIN_PENDING";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_ERROR = "LOGIN_ERROR";
const LOGINBUTTON_CLICK = "LOGINBUTTON_CLICK";

//actions
function setLoginPending(isLoginPending) {
  return {
    type: LOGIN_PENDING,
    isLoginPending
  };
}

function setLoginSuccess(isLoginSuccess, userData) {
  console.log("I AM DISPATCHING!!!!!!!!!!!")
  return {
    type: LOGIN_SUCCESS,
    isLoginSuccess,
    payload: userData
  };
}

function setLoginError(loginError) {
  return {
    type: LOGIN_ERROR,
    loginError
  };
}

function setLoginClick() {
  return {
    type: LOGINBUTTON_CLICK
  };
}

// export function loginClick(){
//     return dispatch => {
//         dispatch(setLoginClick());
//     }
// }

export { setLoginSuccess, setLoginPending, setLoginError, setLoginClick };
