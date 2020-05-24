import React, { useState } from "react";
import { Button, Row, Col, Modal, Container, Form } from "react-bootstrap";
import DateTimePicker from 'react-datetime-picker';

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
                        // const value = e.target.value;
                    }}
                    id={item}
                    label={item}
                /></li>)}</ol></div>
    </div>
    )
}



const AcceptModal = (props) => {
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

export default AcceptModal