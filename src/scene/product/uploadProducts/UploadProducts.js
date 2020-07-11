import React, { useState, useContext } from 'react'
import ProductCard from '../ProductCard';
import { Container, Row, Col, Button } from 'react-bootstrap';
import LoaderButton from "../../../lib/components/loaderButton";
import helper from "../../../lib/helper/base";
import config from "../../../config";
import currentUserContext from "../../../lib/components/context/currentUser";

const UploadProducts = (props) => {
    const currentUser = useContext(currentUserContext);
    const variant = {
        type: '',
        price: '',
        description: '',
        inStock: true,
    };
    const defaultProductData = {
        productName: '',
        shopId: '123',
        variants: [{ ...variant }],
        images: [],
        description: '',
    };

    const [products, setProducts] = useState([{ ...defaultProductData }]);

    const addProduct = () => {
        const newData = JSON.parse(JSON.stringify(products));
        newData.push({ ...defaultProductData });
        setProducts(newData);
    };

    const uploadProducts = async () => {
        console.log(products);
        const requestData = {
            url: `${config.url.product}`,
            timeout: 10000,
            data: products,
            method: 'post',
            token: localStorage.getItem('sos_token'),
        }
        const response = await helper.requestAPI(requestData);
        console.log(response);
    };

    return (
        <Container fluid>

            <div id="uploadAction" className='w-100 '>
                <Button variant="link" onClick={() => currentUser.history.push('/products')}>Product list</Button>
                <LoaderButton variant="primary" children="Add a product" onClick={addProduct} />
                <LoaderButton className="ml-3" variant="secondary" onClick={uploadProducts} children="Upload products" />
            </div>
            <Row>
                {products.map((product, index) => <Col md={6}>
                    <ProductCard
                        index={index}
                        product={product}
                        products={products}
                        setProducts={setProducts}
                    /></Col>)}</Row>

            {products.length && <div id="uploadAction" className='w-100 mt-3'>
                <LoaderButton variant="primary" children="Add a product" onClick={addProduct} />
                <LoaderButton className="ml-3" variant="secondary" onClick={uploadProducts} children="Upload products" />
            </div>}
        </Container>
    )
}
export default UploadProducts;
