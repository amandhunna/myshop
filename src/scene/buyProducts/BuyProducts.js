import React, { useState } from 'react'
import { Form, Row, Col, Container } from "react-bootstrap";
import ProductCard from "../../lib/components/productCard";
import { dummyProducts, dummyCart } from "./dummyData";
import "./css.css";

const ProductsList = (props) => {
    const { colSize } = props;
    const data = [...dummyProducts];
    return data.map(item => <ProductCard colSize={colSize} btnType="singleBtn" />)
}

const CartList = () => {
    const data = [...dummyCart];
    return data.map(item => <ProductCard
        colSize={12}
        btnType="dangerPrimary"
        primaryBtnText="Add + 1"
        dangerBtnText="Remove -1"
    />)
}


const BuyProducts = () => {
    const [showCart, setShowCart] = useState(false);
    return (
        <Container fluid>
            <Row className="align-items-center">
                <Col xs={1} >
                    <span className="font-size-30 center-middle">
                        <i className="fa fa-filter"></i>
                    </span>
                </Col>
                <Col xs={10} className="">
                    <Form.Label className=""></Form.Label>
                    <Form className="w-100">
                        <Form.Group controlId="selectShop" >
                            <Form.Control as="select" custom>
                                <option checked>Select Shops near you</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Col>
                <Col xs={1} >
                    <span className="font-size-30 center-middle"
                        onClick={() => setShowCart(prev => !prev)}>
                        <i class="fa fa-shopping-cart"></i>
                    </span>
                </Col>
            </Row>
            <Row>
                <Col className="side-border" md={showCart ? 9 : 12}>
                    <strong className="d-flex justify-content-center  mb-3">Products List</strong>
                    <Row className="buyPage-list">
                        <ProductsList colSize={showCart ? 4 : 3} />
                    </Row>
                </Col>
                <Col md={showCart ? 3 : 0} className={!showCart && "d-none"}>
                    <strong className="d-flex justify-content-center  mb-3">Your cart</strong>
                    <Row className="buyPage-list">
                        <CartList />
                    </Row>
                </Col>
            </Row>
        </Container>

    )
}

export default BuyProducts;
