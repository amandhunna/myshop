import React, { useState } from 'react'
import Header from "../../components/header";
import Nav from "../../components/navBar/NavBar";
import { Container, Row, Col } from 'react-bootstrap';
import "./pri.css";

const PrivateLayout = (props) => {
    const [active, setActive] = useState("inactive");
    const [showCart, setShowCart] = useState(false);
    const [cartOrders, setCartOrders] = useState(0);

    const searchBarProps = {
        active,
        cartOrders,
        setActive,
        setShowCart,
        showCart,
        setCartOrders
    }

    const navProps = {
        active, setActive
    }
    const { component: Component, route, title } = props
    const lg = active === "active"
    return (
        <Container fluid>
            <Row>
                <Header {...searchBarProps} />
            </Row>
            <Row className="main">
                <Col className="p-0 m-0" md={lg ? 2 : 1}>
                    <Nav {...navProps} />
                </Col>
                <Col md={lg ? 10 : 11}>
                    <h3>{title}</h3>
                    <div>
                        <Component route={route} {...searchBarProps} />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}


export default PrivateLayout;
