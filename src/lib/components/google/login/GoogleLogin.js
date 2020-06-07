import React from 'react';
import { GoogleLogin } from 'react-google-login';

const LoginGoogle = (props) => {
    const { onGoogleClick } = props;
    const responseGoogle = (googleUser) => {

        const id_token = googleUser.getAuthResponse().id_token;
        const { profileObj } = googleUser;

        const data = {
            userData: {
                name: profileObj.name,
                email: profileObj.email,
                firstName: profileObj.givenName,
                lastName: profileObj.familyName,
                googleId: profileObj.googleId,
                imageUrl: profileObj.imageUrl,
            },
            tokenId: id_token,
        }
        onGoogleClick(data);
    }

    const buttonText = (<div className='mx-5'>
        <span className='mr-3 font-weight-bolder'>Login</span>
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
