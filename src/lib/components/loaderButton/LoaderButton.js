import React from 'react'
import { Spinner, Button } from 'react-bootstrap';

export default function LoaderButton(props) {
    const { isLoading, content, onClick } = props;
    return (
        <Button variant="primary" onClick={onClick}>
            {!!isLoading && <Spinner animation="border" />}
            {!isLoading && content}
        </Button>
    )
}