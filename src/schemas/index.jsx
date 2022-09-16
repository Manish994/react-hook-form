import * as Yup from "yup";

const validationSchema = Yup.object({
  firstname: Yup.string()
    .min(2, "First Name is Minimum 2 Characters")
    .max(6, "First Name is Minimum 6 charaacters")
    .required("First Name is Required !"),

  lastname: Yup.string()
    .min(2, "Last Name is Minimun 2 Characters")
    .max(6, "Last Name is Minimum 6 Characters")
    .required("Last Name is Required"),

  gender: Yup.string().required("Gender is Required"),
  phonenumber: Yup.string()
    .min(10, "Enter 10 digit Phone Number")
    .max(10, "Enter 10 digit Phone Number")
    .required("Phone Number is Required"),
  email: Yup.string()
    .email("Please enter valid email address")
    .required("Email is Required"),

  password: Yup.string()
    .min(6, "The Password must be six digit Characters")
    .required("Password is Required"),

  confirmpassword: Yup.string()
    .required("Confirm Password is Required")
    .oneOf([Yup.ref("password")], "The password does not match"),
});

export { validationSchema };
