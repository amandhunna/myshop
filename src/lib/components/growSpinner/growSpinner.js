import React from 'react'
import { Spinner } from 'react-bootstrap';

export default function GrowSpinner(props) {
    const { text } = props;
    return (<span>
        <Spinner animation="grow" size="sm" />{' '}{text}
    </span>);
}
