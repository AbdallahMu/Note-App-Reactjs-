import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Base_URL } from "../lib/common";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const useSignUpForm = () => {
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const navigate = useNavigate()
  const fields = [
    {
      type: "text",
      id: "name",
      name: "name",
      placeholder: "Enter Your Name..",
      label: "Name",
    },
    {
      type: "email",
      id: "email",
      name: "email",
      placeholder: "Enter Your Email..",
      label: "Email",
    },
    {
      type: "password",
      id: "password",
      name: "password",
      placeholder: "Enter Your Password..",
      label: "Password",
    },
    {
      type: "number",
      id: "age",
      name: "age",
      placeholder: "Enter Your Age..",
      label: "Age",
    },
    {
      type: "tel",
      id: "phone",
      name: "phone",
      placeholder: "Enter Your Phone..",
      label: "Phone",
    },
  ];
  const initialValues = {
    email: "",
    password: "",
    name:"",
    age:"",
    phone:""
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Please enter a valid email address.")
      .required("Email is required."),

    password: Yup.string()
      .matches(
        /^[A-Z][A-Za-z0-9_]{6,9}$/,
        "Password must start with an uppercase letter and be 7-10 characters long."
      )
      .required("Password is required."),
    name:Yup.string().min(2).max(10).required(),
    age:Yup.number().min(18).max(99).required(),
    phone:Yup.string().matches(/^01[0125][0-9]{8}$/)
  });
  const onSubmit = (values) => {
    setLoading(true);
    axios
      .post(`${Base_URL}/users/signup`, values)
      .then((res) => {
        console.log(res);
        navigate("/login")
      })
      .catch((res) => {
        console.log(res);
        if (!res.response) {
          toast.error("Network Error");
        }
        setApiError(res.response.data.msg);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return { formik, fields, loading, apiError };
};

export default useSignUpForm;
