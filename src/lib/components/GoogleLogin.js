import React from 'react';
import GoogleLogin from 'react-google-login';
// or import { GoogleLogin } from 'react-google-login';

const LoginGoogle = () => {

    const responseGoogle = (response) => {
        console.log(response);
    }

    return <GoogleLogin
        clientId="1021639348087-97llph7pa6aa3v4ffta2jl2ammg307u1.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
    />
}

export default LoginGoogle;
