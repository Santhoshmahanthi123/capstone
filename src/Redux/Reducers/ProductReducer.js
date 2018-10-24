// import Promise from "es6-promise";
//import file from "../file.json";
import Axios from "axios";

import { setProductShow, setProductPending, setProductError  } from '../Actions/ProductAction'
const PRODUCT_SHOW = "PRODUCT_SHOW";
const PRODUCT_PENDING = "PRODUCT_PENDING";
const PRODUCT_ERROR = "PRODUCT_ERROR";

// reducer function
export default function productReducer(
  state = {
    isProductPending: false,
    productShow: false,
    productError: null
  },
  action
) {
  switch (action.type) {
    case PRODUCT_SHOW:
      return {
        ...state,
        productShow: action.productShow,
        product: action.payload,
      };
    case PRODUCT_PENDING:
      return {
        ...state,
        isProductPending: action.isProductPending,
        
      };
      case PRODUCT_ERROR:
      return {
        ...state,
        productError: action.productError,
      };
    default:
      return state;
  }
}

export function displayProduct() {
  return dispatch => {
    dispatch(setProductShow(false, null));
    dispatch(setProductPending(true));
    dispatch(setProductError(null));
    Axios
      .get("https://capstone-inneed.herokuapp.com/foods")
      .then((response) => {
        console.log(response,"$$$$$$$$@@@@");
        console.log(response.data.foods,"!!!!!!!!!!!!!!!!");
        dispatch(setProductPending(false));
        dispatch(setProductShow(true, response.data.foods));
        // this.setState({
        //   data: response.data.foods
        // })
      })
      .catch((error)=> {
        console.log(error);
        dispatch(setProductPending(false));
        dispatch(setProductError(error));
      })
  };
}

