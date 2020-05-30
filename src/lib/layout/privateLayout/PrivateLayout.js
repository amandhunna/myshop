import React, { useState } from 'react'
import Header from "../../components/header";
import Nav from "../../components/navBar/NavBar";
import { Container, Row, Col } from 'react-bootstrap';
import GetTitleComponent from "../../components/getTitleComponent"
import "./pri.css";



const PrivateLayout = (props) => {
    const [active, setActive] = useState("inactive");
    const [showCart, setShowCart] = useState(true);
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
    const {
        component: Component,
        header,
        route,
        titleComponents,
        unScrollable
    } = props
    const lg = active === "active"
    return (
        <Container fluid>
            <Row>
                <Header {...searchBarProps} header={header} />
            </Row>
            <Row className="mainLayout" onClick={() => { setActive("inactive") }}>
                <Col className="p-0 m-0" md={lg ? 2 : 1}>
                    <Nav {...navProps} />
                </Col>
                <Col md={lg ? 10 : 11}>
                    <div className="titleComponents">
                        <GetTitleComponent titleComponents={titleComponents} {...searchBarProps} />
                    </div>
                    <div className={!unScrollable && "scroll-able"}>
                        <Component route={route} {...searchBarProps} />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}


export default PrivateLayout;
