import React from 'react'
import { Alert } from 'react-bootstrap';

const BrowserAlert = () => {
    return (<div>
        <Alert variant="warning">
            <Alert.Heading>{`This browser is not supported`}</Alert.Heading>
            <p>{`To use this app Please switch to chrome browser`}</p>
            <hr />
            <p className="mb-0">{`Any queries? Contact us at `}
                <a rel="noopener noreferrer" href="https://www.marketcube.io/">marketcube.io</a></p>
        </Alert>
    </div >
    )
}

export default BrowserAlert;
