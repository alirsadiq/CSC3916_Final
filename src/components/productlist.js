import React, { Component } from 'react';
import { fetchProducts } from "../actions/productActions";
import { setProduct } from "../actions/productActions";
import {connect} from 'react-redux';
import {Image, Nav} from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import { BsStarFill} from 'react-icons/bs'
import {LinkContainer} from 'react-router-bootstrap';

class Productlist extends Component {
    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchProducts());
    }

    handleSelect(selectedIndex, e) {
        const {dispatch} = this.props;
        dispatch(setProduct(this.props.products[selectedIndex]));
    }

    handleClick = (product) => {
        const {dispatch} = this.props;
        dispatch(setProduct(product));
    }

    render() {
        const ProductListCarousel = ({productList}) => {
            if (!productList) {
                return <div>Loading....</div>
            }

            return (
                <Carousel onSelect={this.handleSelect}>
                    {productList.map((product) =>
                        <Carousel.Item key={product._id}>
                            <div>
                                <LinkContainer to={'/item/'+product.title} onClick={()=>this.handleClick(product)}>
                                    <Nav.Link><Image className="image" src={product.ImageURL} thumbnail /></Nav.Link>
                                </LinkContainer>
                            </div>
                            <Carousel.Caption>
                                <h3>{product.title}</h3>
                               {product.averageRating} &nbsp;&nbsp; {product.yearReleased}
                                <h4>${product.price}</h4>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )}

                </Carousel>
            )
        }

        return (
            <ProductListCarousel productList={this.props.products} />
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.product.products,


    }
}

export default connect(mapStateToProps)(Productlist);

