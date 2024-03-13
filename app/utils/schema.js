import * as Yup from "yup";

export const LoginFormSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address.")
    .required("Email is required."),
  password: Yup.string()
    .matches(
      /^.{4,60}$/,
      "Your password must contain between 4 and 60 characters."
    )
    .required("Password is required."),
});
export const SignUpFormSchema = Yup.object().shape({
  name: Yup.string().required("Name is required."),
  email: Yup.string()
    .email("Please enter a valid email address.")
    .required("Email is required."),
  password: Yup.string()
    .matches(
      /^.{4,60}$/,
      "Your password must contain between 4 and 60 characters."
    )
    .required("Password is required."),
});
