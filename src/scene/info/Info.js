import React, { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import InfoForm from "./InfoForm";
import "./info.css";

const Info = props => {
  const [isSeller, setIsSeller] = useState(false);
  return (<>
    <section className="container infoPage">
      <Col className="position-relative rounded  p-4 p-lg-5">
        <h2 className="white position-relative pb-4 heading-underline">User Info</h2>
        <p className="white">Basic information about user and his/her location</p>
        <Form>
          <Form.Group as={Col} md="6" className="d-flex" controlId="userType">
            <div className="mb-3 mr-5">
              <Form.Check
                type="radio"
                name="seller"
                value="Customer"
                checked={!isSeller}
                onClick={(e) => setIsSeller(e.target.value.toLowerCase() === "seller")}
                id="Customer"
                label="Customer"
              />
              <Form.Check
                type="radio"
                name="seller"
                value="Seller"
                checked={isSeller}
                onClick={(e) => setIsSeller(e.target.value.toLowerCase() === "seller")}
                id="Seller"
                label="Seller"
              />
            </div>
          </Form.Group>
        </Form>
        <Row className="justify-content-between">

          <Col className="align-items-center d-flex">
            <InfoForm isSeller={isSeller} />
          </Col>
        </Row>
      </Col>
    </section></>
  );
};
export default Info;
