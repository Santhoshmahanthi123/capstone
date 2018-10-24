const PRODUCT_SHOW = "PRODUCT_SHOW";
const PRODUCT_PENDING = "PRODUCT_PENDING";
const PRODUCT_ERROR = "PRODUCT_ERROR";

//actions
function setProductPending(isProductPending) {
  return {
    type: PRODUCT_PENDING,
    isProductPending
  };
}

function setProductShow(productShow, prodData) {
  return {
    type: PRODUCT_SHOW,
    productShow,
    payload: prodData
  };
}
function setProductError(productError) {
    return {
      type: PRODUCT_ERROR,
      productError,
    };
  }


export { setProductShow, setProductPending, setProductError };
