import React, { useState } from 'react';
import { Button } from "react-bootstrap";
import AcceptModal from "../../lib/components/AcceptModal";
import RejectedModal from "../../lib/components/RejectedModal";
//import Navbar from "../../lib/components/NavBar";
import "./dashboard.css";

const data = [{
    customerName: "Abc",
    location: "location",
    phone: "phone",
    email: "email",
    orderItems: ["orderItems", "orderItems", "orderItems", "orderItems", "orderItems", "orderItems", "orderItems", "orderItems", "orderItems", "orderItems", "orderItems", "orderItems"],
    expectedDelivery: "32$%^&6",
    deliveryType: "pick up"
},
{
    customerName: "Abc",
    location: "location",
    phone: "phone",
    email: "email",
    orderItems: ["orderItems"],
    expectedDelivery: "32$%^&6",
    deliveryType: "home delivery"

}, {
    customerName: "Abc",
    location: "location",
    phone: "phone",
    email: "email",
    orderItems: ["orderItems"],
    expectedDelivery: "32$%^&6",
    deliveryType: "home delivery"
}]

const getItems = customer => {
    return (<div className="order-detail d-flex flex-column">
        <div>Name: {customer.customerName}</div>
        <div>Location: {customer.location}</div>
        <div>Phone: {customer.phone}</div>
        <div>Email: {customer.email}</div>
        <div>Delivery type: {customer.deliveryType}</div>
        <div>Expected delivery: {customer.expectedDelivery}</div>
        <div>Order items: <ol>{customer.orderItems && customer.orderItems.map(item => <li className="ml-4">{item}</li>)}</ol></div>
    </div>
    )
}
export default function Dashboard(props) {
    const [modalShow, setModalShow] = useState(false);
    const [rejectedModalShow, setRejectedModalShow] = useState(false)
    const [modalItems, setModalItems] = useState([]);
    return (
        <>
            {/* <Navbar history={props.history} /> */}
            <div className="d-flex flex-column justify-content-center  align-self-center">
                <h1 className="d-flex flex-column justify-content-center  align-self-center">Orders</h1>
                <ol>
                    {data.map(customer => {
                        return (<li >
                            <div className="order d-flex mt-3 p-2">
                                {getItems(customer)}
                                <div className="order-action d-flex w-100">
                                    <Button className="" variant="danger" onClick={() => setRejectedModalShow(true)}>Reject order</Button>
                                    <Button className="" variant="primary" onClick={() => {
                                        setModalShow(true);
                                        setModalItems(customer);
                                    }}
                                    >Fulfil order</Button>
                                </div>
                            </div>
                        </li>)
                    })}
                </ol>
                <AcceptModal show={modalShow} modalItems={modalItems} onHide={() => setModalShow(false)} />
                <RejectedModal show={rejectedModalShow} onHide={() => setRejectedModalShow(false)} />/>
        </div >
        </>
    )
}

