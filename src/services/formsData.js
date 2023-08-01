import * as yup from "yup";

export const infoFormScheme = yup.object().shape({
  firstName: yup
    .string()
    .required("This field is required")
    .min(2, "Name is too short")
    .max(30, "Name is too long"),
  lastName: yup
    .string()
    .required("This field is required")
    .min(2, "Name is too short")
    .max(30, "Name is too long"),
  country: yup.string().required("This field is required"),
  phone: yup
    .number()
    .typeError("It's not a number")
    .required("This field is required")
    .positive()
    .integer(),
  email: yup.string().required("This field is required").email(),
  address: yup
    .string()
    .required("This field is required")
    .min(2, "Name is too short")
    .max(30, "Name is too long"),
  address2: yup.string(),
  dontCallMe: yup.bool(),
  comment: yup.string().max(500, "Name is too long"),
});

export const countryList = [
  { id: "UK", value: "Ukraine" },
  { id: "LV", value: "Latvia" },
  { id: "MD", value: "Moldova" },
  { id: "RO", value: "Romania" },
];

export const deliveryType = [
  {id: 'self', value: 'Self-delivery'},
  {id: 'post', value: 'Postal service'},
]
