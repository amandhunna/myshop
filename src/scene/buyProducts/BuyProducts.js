import React from 'react'
import { Form, Row, Col, Card, Button, Image } from "react-bootstrap";
import "./css.css";
import ProductCard from "../../lib/components/productCard";
import { dummyProducts, dummyCart } from "./dummyData";

const ProductsList = () => {
    const data = [...dummyProducts];
    return data.map(item => <ProductCard btnType="addToCart" />)
}


const BuyProducts = () => {
    return (
        <>
            <Row className="filterBar">
                <Col md={1} className="font-size-30 center-middle">
                    <i className="fa fa-filter"></i>
                </Col>
                <Col md={10} className="">
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
                <Col md={1} className="font-size-30 center-middle">
                    <i class="fa fa-shopping-cart"></i>
                </Col>
            </Row>
            <Row>
                <Col className="side-border" md={8}>
                    <strong className="d-flex justify-content-center  mb-3">Products List</strong>
                    <Row>
                        <ProductsList />
                    </Row>
                </Col>
                <Col md={4}>
                    <strong className="d-flex justify-content-center  mb-3">Your cart</strong>
                </Col>
            </Row>
        </>

    )
}

export default BuyProducts;
