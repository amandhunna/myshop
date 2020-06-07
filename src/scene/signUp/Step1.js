import React, { useState } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap';
import { GoogleLogin } from "../../lib/components/google";
import './signUp.css';

const Step1 = (props) => {
    const { setStep, data, setData } = props;
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmP, setConfirmP] = useState('');

    const onGoogleClick = (gData) => {
        setData(gData)
        setStep(2);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const mData = {
            lastName, firstName, email, password, name: `${firstName} ${lastName}`
        }
        setData(mData);
        setStep(2);

    }

    return (<Row>
        <Col md={5} className="border-md-left d-flex justify-content-center align-items-center"><GoogleLogin onGoogleClick={onGoogleClick} />
        </Col>
        <Col ms={2} className="or-border flex-md-column">
            <i className="border"></i><i className="p-3">or</i><i className="border"></i>
        </Col>
        <Col md={5}>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="firstName" placeholder="First name" onChange={(e) => setFirstName(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="lastName" placeholder="Last name" onChange={(e) => setLastName(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Confirm password" onChange={(e) => setConfirmP(e.target.value)} />
                </Form.Group>
            </Form>
            <Button variant="primary" type="submit" onClick={(e) => onSubmit(e)}>Next</Button>
        </Col>
    </Row >
    )
}
export default Step1;
