import React, { Component } from 'react';
import {
    useParams
  } from "react-router-dom";
class ProductDetail extends Component {
    render() {
        console.log(this.props.useParams);
        return (
            <div>
                <h2></h2>
            </div>
        );
    }
}
export default ProductDetail;