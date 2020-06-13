import React from 'react';
import { Toast } from 'react-bootstrap';
import './toast.css'

// use it as Toast in other files
const ToastWrapper = (props) => {
    const { toastState, setToastState } = props;
    const { toastBody, toastHeader, autoHide = false } = toastState;
    return (

        <Toast className='mx-3' onClose={() => setToastState({ active: false })}
            show={toastState.active}
            delay={3000}
            autohide={autoHide}>
            {toastHeader && <Toast.Header>
                <img
                    src="holder.js/20x20?text=%20"
                    className="rounded mr-2"
                    alt=""
                />
                <strong className="mr-auto">{toastHeader}</strong>
            </Toast.Header>}
            <Toast.Body>{toastBody}</Toast.Body>
        </Toast>

    );
}

export default ToastWrapper;
