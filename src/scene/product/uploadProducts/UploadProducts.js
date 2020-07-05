import React, { useState } from 'react'
import ProductCard from './ProductCard';
import LoaderButton from "../../../lib/components/loaderButton";

const defaultProductData = {
    productName: '',
    shopId: '',
    variants: [/* {
        type: '',
        price: '',
        description: '',
        inStock: true,
    } */],
    images: [],
    description: '',
};

const UploadProducts = () => {
    const [products, setProducts] = useState([{ ...defaultProductData }]);

    const addProduct = () => {
        const newData = [...products, { ...defaultProductData }];
        setProducts(newData);
    };

    return (
        <div>

            <div id="uploadAction" className='w-100 '>
                <LoaderButton variant="primary" children="Add a product" onClick={addProduct} />
                <LoaderButton className="ml-3" variant="secondary" children="Upload products" />
            </div>
            {products.map((product, index) => <ProductCard
                index={index}
                product={product}
                products={products}
                setProducts={setProducts}
            />)}

            {products.length && <div id="uploadAction" className='w-100 mt-3'>
                <LoaderButton variant="primary" children="Add a product" onClick={addProduct} />
                <LoaderButton className="ml-3" variant="secondary" children="Upload products" />
            </div>}
        </div>
    )
}
export default UploadProducts;
