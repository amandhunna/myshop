import React from 'react'
import { Container, Form, Row, Col } from "react-bootstrap";
import "./css.css";

const BuyProducts = () => {
    return (
        <Container>
            <Row>
                <Col md={2}>
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
                <Col md={5}>

                </Col>
                <Col md={5}>

                </Col>
            </Row>

        </Container>
    )
}

export default BuyProducts;
