import actionTypes from '../constants/actionTypes';
import runtimeEnv from '@mars/heroku-js-runtime-env'


function productsFetched(products) {
    return {
        type: actionTypes.FETCH_PRODUCTS,
        products: products
    }
}

function productFetched(product) {
    return {
        type: actionTypes.FETCH_PRODUCT,
        selectedProduct: product
    }
}

function productSet(product) {
    return {
        type: actionTypes.SET_PRODUCT,
        selectedProduct: product
    }
}

export function setProduct(product) {
    return dispatch => {
        dispatch(productSet(product));
    }
}

export function fetchProduct(title) {
    const env = runtimeEnv();
    return dispatch => {
        return fetch(`${env.REACT_APP_API_URL}movie/${title}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            mode: 'cors'
        }).then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json()
        }).then((res) => {
            dispatch(productFetched(res));
        }).catch((e) => console.log(e));
    }
}

export function fetchProducts() {
    const env = runtimeEnv();
    return dispatch => {
        return fetch(`${env.REACT_APP_API_URL}product`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            mode: 'cors'
        }).then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json()
        }).then((res) => {
            dispatch(productsFetched(res));
        }).catch((e) => console.log(e));
    }
}