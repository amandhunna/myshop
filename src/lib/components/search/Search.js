import React from 'react'
import { InputGroup, FormControl } from "react-bootstrap";

export default function Search() {
    return (
        <InputGroup className="my-3">
            <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1"><i class="fa fa-search" aria-hidden="true"></i></InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
                placeholder="Search"
                aria-label="Search"
            />
        </InputGroup>
    )
}
