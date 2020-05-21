import React from 'react'
import { Button, Col, Card, Image } from "react-bootstrap";
import "./css.css";

const ProductCard = (props) => {
    const { colSize = 4,
        src = "https://i.picsum.photos/id/545/200/300.jpg",
        title = "Product",
        primaryBtnText,
        dangerBtnText,
        variant,
        btnType
    } = props;

    let buttons

    switch (btnType) {
        case "singleBtn":
            buttons = (<div className="w-100">
                <Button
                    className="w-100"
                    variant={variant || "primary"}
                    onClick={() => { }}>{primaryBtnText || dangerBtnText || "Add to cart"}</Button>
            </div>)
            break;

        case "dangerPrimary":
            buttons = (<div className="deleteEditBtn">
                <Button
                    variant="danger"
                    onClick={() => { }}>{dangerBtnText || "Delete"}</Button>
                <Button
                    variant="primary"
                    onClick={() => { }}>{primaryBtnText || "Edit"}</Button>
            </div>)
            break;
        default: buttons = "";
            break;
    }


    return (
        <Col md={colSize} className="my-3">
            <Card>
                <Card.Header className="d-flex w-100">{title}</Card.Header>
                <Card.Body>
                    {/*  <Card.Title>Product title</Card.Title> */}
                    <Card.Text className="d-flex justify-content-center">
                        <Image src={src} rounded className="productImage w-100" />
                    </Card.Text>
                    {buttons}
                </Card.Body>
            </Card>
        </Col>)
}

export default ProductCard;
