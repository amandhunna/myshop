import React, { useState, useEffect } from 'react';
import { Button, Row, Col, Card } from "react-bootstrap";
import AcceptModal from "../../lib/components/acceptModal";
import CustomJumbotron from "../../lib/components/customJumbotron";
import RejectedModal from "../../lib/components/rejectedModal";
import Spinner from "../../lib/components/growSpinner";
import config from "../../config";
import helper from "../../lib/helper/base";
import "./order.css";


/* 

_id: "5edb5ca558bd7b287a9e5e45"
parentId: "VbTwD"

deliveryType: "BFbcB"
deliveredTime: "r5t4ey"
deliveryAddress: "aU1QT"

expectedDeliveryTime: "10d4r"
orderFrom: "o2jDW"
orderItems: ["N5SCy"]
orderTo: "keg5l"

status: "spY86"
rejectReason: "DJJGY"

rate: 5
note: "PNRMh"
*/

// individual card jsx data
const getItems = order => {
    return (<div className="order-detail d-flex flex-column">
        <strong className="d-flex justify-content-center border-bottom">Customer detail</strong>
        <div id="userInfo" className="d-flex flex-column">
            <span></span>
            <span>Name:<strong> {order.customerName}</strong></span>
            <span>Phone:<strong> {order.phone}</strong></span>
            <span>Email:<strong> {order.email}</strong></span>
        </div>
        <strong className="d-flex justify-content-center border-bottom">Order detail</strong>
        <div id="deliveryInfo" className="d-flex flex-column mt-3">
            <span>Delivery type:<strong> {order.deliveryType}</strong></span>
            <span>Delivery address:<strong> {order.deliveryAddress}</strong></span>
            <span>Expected delivery time:<strong> {order.expectedDeliveryTime} </strong></span>
            <span>Delivered time:<strong> {order.deliveredTime} </strong></span>
        </div>

        <div id="orderInfo" className="d-flex flex-column mt-3">
            <span>Status:<strong> {order.status}</strong></span>
            <span>Note:<strong> {order.note}</strong></span>
            <span>Order items:<ol>{order.orderItems && order.orderItems.map(item => <li className="ml-4">{item}</li>)}</ol></span>
        </div>
    </div >
    )
}

// individual card
const GetCard = (props) => {
    const { cardNumber, customer, setModalShow, setModalItems, setRejectedModalShow } = props;
    return (<Card>
        <Card.Header className="d-flex justify-content-center">#Order: {cardNumber}</Card.Header>
        <Card.Body>
            {/*      <Card.Title>Special title treatment</Card.Title> */}
            <Card.Text className="order">
                {getItems(customer)}
            </Card.Text>
            <div className="actionSection w-100 d-flex justify-content-center  border-top pt-2">
                <Button className="mx-2" variant="danger" onClick={() => setRejectedModalShow(true)}>Reject order</Button>
                <Button className="mx-2" variant="primary" onClick={() => {
                    setModalShow(true);
                    setModalItems(customer);
                }}
                >Fulfil order</Button>
            </div>
        </Card.Body>
    </Card>);
}

// all cards data
const GetCards = props => {
    const [cards, setCards] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const getOrders = async () => {
        const requestData = {
            url: `${config.url.order}`,
            timeout: 10000,
            method: 'get',
            token: localStorage.getItem('sos_token'),
        }
        const response = await helper.requestAPI(requestData);
        const resData = helper.formatApiResponse(response);
        setCards(resData);
        setIsLoading(false);
    }


    useEffect(() => {
        getOrders();
    }, []);

    if (isLoading) return <Spinner />;

    if (!cards.length) return <CustomJumbotron header="No data" body="Currently have no orders" />

    let count = 0;
    const cardsDOM = <Row>
        {cards.map((cardData) => <Col className="mt-3" sm={12} md={4} lg={3} ><GetCard customer={cardData} cardNumber={++count} {...props} /></Col>)}
    </Row>

    return cardsDOM;

}

// main component
const Order = () => {
    const [modalShow, setModalShow] = useState(false);
    const [rejectedModalShow, setRejectedModalShow] = useState(false)
    const [modalItems, setModalItems] = useState([]);
    const getCardsProps = {
        setModalShow,
        setModalItems,
        setRejectedModalShow,
    }

    return (
        <Col className="container d-flex flex-column justify-content-center  align-self-center">
            <GetCards {...getCardsProps} />
            <AcceptModal show={modalShow} modalItems={modalItems} onHide={() => setModalShow(false)} />
            <RejectedModal show={rejectedModalShow} onHide={() => setRejectedModalShow(false)} />
        </Col >

    )
}


export default Order;
