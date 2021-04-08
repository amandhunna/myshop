import React from 'react';
import { GoogleLogout } from 'react-google-login';
import './css.css';

const Logout = () => {

    const responseGoogle = (response) => {
        console.log(response);
    }

    return <GoogleLogout
        clientId="1021639348087-97llph7pa6aa3v4ffta2jl2ammg307u1.apps.googleusercontent.com"
        buttonText={<i className="fa fa-sign-out" aria-hidden="true"></i>}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        className="googleLogout"
    />
}

export default Logout;
