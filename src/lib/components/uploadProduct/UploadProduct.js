import React from 'react'
import { Button } from "react-bootstrap";
import "./css.css";

export default function UploadProduct() {
    return (<Button variant="primary">Upload Product</Button>)
    /* return (
        <InputGroup className="my-3">
            <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">&#8377;</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
                placeholder="Product Price"
                aria-label="Amount (to the nearest rupee)"
            />
            <InputGroup.Append>
                <Button variant="primary">Upload Image</Button>
            </InputGroup.Append>
        </InputGroup>
    ) */
}
