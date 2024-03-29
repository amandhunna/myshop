import * as yup from "yup";

const firstNameSchema = yup.object().shape({
  firstName: yup.string().required("First name is required")
});

const lastNameSchema = yup.object().shape({
  lastName: yup.string().required("Last name is required")
});

const emailSchema = yup.object().shape({
  email: yup.string().email().required("Email address is required")
});

const numberSchema = yup.object().shape({
  phone: yup.string().required("Phone number is required")
});

const locationSchema = yup.object().shape({
  location: yup.string().required("Location is required")
});

const shopNameSchema = yup.object().shape({
  shopName: yup.string().required("Shop name is required")
});

const sellItemSchema = yup.object().shape({
  sellItem: yup.string().required("What you sell is required")
});

const passwordSchema = yup.object().shape({
  password: yup.string().required("Password is required")
});

export {
  firstNameSchema,
  lastNameSchema,
  emailSchema,
  numberSchema,
  locationSchema,
  shopNameSchema,
  sellItemSchema,
  passwordSchema
};