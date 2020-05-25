import React, { useState, useEffect } from 'react';
import { Button, Row, Col, Card } from "react-bootstrap";
import AcceptModal from "../../lib/components/acceptModal";
import RejectedModal from "../../lib/components/rejectedModal";
import data from "./dummy";
import "./order.css";


const getItems = customer => {
    return (<div className="order-detail d-flex flex-column">
        <div>Name: {customer.customerName}</div>
        <div>Location: {customer.location}</div>
        <div>Phone: {customer.phone}</div>
        <div>Email: {customer.email}</div>
        <div>Delivery type: {customer.deliveryType}</div>
        <div>Expected delivery: {customer.expectedDelivery}</div>
        <div>Order items: <ol>{customer.orderItems && customer.orderItems.map(item => <li className="ml-4">{item}</li>)}</ol></div>
    </div>
    )
}

const GetCard = (props) => {
    const { cardNumber, customer, setModalShow, setModalItems, setRejectedModalShow } = props;
    return (<Card>
        <Card.Header className="d-flex justify-content-center">#Card: {cardNumber}</Card.Header>
        <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text className="order">
                {getItems(customer)}
            </Card.Text>
            <div className="actionSection w-100 d-flex justify-content-center">
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

const GetCards = props => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards(data)
    }, [])
    let count = 0;
    const cardsDOm = <Row>
        {cards.map((cardData) => <Col className="mt-3" sm={12} md={4} lg={3} ><GetCard customer={cardData} cardNumber={++count} {...props} /></Col>)}
    </Row>

    return cardsDOm

}

const Order = (props) => {
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
