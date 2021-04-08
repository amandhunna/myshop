import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import GetTitleComponent from "../../components/getTitleComponent"
import "./css.css";



const PublicLayout = (props) => {
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

    const {
        component: Component,
        header,
        route,
        titleComponents,
        unScrollable
    } = props
    return (
        <Container fluid>
            <Row className="publicLayout">
                <Col md={12}>
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


export default PublicLayout;
