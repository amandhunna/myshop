import React, { useState } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap';
import { GoogleLogin } from "../../lib/components/google";
import yupValidate from "./yup";
import './signUp.css';

const Step1 = (props) => {
    const { setStep, setData } = props;
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmP, setConfirmP] = useState('');

    const [errorMessage, setErrorMessage] = useState({});

    const onGoogleClick = (gData) => {
        setData(gData)
        setStep(2);
    }

    const next = async (e) => {
        e.preventDefault();
        const errorArr = [];
        errorArr.push(await handleValidation("firstName", firstName));
        errorArr.push(await handleValidation("lastName", lastName));
        errorArr.push(await handleValidation("email", email));
        errorArr.push(await handleValidation("password", password));
        errorArr.push(await handleValidation("confirmP", confirmP));
        const hasError = errorArr.some(value => value !== "");

        if (!hasError) {
            const mData = {
                lastName, firstName, email, password, name: `${firstName} ${lastName}`
            };
            setData(mData);
            console.log(mData)
            setStep(2);
        }
    }

    const handleValidation = async (field, value) => {
        if (field === 'confirmP' && password !== value) {
            setErrorMessage(prevState => ({
                ...prevState,
                [field]: 'Password does not match',
            }));
            return
        }
        const validationError = await yupValidate(field, value);
        setErrorMessage(prevState => ({
            ...prevState,
            [field]: validationError,
        }));
        return validationError;
    };

    return (<Row>
        <Col md={5} className="border-md-left d-flex justify-content-center align-items-center"><GoogleLogin onGoogleClick={onGoogleClick} />
        </Col>
        <Col ms={2} className="or-border flex-md-column">
            <i className="border"></i><i className="p-3">or</i><i className="border"></i>
        </Col>
        <Col md={5}>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="firstName" placeholder="First name" onChange={(e) => setFirstName(e.target.value)}
                        onBlur={() => handleValidation("firstName", firstName)} />
                    {errorMessage && errorMessage.firstName ? (
                        <div className="error-message">{errorMessage.firstName}</div>
                    ) : null}
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="lastName" placeholder="Last name" onChange={(e) => setLastName(e.target.value)}
                        onBlur={() => handleValidation("lastName", lastName)} />
                    {errorMessage && errorMessage.lastName ? (
                        <div className="error-message">{errorMessage.lastName}</div>
                    ) : null}
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}
                        onBlur={() => handleValidation("email", email)} />
                    {errorMessage && errorMessage.emailAdd ? (
                        <div className="error-message">{errorMessage.emailAdd}</div>
                    ) : null}
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}
                        onBlur={() => handleValidation("password", password)} />
                    {errorMessage && errorMessage.password ? (
                        <div className="error-message">{errorMessage.password}</div>
                    ) : null}
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Confirm password" onChange={(e) => setConfirmP(e.target.value)}
                        onBlur={() => handleValidation("confirmP", confirmP)} />
                    {errorMessage && errorMessage.confirmP ? (
                        <div className="error-message">{errorMessage.confirmP}</div>
                    ) : null}
                </Form.Group>
            </Form>
            <Button variant="primary" type="submit" onClick={(e) => next(e)}>Next</Button>
        </Col>
    </Row >
    )
}
export default Step1;
