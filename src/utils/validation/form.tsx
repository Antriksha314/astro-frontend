import * as yup from "yup";
import { LoginFormInput, RegisterFormInput } from "../inputs/form";

export const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email(LoginFormInput.email.invalid)
    .required(LoginFormInput.email.required),
  password: yup
    .string()
    .min(8, LoginFormInput.password.regex)
    .required(LoginFormInput.password.regex),
});

export const RegisterSchema = yup.object().shape({
  firstName: yup
    .string()
    .required(RegisterFormInput.firstName.required)
    .matches(
      /^(?:[A-Za-z]+(?:[-' ][A-Za-z]+)*)?$/,
      RegisterFormInput.firstName.regex
    ),
  lastName: yup
    .string()
    .required(RegisterFormInput.lastName.required)
    .matches(
      /^(?:[A-Za-z]+(?:[-' ][A-Za-z]+)*)?$/,
      RegisterFormInput.lastName.regex
    ),
  email: yup
    .string()
    .email(RegisterFormInput.email.invalid)
    .required(RegisterFormInput.email.required),
  password: yup
    .string()
    .min(8, RegisterFormInput.password.regex)
    .required(RegisterFormInput.password.required),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], RegisterFormInput.confirmPassword.match)
    .required(RegisterFormInput.confirmPassword.required),
});
