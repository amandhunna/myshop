import React, { useState } from 'react';
import { Button, Row, Col, Modal, Container, Form, InputGroup, FormControl } from "react-bootstrap";
import DateTimePicker from 'react-datetime-picker';
import Navbar from "../../lib/components/NavBar";
import "./dashboard.css";
// import 'react-calendar/dist/Calendar.css';

const data = [{
    customerName: "Abc",
    location: "location",
    phone: "phone",
    email: "email",
    orderItems: ["orderItems", "orderItems", "orderItems", "orderItems", "orderItems", "orderItems", "orderItems", "orderItems", "orderItems", "orderItems", "orderItems", "orderItems"],
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
export default function Dashboard(props) {
    const [modalShow, setModalShow] = useState(false);
    const [rejectedModalShow, setRejectedModalShow] = useState(false)
    const [modalItems, setModalItems] = useState([]);
    return (
        <>
            {/* <Navbar history={props.history} /> */}
            <div className="d-flex flex-column justify-content-center  align-self-center">
                <h1 className="d-flex flex-column justify-content-center  align-self-center">Orders</h1>
                <ol>
                    {data.map(customer => {
                        return (<li >
                            <div className="order d-flex mt-3 p-2">
                                {getItems(customer)}
                                <div className="order-action d-flex w-100">
                                    <Button className="" variant="danger" onClick={() => setRejectedModalShow(true)}>Reject order</Button>
                                    <Button className="" variant="primary" onClick={() => {
                                        setModalShow(true);
                                        setModalItems(customer);
                                    }}
                                    >Fulfil order</Button>
                                </div>
                            </div>
                        </li>)
                    })}
                </ol>
                <MydModalWithGrid show={modalShow} modalItems={modalItems} onHide={() => setModalShow(false)} />
                <RejectedModal show={rejectedModalShow} onHide={() => setRejectedModalShow(false)} />/>
        </div >
        </>
    )
}

const getModalItems = customer => {
    return (<div className="order-detail d-flex flex-column">
        <div>Name: {customer.customerName}</div>
        <div>Location: {customer.location}</div>
        <div>Phone: {customer.phone}</div>
        <div>Email: {customer.email}</div>
        <div>Delivery type: {customer.deliveryType}</div>
        <div>Expected delivery: {customer.expectedDelivery}</div>
        <div>Order items: <ol>{customer.orderItems && customer.orderItems.map(item =>
            <li className="ml-4">
                <Form.Check
                    type="checkBox"
                    name="item"
                    value={item}
                    onClick={(e) => {
                        const value = e.target.value;
                    }}
                    id={item}
                    label={item}
                /></li>)}</ol></div>
    </div>
    )
}



function MydModalWithGrid(props) {
    const [timeDate, setTimeDate] = useState(new Date());

    const onChangeTimeDate = timeDate => setTimeDate(timeDate);

    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Order detail
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row className="show-grid">
                        <Col>
                            {
                                getModalItems(props.modalItems)}
                            <div className="dateTimePicker">
                                Available at: <DateTimePicker
                                    amPmAriaLabel={true}
                                    onChange={onChangeTimeDate}
                                    value={timeDate}
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Done</Button>
            </Modal.Footer>
        </Modal >
    );
}

function RejectedModal(props) {

    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Order detail
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row className="show-grid">
                        <Col>
                            <div>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>Reason</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl as="textarea" aria-label="With textarea" />
                                </InputGroup>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Done</Button>
            </Modal.Footer>
        </Modal >
    );
}
