import {
  firstNameSchema,
  lastNameSchema,
  emailSchema,
  numberSchema,
  locationSchema,
  shopNameSchema,
  sellItemSchema,
  passwordSchema,
} from "./schema";

const validateValue = async (schema, value) => schema.validate(value);

const handlePromiseError = async promise => {
  let errorMessage = "";
  await promise.catch(err => {
    errorMessage = err.message;
  });
  return errorMessage;
};

const validate = async (field, value) => {
  let promise = "";
  switch (field) {
    case "firstName":
      promise = validateValue(firstNameSchema, { firstName: value });
      break;
    case "lastName":
      promise = validateValue(lastNameSchema, { lastName: value });
      break;
    case "email":
      promise = validateValue(emailSchema, { email: value });
      break;
    case "phone":
      promise = validateValue(numberSchema, { phone: value });
      break;
    case "location":
      promise = validateValue(locationSchema, { location: value });
      break;
    case "shopName":
      promise = validateValue(shopNameSchema, { shopName: value });
      break;
    case "sellItem":
      promise = validateValue(sellItemSchema, { sellItem: value });
      break;
    case "password":
      promise = validateValue(passwordSchema, { password: value });
      break;
    default: return "";
  }
  return handlePromiseError(promise);
};

export default validate;