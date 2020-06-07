import {
  firstNameSchema,
  lastNameSchema,
  emailAddSchema,
  numberSchema,
  locationSchema,
  shopNameSchema,
  sellItemSchema
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
    case "emailAdd":
      promise = validateValue(emailAddSchema, { emailAdd: value });
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
    default: return "";
  }
  return handlePromiseError(promise);
};

export default validate;