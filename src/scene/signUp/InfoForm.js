import React, { useState } from "react";
import axios from 'axios';
import config from '../../lib/config';
import { Button, Form, Col } from "react-bootstrap";

import yupValidate from "./yup";

const getFormCmsData = {
  "contactUsForm": {
    "heading": "Contact us",
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
        "placeholder": "Your phone number *"
      },
      "location": {
        "placeholder": "Your location *"
      },
      "shopName": {
        "placeholder": "Store Name *"
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
  const { isSeller, setStep, data } = props;
  const [errorMessage, setErrorMessage] = useState(false);
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [shopName, setShopName] = useState("");
  const [sellItem, setSellItem] = useState("");
  const [openOn, setOpenOn] = useState("");

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
  const onPrevious = () => { setStep(1) }
  const onSubmit = async () => {
    const errorArr = [];
    errorArr.push(await handleValidation("location", location));
    errorArr.push(await handleValidation("phone", phone));
    if (isSeller) {
      errorArr.push(await handleValidation("shopName", shopName));
      errorArr.push(await handleValidation("sellItem", sellItem));
    }
    const step2Data = {
      phone,
      location,
      isSeller,
      ...isSeller ? { shopName, sellItem, openOn } : {},
    }

    const reqData = { ...(data.data || data), ...step2Data }
    console.log('------nore', reqData)

    if (!data.tokenId) {
      const url = config.signUpURL;
      try {
        const response = await axios({
          url,
          data: { ...reqData },
          method: 'Post'
        });
        console.log('response-----', response);
      } catch (error) {
        console.log('error--------', error)
      }
    }

    if (data.tokenId) {
      const googleData = {
        ...reqData,
        CLIENT_ID: config.googleClientId,
        tokenId: data.tokenId,
      }
      const url = config.googleLoginURL;
      try {
        const response = await axios({
          url,
          data: { ...googleData },
          method: 'Post'
        });
        console.log('response-----', response);
      } catch (error) {
        console.log('error--------', error)
      }

    }
    const hasError = !errorArr.some(value => value !== "");
    if (!hasError) {
      /*      const data = {
             phone,
             location,
             shopName,
             sellItem,
             openOn
           }; */
    };
  }

  return (
    <React.Fragment>
      <div className="form-wrapper">
        <Form className="">
          <Form.Row className="justify-content-between">
            <Form.Group as={Col} sm={12} md={6} controlId="phoneNumber">
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
            <Form.Group as={Col} sm={12} md={6} controlId="location">
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

            {isSeller && <Form.Group as={Col} sm={12} md={12} controlId="shopName">
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
            <Form.Group controlId="formBlog" className="">
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
          {isSeller &&

            [{ value: "evenDay", label: "Even days" }, { value: "oddDay", label: "Odd days" }, { value: "daily", label: "Daily" }].map(radioBox => (
              <Form.Check
                type="radio"
                name="openDay"
                checked={openOn[radioBox.value]}
                value={radioBox.value}
                onClick={(e) => {
                  const value = e.target.value;
                  setOpenOn(value)
                }}
                id={radioBox.value}
                label={radioBox.label}
              />))
          }
          <Button className="mt-4" variant="secondary" onClick={onPrevious}>Previous</Button>
          <Button className="mt-4 ml-3" variant="primary" onClick={onSubmit}>
            {button.title}
          </Button>
        </Form>
      </div>
    </React.Fragment>
  );
};

export default InfoForm;

