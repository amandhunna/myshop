import React, { useState } from 'react'
import Header from "../../components/header";
import Nav from "../../components/navBar/NavBar";
import { Container, Row, Col } from 'react-bootstrap';

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
    const { component: Component, route } = props
    return (
        <Container fluid>
            <Row>
                <Header {...searchBarProps} />
            </Row>
            <Row>
                <Col className="p-0 m-0" md={2}>
                    <Nav {...navProps} />
                </Col>
                <Col md={10}>
                    <Component route={route} />
                </Col>
            </Row>
        </Container>
    )
}


export default PrivateLayout;
