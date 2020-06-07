import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { GoogleLogin } from "../../lib/components/google";
import './signUp.css';

const SignUp = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmP, setConfirmP] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(email, password)
    }

    return (
        <Container className="login-section p-5">
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

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Confirm password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={(e) => setConfirmP(e.target.value)} />
                        </Form.Group>

                        <Button variant="primary" type="submit" onClick={(e) => onSubmit(e)}>
                            Login {' '}  <i className="fa fa-power-off" aria-hidden="true"></i>
                        </Button>
                    </Form>
                </Col>
                <Link className="secondary signupLink" to="/signup">Not a user? click here sign up</Link>
            </Row >

        </Container >
    )
}
export default SignUp;
