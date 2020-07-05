import React from 'react'
import { Spinner, Button } from 'react-bootstrap';
import proxyLogger from '../../helper/logger';

export default function LoaderButton(props) {
    const defaultClick = () => {
        proxyLogger.info('Action method is not defined');
    }
    const {
        className,
        isLoading = false,
        onClick = defaultClick,
        variant = "primary"
    } = props;
    return (
        <Button variant={variant} className={className} onClick={onClick}>
            {!!isLoading && <Spinner animation="border" size="sm" />}
            {!isLoading && props.children}
        </Button>
    )
}