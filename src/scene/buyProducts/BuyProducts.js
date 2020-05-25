import React, { useState } from 'react'
import { Row, Col, Container } from "react-bootstrap";
import ProductCard from "../../lib/components/productCard";
import { dummyProducts, dummyCart } from "./dummyData";
import baseHelper from "../../lib/helper/base";
import "./css.css";

const { randomKey } = baseHelper;

const ProductsList = (props) => {
    const { colSize } = props;
    const data = [...dummyProducts];
    return data.map(item => <ProductCard key={randomKey("productList")} colSize={colSize} btnType="singleBtn" />)
}

const CartList = () => {
    const data = [...dummyCart];
    return data.map(item => <ProductCard
        colSize={12}
        btnType="dangerPrimary"
        primaryBtnText="Add + 1"
        dangerBtnText="Remove -1"
        key={randomKey("productCart")}
    />)
}


const BuyProducts = (props) => {
    const { showCart = true } = props;
    return (
        <Container fluid>
            <Row>
                <Col md={showCart ? 9 : 12}
                    xs={12}>
                    <Row>
                        <ProductsList colSize={showCart ? 4 : 3} />
                    </Row>
                </Col>
                <Col md={showCart ? 3 : 0} className="d-none d-md-block">
                    <Row className="buyPage-list">
                        <CartList />
                    </Row>
                </Col>
            </Row>
        </Container>

    )
}

export default BuyProducts;
