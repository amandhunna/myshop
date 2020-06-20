import React, { useEffect, useState } from 'react';
import { Row, Container, Spinner } from "react-bootstrap"
import axios from 'axios';
import ProductCard from "../../lib/components/productCard"
import helper from "../../lib/helper/base";
import config from "../../config"
import "./css.css";

const EditProducts = () => {
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
        const resData = helper.formatApiResponse(response);
        console.log(resData)
        const domData = resData.map(item => <ProductCard colSize={3} key={helper.randomKey("addProducts")} btnType="dangerPrimary" item={item} />)
        setData(domData);
        setIsLoading(false)
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
export default EditProducts;
