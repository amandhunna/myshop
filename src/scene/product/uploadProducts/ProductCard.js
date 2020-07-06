import React from 'react';
import { Form, Card, Col, Row, Button } from 'react-bootstrap';

const Variants = (props) => {
    const { products, index: productIndex, setProducts } = props

    const removeVariant = (index) => {
        console.log('-------', productIndex)
        const newData = [...products]
        newData[productIndex].variants.splice(index, 1);
        console.log(index)
        setProducts(newData);
    }

    const dom = [];
    for (let count = 0; count < products[productIndex].variants.length; count++) {
        dom.push(
            <Form.Group as={Col} md={5} className='border p-2 m-2' controlId="exampleForm.ControlSelect1">

                <Form.Label>
                    <span className="d-flex spread-center">
                        <span>Variant {count + 1}</span>
                        <Button variant="danger" className='ml-5' onClick={() => { removeVariant(count) }}>Remove variant</Button>
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
    const { products, index, setProducts } = props;

    const defaultVariantData = {
        type: '',
        price: '',
        description: '',
        inStock: true,
    }
    const addVariant = () => {
        const newData = [...products]
        newData[index].variants = [...products[index].variants, { ...defaultVariantData }]
        setProducts(newData);
    }

    const removeProduct = (index) => {
        const newData = [...products]
        newData.splice(index, 1);
        setProducts(newData);
    }

    const updateProductState = updateData => {
        const {
            productIndex,
            productKey,
            propertyIndex,
            propertyKey,
            value,
        } = updateData;
        const newData = [...products];
        const ref = newData[productIndex];
        switch (productKey) {
            default: {
                ref[productKey] = value;
                break;
            }
            case 'variants': {
                ref[productKey][propertyIndex][propertyKey] = value;
                break;
            }
            case 'images': {
                ref[productKey][propertyIndex] = value;
                break;
            }
        }
        setProducts(newData);
    }

    return (<Card className='mt-3'>
        <Card.Header className="d-flex spread-center"> <h1>#{index + 1} </h1> <Button variant="danger" className='ml-1' onClick={() => removeProduct(index)} > Remove product</Button></Card.Header>
        <Card.Body>
            <Card.Text>
                <Form>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Product name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Product name"
                            value={products[index].productName}
                            onChange={(e) => {
                                updateProductState({
                                    productIndex: index,
                                    productKey: "productName",
                                    propertyIndex: null,
                                    propertyKey: null,
                                    value: e.target.value,
                                })
                            }} />
                    </Form.Group>
                    <Form.Group className="d-none" controlId="exampleForm.ControlSelect1">
                        <Form.Label>Shop id</Form.Label>
                        <Form.Control type="text" placeholder="shop id" readOnly />
                    </Form.Group>

                    <Form.Group controlId="formGridState" className='border p-3'>
                        <div className=''>
                            <Form.Label className=''>
                                <span>Product variants</span>
                                <Button className='ml-5' onClick={() => addVariant()}>Add variant</Button>
                            </Form.Label>

                            {/* product variants */}
                            <Variants
                                products={products}
                                index={index}
                                setProducts={setProducts} />
                        </div>
                    </Form.Group>

                    <Form.Group>
                        {/* <Form.File id="exampleFormControlFile1" label="Upload image" /> */}
                        <Form.Label>Product image</Form.Label>
                        <Form.Control type="text" placeholder="Product image url"
                            value={products[index].images[0]}
                            onChange={(e) => {
                                updateProductState({
                                    productIndex: index,
                                    productKey: "images",
                                    propertyIndex: 0,
                                    propertyKey: null,
                                    value: e.target.value,
                                })
                            }}
                        />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Product description</Form.Label>
                        <Form.Control as="textarea" rows="3" placeholder='Product description'
                            value={products[index].description}
                            onChange={(e) => {
                                updateProductState({
                                    productIndex: index,
                                    productKey: "description",
                                    propertyIndex: null,
                                    propertyKey: null,
                                    value: e.target.value,
                                })
                            }}
                        />
                    </Form.Group>
                </Form> </Card.Text>
        </Card.Body>
    </Card>)

}

export default ProductCard;
