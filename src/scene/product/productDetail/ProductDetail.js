import React, { useState, useContext, useEffect } from 'react';
import currentUserContext from "../../../lib/components/context/currentUser";
import { Button, Container, Row, Col } from "react-bootstrap";
import ProductCard from '../ProductCard';
import LoaderButton from '../../../lib/components/loaderButton';
import helper from "../../../lib/helper/base";
import config from "../../../config";
import "./css.css";

function ProductDetail() {
    const [productData, setProductData] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    const currentUser = useContext(currentUserContext);
    const { productId } = currentUser.match.params;

    const getProduct = async () => {

        const requestData = {
            url: `${config.url.product}/${productId}`,
            timeout: 10000,
            method: 'get',
            params: { _id: productId },
            token: localStorage.getItem('sos_token'),
        }
        const response = await helper.requestAPI(requestData);
        const resData = helper.formatApiResponse(response);
        console.log(resData)
        setProductData(resData);
        setIsLoading(false)
    }

    useEffect(() => {
        getProduct()
    }, []);


    const uploadProducts = async () => {
        const data = {
            filter: { _id: productData[0]._id },
            updateData: {
                deleted: productData[0].deleted,
                productName: productData[0].productName,
                shopId: productData[0].shopId,
                variants: productData[0].variants,
                description: productData[0].description,
            }
        }
        const requestData = {
            url: `${config.url.product}`,
            timeout: 10000,
            data,
            method: 'Put',
            token: localStorage.getItem('sos_token'),
        }
        const response = await helper.requestAPI(requestData);
        console.log(response);
    };

    const deleteProduct = () => {

    }
    if (isLoading) return <div>Loading...</div>
    return (
        <Container fluid>
            <div id="uploadAction" className='w-100 '>
                <Button variant="link" onClick={() => currentUser.history.push('/products')}>Product list</Button>
                <LoaderButton variant="danger" children="Delete product" onClick={deleteProduct} />
                <LoaderButton className="ml-3" variant="primary" onClick={uploadProducts} children="Update product" />
            </div>
            <Row>
                {productData.map((product, index) => <Col md={6}>
                    <ProductCard
                        index={index}
                        product={product}
                        products={productData}
                        setProducts={setProductData}
                    /></Col>)}</Row>
        </Container>
    )
}


export default ProductDetail;
