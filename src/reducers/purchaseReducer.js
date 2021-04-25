import constants from '../constants/actionTypes'

var initialState = {
    success: false,
    message: null,

}

export default (state = initialState, action) => {

    var updated = Object.assign({}, state);

    switch (action.type) {
        case constants.PURCHASE_RESET:
            updated['message'] = null;
            updated['purchasePosted'] = false;
            return updated;

        case constants.PURCHASE_POSTED:
            updated['message'] = action.message;
            updated['purchasePosted'] = true;
            return updated;



        default:
            return state;
    }
}