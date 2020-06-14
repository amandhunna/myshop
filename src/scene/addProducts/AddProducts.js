import React, { useEffect, useState } from 'react';
import { Row, Container, Spinner } from "react-bootstrap"
import axios from 'axios';
import ProductCard from "../../lib/components/productCard"
import helper from "../../lib/helper/base";
import config from "../../config"
import "./addProducts.css";

const { randomKey } = helper;

const AddProducts = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const getProductsList = async () => {

        const requestData = {
            url: config.url.product,
            timeout: 10000,
            method: 'Get',
            token: localStorage.getItem('sos_token'),
        }
        const response = await helper.requestAPI(requestData);
        if (response.data) {
            const domData = []//response.data.map(item => <ProductCard colSize={3} key={randomKey("addProducts")} btnType="dangerPrimary" />)
            setData(domData);
            setIsLoading(false)
        }
    }
    useEffect(() => {
        getProductsList()
    }, [])

    return (
        <Container fluid>
            <Row>
                {isLoading && <div className='d-flex justify-content-center align-items-center w-100 h-80vh'>
                    <Spinner animation="border" />
                </div>}
                {!isLoading && data}
            </Row>
        </Container>
    )
}
export default AddProducts;
