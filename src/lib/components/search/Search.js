import React from 'react';
import { Form } from "react-bootstrap";

export default function Search() {
    return (
        <>
            <Form.Label className=""></Form.Label>
            <Form className="w-100">
                <Form.Group controlId="selectShop" >
                    <Form.Control as="select" custom>
                        <option checked>Select Shops near you</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </Form.Group>
            </Form>
        </>
    )
}
