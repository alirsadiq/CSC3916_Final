import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from "../reducers/authReducer";
import productReducer from "../reducers/productReducer";
import purchaseReducer from "../reducers/purchaseReducer"
const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
    const { logger } = require('redux-logger');

    middlewares.push(logger);
}

const store = createStore(
    combineReducers( {
        auth: authReducer,
        product: productReducer,
        purchase: purchaseReducer
    }),
    applyMiddleware(
        ...middlewares
    )
);

export default store;