import React from 'react';
import config from '../../../../config';
import { GoogleLogin } from 'react-google-login';

const LoginGoogle = (props) => {
    const { onGoogleClick } = props;
    const responseGoogle = (googleUser) => {
        console.log(googleUser)
        const id_token = googleUser.getAuthResponse().id_token;
        const { profileObj } = googleUser;

        const data = {
            data: {
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
        clientId={config.googleClientId}
        buttonText={buttonText}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        className='googleLogin'
    />
}
export default LoginGoogle;
