import React, { Component } from 'react';
import { submitPurchase } from '../actions/buy';
import {Navbar, NavItem, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {connect} from "react-redux";
import { withRouter } from "react-router-dom";
import {Row, Col, Form, FormGroup, FormControl, FormLabel, Button } from 'react-bootstrap';

class Purchase extends Component
{
    constructor()
    {
        super();

        this.updateDetails = this.updateDetails.bind(this);
        this.purchase = this.purchase.bind(this);
        this.state = {
            details:{
                nameOnCard:'',
                cardNumber:'',
                cvv:'',
                expirationDate:'',
                formValidation:false
            }
        };
    }

    updateDetails(event)
    {
        let name = /(\w.+\s).+/i;
        let cardNum = /^\d{16}$/;
        let cvv = /^\d{3}$/;
        let expDate = /^(0[1-9]|10|11|12)\/[0-9]{2}$/;
        let updateDetails = Object.assign({}, this.state.details);
        updateDetails[event.target.id] = event.target.value;

        let invalid = true;
        invalid = invalid && name.test(updateDetails["nameOnCard"]);
        invalid = invalid && cardNum.test(updateDetails["cardNumber"]);
        invalid = invalid && cvv.test(updateDetails["cvv"]);
        invalid = invalid && expDate.test(updateDetails["expirationDate"]);
        updateDetails["formValidation"] = invalid;

        this.setState({
            details:updateDetails
        });
    }

    purchase()
    {
        const {dispatch} = this.props;
        dispatch(submitPurchase(this.state.details));

    }

    render()
    {
        return (

            <Form horizontal>
                <br/>
                <FormGroup controlId="nameOnCard">
                    <Col componentClass={FormLabel} sm={3}>
                        Card Holder
                    </Col>
                    <Col sm={7}>
                        <FormControl type="text" placeholder="Cardholder Name(First and last)" className = {this.state.details.nameOnCard === '' ? "input-err" : ""} onChange={this.updateDetails} value={this.state.details.nameOnCard}   />
                    </Col>
                </FormGroup>
                <FormGroup controlId="cardNumber">
                    <Col componentClass={FormLabel}sm={3} >
                        Card Number
                    </Col>
                    <Col sm={7}>
                        <FormControl type="text" placeholder="16 digit card number ex(5555555555554444)"  className = {this.state.details.cardNumber === '' ? "input-err" : ""} onChange={this.updateDetails} value={this.state.details.cardNumber} />
                    </Col>
                </FormGroup>
                <FormGroup controlId="cvv">
                    <Col componentClass={FormLabel} sm={2}>
                        CCV
                    </Col>
                    <Col sm={5}>
                        <FormControl type="text" placeholder="3 digit cvv" className = {this.state.details.cvv === '' ? "input-err" : ""} onChange={this.updateDetails} value={this.state.details.cvv}  />
                    </Col>
                </FormGroup>
                <FormGroup controlId="expirationDate">
                    <Col componentClass={FormLabel} sm={3}>
                        Expiration Date
                    </Col>
                    <Col sm={5}>
                        <FormControl type = "text" placeholder="Expiration date ex(04/21)" className = {this.state.details.expirationDate === '' ? "input-err" : ""} onChange={this.updateDetails} value={this.state.details.expirationDate}  />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col >
                        <Button data-toggle="tooltip" title= {this.state.details.formValidation ? "VALID" : "Please Enter Valid Information"} className = {this.state.details.formValidation ? "btn-success" : "btn-danger"} onClick={this.purchase} disabled = {!this.state.details.formValidation}>Purchase</Button>
                    </Col>
                </FormGroup>
                <br/>
            </Form>

        );
    }
}

const mapStateToProps = state => { return {
} }

export default connect(mapStateToProps)(Purchase);