import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Container } from 'react-bootstrap';
import Step2 from './Step2';
import Step1 from './Step1';
import './signUp.css';

const SignUp = (props) => {
    const [step, setStep] = useState(2);
    const [data, setData] = useState({})
    const stepState = { setStep, data, setData };

    return (
        <Container className="login-section p-5">
            <span>Step {step}/2</span>
            {step === 1 && <Step1 {...stepState} />}
            {step === 2 && <Step2  {...stepState} />}

            <Link className="secondary signupLink" to="/home">Already a user? click here to Login</Link>
        </Container >
    )
}
export default SignUp;
