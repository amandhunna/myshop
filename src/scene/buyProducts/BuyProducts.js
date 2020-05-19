import React from 'react'
import { Form, Row, Col } from "react-bootstrap";
import "./css.css";

const BuyProducts = () => {
    return (
        <Row className="m-3">
            <Col md={2}>
                <strong className="d-flex justify-content-center mb-3">Filters</strong>
                <Form>
                    <Form.Group controlId="exampleForm.SelectCustom">
                        <Form.Label>Select Shops near you</Form.Label>
                        <Form.Control as="select" custom>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </Col>
            <Col className="side-border" md={5}>
                <strong className="d-flex justify-content-center  mb-3">Products List</strong>
            </Col>
            <Col md={5}>
                <strong className="d-flex justify-content-center  mb-3">Your cart</strong>
            </Col>
        </Row>

    )
}

export default BuyProducts;
