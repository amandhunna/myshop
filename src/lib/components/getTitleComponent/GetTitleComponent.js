import React from 'react'
import UploadProduct from "../uploadProduct";
import Cart from "../cart";
import "./css.css";

const GetTitleComponent = (props) => {
    const { titleComponents = {},
        active,
        cartOrders,
        setActive,
        setShowCart,
        showCart,
        setCartOrders } = props;
        
    const { component, title } = titleComponents;
    const componentStack = [<h5>{title}</h5>];
    component.forEach(element => {
        if (element === "uploadProduct")
            componentStack.push(<UploadProduct />)
        if (element === "cart") componentStack.push(<Cart setShowCart={setShowCart} />)
    });

    return componentStack;
}

export default GetTitleComponent;
