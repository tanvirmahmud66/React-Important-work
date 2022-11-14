
import * as Yup from "yup";

export const SignUpSchema = Yup.object({
  firstName: Yup.string("Enter Your FirstName")
    .min(3, "At least 3 character")
    .required("FirstName is required"),
  lastName: Yup.string("Enter Your lastName")
    .min(3, "At least 3 character")
    .required("LastName is required"),
  email: Yup.string("Enter your email")
    .email("Enter valid email")
    .required("Email is required"),
  password: Yup.string("Enter Password")
    .min(6, "At least 6 character")
    .required("Password is required"),
  confirm_password: Yup.string()
    .required("password must match")
    .oneOf([Yup.ref("password"), null],"password must match"),
});
