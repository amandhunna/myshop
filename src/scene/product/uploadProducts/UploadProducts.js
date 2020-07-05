import React, { useState } from 'react'
import ProductCard from './ProductCard';
import LoaderButton from "../../../lib/components/loaderButton";

const UploadProducts = () => {
    const [product, setProduct] = useState([{}]);

    const addProduct = () => {
        setProduct(prev => {
            return [...prev, {}];
        })
    }

    return (
        <div>

            <div id="uploadAction" className='w-100 '>
                <LoaderButton variant="primary" children="Add a product" onClick={addProduct} />
                <LoaderButton className="ml-3" variant="secondary" children="Upload products" />
            </div>
            {product.map(item => <ProductCard />)}

            <div id="uploadAction" className='w-100 mt-3'>
                <LoaderButton variant="primary" children="Add a product" onClick={addProduct} />
                <LoaderButton className="ml-3" variant="secondary" children="Upload products" />
            </div>
        </div>
    )
}
export default UploadProducts;
