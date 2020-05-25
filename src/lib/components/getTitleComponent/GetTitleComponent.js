import React from 'react'
import UploadProduct from "../uploadProduct";
import "./css.css";

const GetTitleComponent = ({ titleComponents = {} }) => {
    const { component, title } = titleComponents;
    const componentStack = [<h5>{title}</h5>];
    component.forEach(element => {
        if (element === "uploadProduct")
            componentStack.push(<UploadProduct />)
    });

    return componentStack;
}

export default GetTitleComponent;
