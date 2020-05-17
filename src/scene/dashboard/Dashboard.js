import React, { useState } from 'react';
import { Button, Row, Col, Modal, Container } from "react-bootstrap";
import "./dashboard.css";

const data = [{
    customerName: "Abc",
    location: "location",
    phone: "phone",
    email: "email",
    orderItems: ["orderItems", "orderItems", "orderItems", "orderItems", "orderItems", "orderItems", "orderItems", "orderItems"],
    expectedDelivery: "32$%^&6",
    deliveryType: "pick up"
},
{
    customerName: "Abc",
    location: "location",
    phone: "phone",
    email: "email",
    orderItems: ["orderItems"],
    expectedDelivery: "32$%^&6",
    deliveryType: "home delivery"

}, {
    customerName: "Abc",
    location: "location",
    phone: "phone",
    email: "email",
    orderItems: ["orderItems"],
    expectedDelivery: "32$%^&6",
    deliveryType: "home delivery"
}]
export default function Dashboard() {
    const [modalShow, setModalShow] = useState(false);
    return (
        <div className="d-flex flex-column justify-content-center  align-self-center">
            <h1 className="d-flex flex-column justify-content-center  align-self-center">Orders</h1>
            <ol>
                {data.map(customer => {
                    return (<li >
                        <div className="order d-flex justify-content-around ml-3 mt-3 mr-3 p-1">
                            <div className="order-detail d-flex flex-column justify-content-start">
                                <div>Name: {customer.customerName}</div>
                                <div>Location: {customer.location}</div>
                                <div>Phone: {customer.phone}</div>
                                <div>Email: {customer.email}</div>
                                <div>Delivery type: {customer.deliveryType}</div>
                                <div>Expected delivery: {customer.expectedDelivery}</div>
                                <div>Order items: <ol>{customer.orderItems.map(item => <li>{item}</li>)}</ol></div>
                            </div>
                            <div className="order-action d-flex flex-column jus  align-self-center ml-2">
                                <Button className="my-3 w-100" variant="primary" onClick={() => setModalShow(true)}>Fulfil order</Button>
                                <Button className="my-3 w-100" variant="danger" onClick={() => setModalShow(true)}>Reject order</Button>
                            </div>
                        </div>
                    </li>)
                })}
            </ol>
            <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
        </div >
    )
}
function MydModalWithGrid(props) {
    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Using Grid in Modal
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row className="show-grid">
                        <Col xs={12} md={8}>
                            <code>.col-xs-12 .col-md-8</code>
                        </Col>
                        <Col xs={6} md={4}>
                            <code>.col-xs-6</code>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
