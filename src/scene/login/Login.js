/* eslint-disable no-unreachable */
import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { GoogleLogin } from '../../lib/components/google';
import helper from '../../lib/helper/base';
import config from '../../config';
import './intro.css';
import logger from '../../lib/helper/logger';

export default function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(email, password)
        const url = config.url.login;
        const reqData = { data: { email, password }, url }
        try {
            const response = await helper.requestAPI(reqData);
            const { status, data, error } = response;
            logger.info('login response', response)
            if (status === 201) {
                localStorage.setItem('sos_token', JSON.stringify(data));
                props.route.history.push('/orders');
            }

            if (error) {
                setError(error.message);
            }

        }
        catch (error) {
            logger.warn('login error occured', error)
        }
    }
    return <Container className="login-section p-5">
        <Row>
            <Col md={5} className="border-md-left d-flex justify-content-center align-items-center"><GoogleLogin />
            </Col>
            <Col ms={2} className="or-border flex-md-column">
                <i className="border"></i><i className="p-3">or</i><i className="border"></i>
            </Col>
            <Col md={5}>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={(e) => onSubmit(e)}>Login</Button>
                    {error && <span className='ml-3'>{error}</span>}
                </Form>
            </Col>
            <Link className="secondary signupLink" to="/signup">Not a user? click here sign up</Link>
        </Row >

    </Container >
    if (false) return (
        <div className="m-5">
            <ul>
                <li>Through this app, I have tried to bring local shops on the web</li>
                <li>Customers can request for the product and the time according to their everyday schedule and Can pick up their packages from the shop.
            Or the provider can do home delivery if available.</li>

                <li>Provider/essential services can schedule the visit of customers to shop hence maintain minimum possible gathering of the customer during the peak hours.</li>

                <li>Customers will just have to come and pick up their packs so to minimize the communication time.</li>

                <li>The provider will accept or reject or reschedule the time when the customer can come to shop the order according to its stocks and availability.</li>

                <li>To use this application user need to do login and provide their basic information to communicate.</li>
            </ul>
        </div>
    )
}
