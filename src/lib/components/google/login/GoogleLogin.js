import React from 'react';
import { GoogleLogin } from 'react-google-login';

const LoginGoogle = () => {

    const responseGoogle = (response) => {
        console.log(response);
    }
    const buttonText = (<div className='mx-5'>
        <span className='mr-3 font-weight-bolder'>Login</span>
        {/* <i className="fa fa-power-off" aria-hidden="true"></i> */}
    </div>);

    return <GoogleLogin
        clientId="1021639348087-97llph7pa6aa3v4ffta2jl2ammg307u1.apps.googleusercontent.com"
        buttonText={buttonText}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        className='googleLogin'
    />
}

export default LoginGoogle;
