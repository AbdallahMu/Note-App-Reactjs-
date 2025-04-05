import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Base_URL } from "../lib/common";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const useLoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const navigate = useNavigate()
  const fields = [
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
  ];
  const initialValues = {
    email: "",
    password: "",
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
  });
  const onSubmit = (values) => {
    setLoading(true);
    axios
      .post(`${Base_URL}/users/signin`, values)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        toast.success("Login Successfully")
        navigate("/")
      })
      .catch((res) => {
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

export default useLoginForm;
