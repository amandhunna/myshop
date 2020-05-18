import React from 'react';
import { InputGroup, Card, Row, Col, FormControl, Button, Image, Container } from "react-bootstrap"
import "./addProducts.css";

const AddProducts = () => {
    const getProductsList = () => {
        const data = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

        return data.map(item => <Col lg={4} className="mt-4">
            <Card>
                <Card.Header className="d-flex w-100">Product title</Card.Header>
                <Card.Body>
                    {/*  <Card.Title>Product title</Card.Title> */}
                    <Card.Text className="order d-flex justify-content-center">
                        <Image src="https://i.picsum.photos/id/545/200/300.jpg" rounded />
                    </Card.Text>
                    <div className="actionSection w-100 d-flex justify-content-center">
                        <Button
                            className="mx-2"
                            variant="danger"
                            onClick={() => { }}>Delete</Button>
                        <Button
                            className="mx-2"
                            variant="primary"
                            onClick={() => { }}>Edit</Button>
                    </div>
                </Card.Body>
            </Card>
        </Col >)

    }

    return (
        <div className="container">
            <Row>
                <Col lg={8}>

                    <InputGroup className="my-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1"><i class="fa fa-search" aria-hidden="true"></i></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Search"
                            aria-label="Search"
                        />
                    </InputGroup></Col>
                <Col lg={4}>
                    <InputGroup className="my-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">&#8377;</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Product Price"
                            aria-label="Amount (to the nearest rupee)"
                        />
                        <InputGroup.Append>
                            <Button variant="primary">Upload Image</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                {getProductsList()}

            </Row>
        </div>
    )
}
export default AddProducts;
