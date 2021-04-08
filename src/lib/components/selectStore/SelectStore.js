import React from 'react';
import { Form } from "react-bootstrap";
import "./css.css";

export default function SelectSore() {
    return (
        <Form className="w-100 selectStore">
            <Form.Label className="d-none"></Form.Label>
            <Form.Group controlId="selectStore" >
                <Form.Control as="select" custom>
                    <option checked>Select Store near you</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Form.Control>
            </Form.Group>
        </Form>
    )
}
