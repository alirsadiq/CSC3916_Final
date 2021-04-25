import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {connect} from 'react-redux';
import {logoutUser} from "../actions/authActions";

class Productheader extends Component {
    logout() {
        this.props.dispatch(logoutUser());
    }

    render() {
        return (
            <div>
                <Navbar expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand>
                        A&A Baazar
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                            <LinkContainer to="/itemlist">
                                <Nav.Link disabled={!this.props.loggedIn}>Product List</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to={'/item/' + (this.props.selectedMovie ? this.props.selectedMovie.title : '')}>
                                <Nav.Link disabled={!this.props.loggedIn}>Product Detail</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/signin">
                                <Nav.Link>{this.props.loggedIn ? <button onClick={this.logout.bind(this)}>Logout</button> : 'Login'}</Nav.Link>
                            </LinkContainer>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedIn : state.auth.loggedIn,
        username : state.auth.username,
        selectedProduct: state.product.selectedProduct
    }
}

export default connect(mapStateToProps)(Productheader);