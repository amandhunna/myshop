import React, { useState } from 'react';
import { Button, Row, Col, Modal, Container } from "react-bootstrap";
import DateTimePicker from 'react-datetime-picker';
import "./dashboard.css";
import 'react-calendar/dist/Calendar.css';

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

const getItems = customer => {
    return (<div className="order-detail d-flex flex-column justify-content-start">
        <div>Name: {customer.customerName}</div>
        <div>Location: {customer.location}</div>
        <div>Phone: {customer.phone}</div>
        <div>Email: {customer.email}</div>
        <div>Delivery type: {customer.deliveryType}</div>
        <div>Expected delivery: {customer.expectedDelivery}</div>
        <div>Order items: <ol>{customer.orderItems.map(item => <li>{item}</li>)}</ol></div>
    </div>
    )
}
export default function Dashboard() {
    const [modalShow, setModalShow] = useState(false);
    const [modalItems, setModalItems] = useState([]);
    return (
        <div className="d-flex flex-column justify-content-center  align-self-center">
            <h1 className="d-flex flex-column justify-content-center  align-self-center">Orders</h1>
            <ol>
                {data.map(customer => {
                    return (<li >
                        <div className="order d-flex justify-content-around ml-3 mt-3 mr-3 p-1">
                            {getItems(customer)}
                            <div className="order-action d-flex flex-column jus  align-self-center ml-2">
                                <Button className="my-3 w-100" variant="primary" onClick={() => {
                                    setModalShow(true);
                                    setModalItems(customer.orderItems);
                                }}
                                >Fulfil order</Button>
                                <Button className="my-3 w-100" variant="danger" onClick={() => setModalShow(true)}>Reject order</Button>
                            </div>
                        </div>
                    </li>)
                })}
            </ol>
            <MydModalWithGrid show={modalShow} modalItems={modalItems} onHide={() => setModalShow(false)} />
        </div >
    )
}
function MydModalWithGrid(props) {
    const [timeDate, setTimeDate] = useState(new Date());

    const onChangeTimeDate = timeDate => setTimeDate(timeDate);

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
                        <Col>
                            <DateTimePicker
                                amPmAriaLabel={true}
                                onChange={onChangeTimeDate}
                                value={timeDate}
                            />
                        </Col>
                    </Row>
                    <div>HI</div>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal >
    );
}
