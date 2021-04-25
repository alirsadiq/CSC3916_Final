import React, { Component } from "react";
import { fetchProduct} from "../actions/productActions";
import{postReview} from "../actions/reviewActions";
import { connect } from "react-redux";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { BsStarFill } from "react-icons/bs";
import { Image } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import Purchase from './purchase';
import {resetPurchase} from "../actions/buy";
class Productdetail extends Component {
    constructor(props) {
        super(props);
        this.updateDetails = this.updateDetails.bind(this);



            this.state = {
                toggleReceipt: false
            };

    }

    componentDidMount() {
        const { dispatch } = this.props;
        if (this.props.title && this.props.selectedMovie == null)  {
            dispatch(fetchProduct(this.props.title));
        }
    }


    anotherPurchase(){
        this.props.dispatch(resetPurchase());
    }
    updateDetails(event){
        let updateDetails = Object.assign({}, this.state.details);

        updateDetails[event.target.id] = event.target.value;
        this.setState({
            details: updateDetails
        });
    }
test=(event) => {
        console.log(this.state)
}

    render() {

        if (!this.props.selectedMovie) {
            return <div>Loading....</div>;
        }

        const formNotSubmitted = (
            <div

                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: ""


                }}
            >
            <Card>
                <Card.Header>Product Details</Card.Header>
                <Card.Body>
                    <Image className="image" src={this.props.selectedMovie.ImageURL}/>
                </Card.Body>
                <ListGroup>
                    <ListGroupItem><h2>{this.props.selectedMovie.title}</h2></ListGroupItem>
                    <ListGroupItem><h5>{this.props.selectedMovie.Description}</h5>
                        ${this.props.selectedMovie.price}</ListGroupItem>



                </ListGroup>
                <Card.Body>


                    <Purchase/>
                </Card.Body>
            </Card>
            </div>
        );
        const formSubmitted = (
            <div>
                <br/>
                <h1>{this.props.message}</h1><br/>
                <Button className = {"btn-success"} onClick={this.anotherPurchase.bind(this)}>Go Back</Button>
                <br/><br/><br/>

            </div>
        );

        return (
            <div>
                {this.props.purchasePosted ? formSubmitted : formNotSubmitted}
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        selectedMovie: state.product.selectedProduct,
        purchasePosted: state.purchase.purchasePosted,
        success: state.purchase.success,
        message: state.purchase.message

    };
};

export default connect(mapStateToProps)(Productdetail);
