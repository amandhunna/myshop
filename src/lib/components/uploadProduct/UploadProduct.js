import React, { useContext } from 'react'
import { Button } from "react-bootstrap";
import currentUserContent from "../context/currentUser";
import "./css.css";

export default function UploadProduct() {
    const currentUser = useContext(currentUserContent);
    console.log(currentUser);
    return (<Button className="uploadProduct" onClick={() => currentUser.history.push('/products/upload')} variant="primary"></Button>)
}
