import * as yup from "yup";

const passwordRule = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
// min 5 char, 1 uppercase, 1 lowercase, 1number, 1 symbol

export const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

export const AdminSchema = yup.object().shape({
  email: yup.string().min(2, "Enter minimum 2 characters").required("Required"),
  password: yup.string().required("Required"),
});

export const UserRegistrationSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[a-zA-Z\s]+$/, "Only letters are allowed")
    .min(2, "Enter minimum 2 characters")
    .required("Required"),
  contact: yup
    .number()
    .min(1000000000, "Phone number must be 10 digit number")
    .max(9999999999, "Phone number must be 10 digit number")
    .required("Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup
    .string()
    .min(5, "1 uppercase, 1 number, 1 symbol")
    .max(16)
    .matches(passwordRule, "1 uppercase, 1 number, 1 symbol")
    .required("Required"),
  address: yup
    .string()
    .min(2, "Enter minimum 2 characters")
    .required("Required"),
  dob: yup
    .date()
    .max(new Date(), "Date of Birth cannot be in the future")
    .required("Date of Birth is required"),
  gender: yup
    .string()
    .min(2, "Enter minimum 2 characters")
    .required("Required"),
  profilePic: yup
    .mixed()
    .required("Please select an image")
    .test(
      "fileSize",
      "Image size is too large (max 5 MB)",
      (value) => !value || (value && value.size <= 5 * 1024 * 1024)
    ) //validation for maximum file size (5 MB)
    .test(
      "fileType",
      "Unsupported file format",
      (value) =>
        !value ||
        (value && ["image/jpeg", "image/png", "image/gif"].includes(value.type))
    ),
  nationality: yup
    .string()
    .min(2, "Enter minimum 2 characters")
    .required("Required"),
});

export const ForgotPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(5, "1 uppercase, 1 number, 1 symbol")
    .max(16)
    .matches(passwordRule, "1 uppercase, 1 number, 1 symbol")
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

export const UserAddCaseSchema = yup.object().shape({
  title: yup
    .string()
    .matches(/^[a-zA-Z\s]+$/, "Only letters are allowed")
    .min(2, "Enter minimum 2 characters")
    .required("Required"),
  description: yup
    .string()
    .min(2, "Enter minimum 2 characters")
    .required("Required"),
  type: yup.string().min(2, "Enter minimum 2 characters").required("Required"),
  datoOfIncident: yup
    .date()
    .max(new Date(), "Incident date cannot be in the future")
    .required("Incident date is required"),
  opponentName: yup
    .string()
    .matches(/^[a-zA-Z\s]+$/, "Only letters are allowed")
    .min(2, "Enter minimum 2 characters"),
  opponentAddress: yup.string().min(2, "Enter minimum 2 characters"),
  location: yup
    .string()
    .min(2, "Enter minimum 2 characters")
    .required("Required"),
  evidence: yup.mixed(),
});
