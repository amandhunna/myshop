import React, { useState } from 'react'
import { Row, Col, Container } from "react-bootstrap";
import ProductCard from "../../lib/components/productCard";
import { dummyProducts, dummyCart } from "./dummyData";
import "./css.css";
import Search from '../../lib/components/search';

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
    const [showCart, setShowCart] = useState(true);
    const [cartOrders, setCartOrders] = useState(0);
    return (
        <Container fluid>
            <Row className="align-items-center">
                <Col xs={1} >
                    <span className={`font-size-30 center-middle`}>
                        <i className="fa fa-filter"></i>
                    </span>
                </Col>
                <Col xs={10} className="">
                    <Search />
                </Col>
                <Col xs={1} >
                    <span className={`font-size-30 center-middle p-relative
                    ${showCart && "active-blue"}`}
                        onClick={() => setShowCart(prev => !prev)}>
                        <i class="fa fa-shopping-cart p-relative">
                            <i className="cartOrders">{cartOrders}</i>
                        </i>
                    </span>
                </Col>
            </Row>
            <Row>
                <Col className="side-border" md={showCart ? 9 : 12}
                    xs={showCart ? 0 : 12}>
                    <strong className="d-flex mb-3">Products List</strong>
                    <Row className="buyPage-list">
                        <ProductsList colSize={showCart ? 4 : 3} />
                    </Row>
                </Col>
                <Col md={showCart ? 3 : 0} xs={showCart ? 12 : 0} className={!showCart && "d-none"}>
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
