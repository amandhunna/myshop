import React, { useState, useEffect } from 'react'
import Header from "../../components/header";
import Nav from "../../components/navBar/NavBar";
import CurrentUserContext from "../../components/context/currentUser";
import { Container, Row, Col } from 'react-bootstrap';
import GetTitleComponent from "../../components/getTitleComponent"
import "./pri.css";
import GrowSpinner from '../../components/growSpinner/growSpinner';
import helper from "../../../lib/helper/base";


const PrivateLayout = (props) => {
    const [active, setActive] = useState("inactive");
    const [showCart, setShowCart] = useState(true);
    const [cartOrders, setCartOrders] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState({});
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


    useEffect(() => {
        const token = helper.getToken();
        if (!token) {
            props.route.history.push('/login')
            return
        };

        const decodedToken = helper.decodeToken(token)
        const validToken = !helper.isTokenExpired(decodedToken.exp);
        if (!validToken) props.route.history.push('/login');
        setCurrentUser(decodedToken)
        setIsLoading(false);
    }, [])

    if (isLoading) {
        return <GrowSpinner />
    }

    return (
        <CurrentUserContext.Provider value={props.route, currentUser} >
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
        </CurrentUserContext.Provider>
    )
}


export default PrivateLayout;
