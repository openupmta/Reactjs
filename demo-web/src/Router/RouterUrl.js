import React, { Component } from 'react';
import Register from '../Component/Register/Register';
import Login from '../Component/Login/Login';
import {
    Switch,
    Route
  } from "react-router-dom";
import Home from '../Component/Home/Home';
import Product from '../Component/Product/Product';
import ProductDetail from '../Component/Product/ProductDetail';
import SignUp from '../Component/SignUp/SignUp';
class RouterUrl extends Component {
    render() {
        return (

            <Switch>
                <Route exact path="/product">
                    <Product/>
                </Route>
                <Route exact path="/product-detail/:id">
                    <ProductDetail/>
                </Route>
                <Route exact path="/register">
                    <Register />
                </Route>
                <Route exact path="/signup">
                    <SignUp />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route >
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        );
    }
}

export default RouterUrl;