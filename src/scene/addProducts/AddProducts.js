import React from 'react';
import { Row } from "react-bootstrap"
import ProductCard from "../../lib/components/productCard"
import baseHelper from "../../lib/helper/base";
import "./addProducts.css";

const { randomKey } = baseHelper;

const AddProducts = () => {
    const getProductsList = () => {
        const data = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

        return data.map(item => <ProductCard colSize={3} key={randomKey("addProducts")} btnType="dangerPrimary" />)

    }

    return (
        <Row>
            {getProductsList()}
        </Row>
    )
}
export default AddProducts;
