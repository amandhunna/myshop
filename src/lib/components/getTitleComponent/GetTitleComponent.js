import React from 'react'
import UploadProduct from "../uploadProduct";
import Cart from "../cart";
import "./css.css";

const GetTitleComponent = ({ titleComponents = {} }) => {
    const { component, title } = titleComponents;
    const componentStack = [<h5>{title}</h5>];
    component.forEach(element => {
        if (element === "uploadProduct")
            componentStack.push(<UploadProduct />)
        if (element === "cart") componentStack.push(<Cart />)
    });

    return componentStack;
}

export default GetTitleComponent;
