import React from "react";
import { Navigate } from "react-router-dom";

const InverceProtectedRoute = ({ children }) => {
  if (localStorage.getItem("token")) return <Navigate to={"/"} />;
  return children;
};

export default InverceProtectedRoute;
