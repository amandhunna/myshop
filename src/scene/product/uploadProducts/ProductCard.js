import React, { useState } from 'react';
import { Form, Card, Col, Row, Button } from 'react-bootstrap';

const Variants = (props) => {
    const { variantCount } = props
    const dom = [];
    for (let count = 0; count < variantCount; count++) {
        dom.push(
            <Form.Group as={Col} md={5} className='border p-2 m-2' controlId="exampleForm.ControlSelect1">
                <Form.Label>
                    <span className="d-flex spread-center">
                        <span>Variant {count + 1}</span>
                        <Button variant="danger" className='ml-5' onClick={() => { }}>Remove variant</Button>
                        <Button variant="info" className='ml-1' onClick={() => { }}>Mark as out of Stock</Button>
                    </span>
                </Form.Label>
                <div className="d-flex w-100">
                    <span>
                        <Form.Label>Type</Form.Label>
                        <Form.Control type="text" placeholder="Varient type" />
                    </span><span className="ml-3">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" placeholder="Varient type" />
                    </span>
                </div>
                <Form.Group className="mt-2" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Varient description</Form.Label>
                    <Form.Control as="textarea" rows="3" placeholder='Varient description' />
                </Form.Group>
            </Form.Group>
        )
    }
    return <>
        <Row>
            {dom}
        </Row>
    </>

}

const ProductCard = (props) => {
    const [variantCount, setVariantCount] = useState(1)
    const updateVariant = (event) => {
        event.preventDefault();
        setVariantCount(variantCount + 1);

    }

    return (<Card className='mt-3'>
        <Card.Header className="d-flex spread-center"><span>Product card </span> <Button variant="danger" className='ml-1' onClick={() => { }}>Remove product</Button></Card.Header>
        <Card.Body>
            <Card.Text>

                <Form>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Product name</Form.Label>
                        <Form.Control type="text" placeholder="Product name" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Shop id</Form.Label>
                        <Form.Control type="text" placeholder="shop id" readOnly />
                    </Form.Group>

                    <Form.Group controlId="formGridState" className='border p-3'>
                        <div className=''>
                            <Form.Label className=''>
                                <span>Product variants</span>
                                <Button className='ml-5' onClick={updateVariant}>Add variant</Button>
                            </Form.Label>

                            {/* product variants */}
                            <Variants variantCount={variantCount} />
                        </div>
                    </Form.Group>

                    <Form.Group>
                        {/* <Form.File id="exampleFormControlFile1" label="Upload image" /> */}
                        <Form.Label>Product image</Form.Label>
                        <Form.Control type="text" placeholder="Product image url" />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Product description</Form.Label>
                        <Form.Control as="textarea" rows="3" placeholder='Product description' />
                    </Form.Group>
                </Form> </Card.Text>
        </Card.Body>
    </Card>)

}

export default ProductCard;
