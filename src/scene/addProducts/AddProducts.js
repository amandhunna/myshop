import React, { useEffect, useState } from 'react';
import { Row, Container } from "react-bootstrap"
import axios from 'axios';
import ProductCard from "../../lib/components/productCard"
import baseHelper from "../../lib/helper/base";
import "./addProducts.css";

const token = ""
const { randomKey } = baseHelper;

const AddProducts = () => {
    const [data, setData] = useState([]);
    const getProductsList = async () => {
        const response = await axios({
            url: 'http://localhost:6000/product',
            timeout: 10000,
            data: {}, // body
            headers: { Authorization: `Bearer ${token}` }
        });
        return data.map(item => <ProductCard colSize={3} key={randomKey("addProducts")} btnType="dangerPrimary" />)
    }


    return (
        <Container fluid>
            <Row>
                {/* {getProductsList()} */}
            </Row>
        </Container>
    )
}
export default AddProducts;
