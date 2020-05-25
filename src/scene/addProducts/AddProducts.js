import React from 'react';
import { InputGroup, Card, Row, Col, FormControl, Button } from "react-bootstrap"
import ProductCard from "../../lib/components/productCard"
import baseHelper from "../../lib/helper/base";
import "./addProducts.css";

const { randomKey } = baseHelper;

const AddProducts = () => {
    const getProductsList = () => {
        const data = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

        return data.map(item => <ProductCard key={randomKey("addProducts")} btnType="dangerPrimary" />)

    }

    return (
        <div className="container">
            <Row>
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
