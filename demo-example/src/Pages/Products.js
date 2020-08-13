import React,{Component} from 'react';
import axios from 'axios';
import {
    Card, CardImg, CardText, CardBody,Row,
    CardTitle, Button, Container,Col
  } from 'reactstrap';
class Products extends Component{
    constructor(){
        super();
        this.state ={
            products:[]
        };
    }
    componentDidMount(){
        axios.get("https://logwin.stg.vn.boot.ai/api/v1/port/search?type=load").then(res => {
            console.log(res);
        })
    }
    render() {
        const {products} = this.state;
        return (
            <Container>
                <h2>Products</h2>
                <Row>
                {products.map(product => (
                    <Col sm="4">
                        <Card >
                            <CardImg top width="100%" src={product.imageUrl} alt="Card image cap" />
                            <CardBody>
                            <CardTitle>{product.name}</CardTitle>
                                <CardText>{product.description}</CardText>
                            <Button>Add</Button>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
                </Row>
            </Container>
        )
    }
}
export default Products;