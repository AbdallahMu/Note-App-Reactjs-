import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../components/pages/Home/Home";
import AuthLayout from "../Layouts/AuthLayout/AuthLayout";
import Login from "../components/pages/Login/Login";
import Signup from "../components/pages/Signup/Signup";
import InverceProtectedRoute from "../components/InverceProtectedRoute/InverceProtectedRoute";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";

export const routes = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: (
          <InverceProtectedRoute>
            <Login />
          </InverceProtectedRoute>
        ),
      },
      {
        path: "signup",
        element: (
          <InverceProtectedRoute>
            <Signup />
          </InverceProtectedRoute>
        ),
      },
    ],
  },
]);
