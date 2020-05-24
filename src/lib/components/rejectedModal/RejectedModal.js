import React from "react";
import { Button, Row, Col, Modal, InputGroup, FormControl, Container } from "react-bootstrap";

const RejectedModal = (props) => {

    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Order detail
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row className="show-grid">
                        <Col>
                            <div>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>Reason</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl as="textarea" aria-label="With textarea" />
                                </InputGroup>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Done</Button>
            </Modal.Footer>
        </Modal >
    );
}

export default RejectedModal;
