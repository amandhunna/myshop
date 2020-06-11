import React from 'react'
import { Spinner, Button } from 'react-bootstrap';

export default function LoaderButton(props) {
    const {
        className,
        isLoading,
        onClick,
        variant = "primary"
    } = props;
    return (
        <Button variant={variant} className={className} onClick={onClick}>
            {!!isLoading && <Spinner animation="border" size="sm"/>}
            {!isLoading && props.children}
        </Button>
    )
}