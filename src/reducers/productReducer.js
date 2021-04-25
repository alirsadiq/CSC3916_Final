import constants from '../constants/actionTypes'

let initialState = {
      products: [],
      selectedProduct: null
}

const productReducer = (state = initialState, action) => {
      let updated = Object.assign({}, state);

      switch(action.type) {
            case constants.FETCH_PRODUCTS:
                  updated['products'] = action.products;
                  updated['selectedProduct'] = action.products[0];
                  return updated;
            case constants.SET_PRODUCT:
                  updated['selectedProduct'] = action.selectedProduct;
                  return updated;
            case constants.FETCH_PRODUCT:
                  updated['selectedProduct'] = action.selectedProduct;
                  return updated;
            default:
                  return state;
      }
}

export default productReducer;