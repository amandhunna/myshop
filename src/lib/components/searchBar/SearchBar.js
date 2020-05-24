import React from 'react';
import { Row, Col, Container } from "react-bootstrap";
import Search from "../search";
import "./css.css";

export default function SearchBar(props) {
    const { active,
        cartOrders,
        setActive,
        setShowCart,
        showCart,
        setCartOrders } = props

    return (
            <header className="w-100 center-middle">
                <Col xs={2}>
                    <span className="humburger" onClick={() => setActive("active")}><i></i></span>
                </Col>
                <Col xs={1} className="d-none" >
                    <span className={`font-size-30 center-middle`}>
                        <i className="fa fa-filter"></i>
                    </span>
                </Col>
                <Col xs={9} className="">
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
            </header>
    )
}
