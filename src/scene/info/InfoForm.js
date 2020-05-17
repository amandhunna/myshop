import React, { useState, useEffect } from "react";
import { Button, Form, Col } from "react-bootstrap";

import yupValidate from "./yup";

const getFormCmsData = {
  "contactUsForm": {
    "heading": "Contact us",
    "description": "Explore unlimited opportunities of marketplace commerce with Marketcube.",
    "inputFields": {
      "firstName": {
        "placeholder": "Your first name *"
      },
      "lastName": {
        "placeholder": "Your last name *"
      },
      "emailAddress": {
        "placeholder": "Your email address *"
      },
      "phoneNumber": {
        "placeholder": "Your phone number"
      },
      "location": {
        "placeholder": "Your location/address"
      },
      "shopName": {
        "placeholder": "Shop Name *"
      },
      "textArea": {
        "placeholder": "What you sell *"
      }
    },
    "button": {
      "title": "Submit"
    }
  }
}

const InfoForm = props => {
  const { isSeller } = props;
  const [errorMessage, setErrorMessage] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [shopName, setShopName] = useState("");
  const [sellItem, setSellItem] = useState("");

  const [cmsData] = useState(getFormCmsData.contactUsForm);

  const { inputFields, button } = cmsData;

  const handleValidation = async (field, value) => {
    const validationError = await yupValidate(field, value);
    setErrorMessage(prevState => ({
      ...prevState,
      [field]: validationError,
    }));
    return validationError;
  };
  /*   const resetFormStates = state => {
      setFirstName("");
      setLastName("");
      setWorkEmail("");
      setPhone("");
      setLocation("");
      setShopName("");
      setQuestion("");
      setErrorMessage(false);
      setShowForm(state);
    }; */

  const onSubmit = async () => {
    const errorArr = [];
    errorArr.push(await handleValidation("firstName", firstName));
    errorArr.push(await handleValidation("lastName", lastName));
    errorArr.push(await handleValidation("emailAdd", workEmail));
    errorArr.push(await handleValidation("location", location));
    errorArr.push(await handleValidation("phone", phone));
    if (isSeller) {
      errorArr.push(await handleValidation("shopName", shopName));
      errorArr.push(await handleValidation("sellItem", sellItem));
    }

    const hasError = !errorArr.some(value => value !== "");
    if (!hasError) {
      const data = {
        firstName,
        lastName,
        workEmail,
        phone,
        location,
        shopName,
        sellItem,
      };
    };
  }

  return (
    <React.Fragment>
      <div className="form-wrapper">
        <Form>
          {(
            <>
              <Form.Row className="justify-content-between">
                <Form.Group as={Col} md="6" controlId="firstName">
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder={inputFields.firstName.placeholder}
                    onChange={event => setFirstName(event.target.value)}
                    onBlur={() => handleValidation("firstName", firstName)}
                    value={firstName}
                  />
                  {errorMessage && errorMessage.firstName ? (
                    <div className="error-message">{errorMessage.firstName}</div>
                  ) : null}
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="lastName">
                  <Form.Control
                    type="text"
                    name="lname"
                    placeholder={inputFields.lastName.placeholder}
                    onChange={event => setLastName(event.target.value)}
                    onBlur={() => handleValidation("lastName", lastName)}
                    value={lastName}
                  />
                  {errorMessage && errorMessage.lastName ? (
                    <div className="error-message">{errorMessage.lastName}</div>
                  ) : null}
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="formEmail">
                  <Form.Control
                    type="text"
                    name="email"
                    onChange={event => setWorkEmail(event.target.value)}
                    onBlur={() => handleValidation("emailAdd", workEmail)}
                    value={workEmail}
                    placeholder={inputFields.emailAddress.placeholder}
                    className={errorMessage && errorMessage.emailAdd ? "error" : null}
                  />
                  {errorMessage && errorMessage.emailAdd ? (
                    <div className="error-message">{errorMessage.emailAdd}</div>
                  ) : null}
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="phoneNumber">
                  <Form.Control
                    type="text"
                    name="phone"
                    onChange={event => setPhone(event.target.value)}
                    placeholder={inputFields.phoneNumber.placeholder}
                    value={phone}
                    onBlur={() => handleValidation("phone", phone)}
                  />
                  {errorMessage && errorMessage.phone ? (
                    <div className="error-message">{errorMessage.phone}</div>
                  ) : null}
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="location">
                  <Form.Control
                    type="text"
                    name="title"
                    onChange={event => setLocation(event.target.value)}
                    placeholder={inputFields.location.placeholder}
                    onBlur={() => handleValidation("location", location)}
                    value={location}
                  />
                  {errorMessage && errorMessage.location ? (
                    <div className="error-message">{errorMessage.location}</div>
                  ) : null}
                </Form.Group>

                {isSeller && <Form.Group as={Col} md="6" controlId="shopName">
                  <Form.Control
                    type="text"
                    name="email"
                    onBlur={() => handleValidation("shopName", shopName)}
                    onChange={event => setShopName(event.target.value)}
                    placeholder={inputFields.shopName.placeholder}
                    value={shopName}
                  />
                  {errorMessage && errorMessage.shopName ? (
                    <div className="error-message">{errorMessage.shopName}</div>
                  ) : null}
                </Form.Group>}
              </Form.Row>
              {isSeller &&
                <Form.Group controlId="formBlog" className="w-100">
                  <Form.Control
                    as="textarea"
                    rows="3"
                    type="text"
                    name="message"
                    placeholder={inputFields.textArea.placeholder}
                    onChange={event => setSellItem(event.target.value)}
                    value={sellItem}
                    onBlur={() => handleValidation("sellItems", sellItem)}
                    className={errorMessage && errorMessage.sellItem ? "error" : null}
                  />
                  {errorMessage && errorMessage.sellItem ? (
                    <div className="error-message">{errorMessage.sellItem}</div>
                  ) : null}
                </Form.Group>
              }
              <Button className="g-button d--inline-block" variant="primary" onClick={onSubmit}>
                {button.title}
              </Button>
            </>
          )}
        </Form>
      </div>
    </React.Fragment>
  );
};

export default InfoForm;

