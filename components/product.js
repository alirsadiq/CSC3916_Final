import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { fetchProduct } from "../actions/productActions";
import MovieDetail from "./productdetail"
import Productdetail from "./productdetail";

// support routing

function Product(props) {
    console.log(props)
    const [selectedProduct] = useState(props.selectedProduct);
    console.log(props.selectedProduct)
    const params = useParams();
    const title = params.title;
    console.log(title);
    const dispatch = useDispatch();


    return (<Productdetail productTitle={title} />)
}

export default Product;