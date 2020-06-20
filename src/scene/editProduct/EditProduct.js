import React, { useState, useContext, useEffect } from 'react';
import currentUserContext from "../../lib/components/context/currentUser";
import helper from "../../lib/helper/base";
import config from "../../config";
import "./css.css";

function EditProduct() {
    const [productData, setProductData] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    const userContext = useContext(currentUserContext);
    const { productId } = userContext.match.params;

    const getProduct = async () => {

        const requestData = {
            url: config.url.product,
            timeout: 10000,
            method: 'get',
            data: { _id: productId },
            token: localStorage.getItem('sos_token'),
        }
        const response = await helper.requestAPI(requestData);
        const resData = helper.formatApiResponse(response);
        setProductData(resData);
        setIsLoading(false)
        console.log("--------<<<", resData)
    }

    useEffect(() => {
        getProduct()
    }, []);

    return (
        <div>

        </div>
    )
}

export default EditProduct
