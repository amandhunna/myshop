import React, { useState, useContext } from "react";
import axios from 'axios';
import config from '../../config';
import { Button, Form, Col } from "react-bootstrap";
import LoaderButton from '../../lib/components/loaderButton';
import yupValidate from "./yup";
import helper from "../../lib/helper/base";
import logger from "../../lib/helper/logger";
import CurrentUserContext from "../../lib/components/context/currentUser";
import Toast from "../../lib/components/toast";

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
  const currentUser = useContext(CurrentUserContext);
  logger.info("currentUser: ", currentUser);
  const { isProvider, setStep, data } = props;
  const [cmsData] = useState(getFormCmsData.contactUsForm);
  const [errorMessage, setErrorMessage] = useState(false);
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [shopName, setShopName] = useState("");
  const [sellItem, setSellItem] = useState("");
  const [openOn, setOpenOn] = useState("");
  const [toastState, setToastState] = useState({ active: false });

  const [isRequesting, setIsRequesting] = useState(false)


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
    if (isRequesting) return;

    setIsRequesting(true);
    const errorArr = [];
    errorArr.push(await handleValidation("location", location));
    errorArr.push(await handleValidation("phone", phone));
    if (isProvider) {
      errorArr.push(await handleValidation("shopName", shopName));
      errorArr.push(await handleValidation("sellItem", sellItem));
    }

    const hasError = errorArr.some(value => value !== "");
    if (hasError) {
      setIsRequesting(false);
      return
    };

    const step2Data = {
      phone,
      location,
      isProvider,
      ...isProvider ? { shopName, sellItem, openOn } : {},
    }

    const reqData = { ...(data.data || data), ...step2Data }

    logger.info('request data: ', reqData)
    if (!data.tokenId) {
      const url = config.url.signUp;
      try {
        const response = await axios({
          url,
          data: { ...reqData },
          method: 'Post'
        });
        const responseData = helper.formatResponse(response);
        logger.info('user create request response: ', responseData);
        let toastBody = "Unknown state occured, please report this";
        if (responseData.status !== 200) {
          switch (responseData.error) {
            case 'required_unique_email': toastBody = 'Email already registered'
            default: toastBody = 'Unknwon error has occured'; break;
          }
        }
        else {
          toastBody = 'User created successfully';
        }
        setToastState({ active: true, toastBody })
        setTimeout(() => {
          currentUser.history.push('/login');
        }, 1000);

      } catch (error) {
        logger.error("user create failed response", error);
      }
      setIsRequesting(false);
    }

    if (data.tokenId) {
      const googleData = {
        ...reqData,
        CLIENT_ID: config.googleClientId,
        tokenId: data.tokenId,
      }
      const url = config.url.googleLogin;
      try {
        const response = await axios({
          url,
          data: { ...googleData },
          method: 'Post'
        });
        logger.info('google user create request response: ', response);
      } catch (error) {
        logger.error("google user create failed response", error);
      }
      setIsRequesting(false);
      return;
    }
  }

  return (
    <React.Fragment>
      <Toast toastState={toastState} setToastState={setToastState} autoHide={false} />
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

            {isProvider && <Form.Group as={Col} sm={12} md={12} controlId="shopName">
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
          {isProvider &&
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
          {isProvider &&

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
          <LoaderButton className="mt-4 ml-3" variant="primary" isLoading={isRequesting} onClick={onSubmit}>
            {button.title}
          </LoaderButton>
        </Form>
      </div>
    </React.Fragment>
  );
};

export default InfoForm;
