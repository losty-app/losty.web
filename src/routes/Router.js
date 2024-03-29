import React, { lazy } from "react";
import { Navigate } from "react-router-dom";
import Loadable from "../layouts/loggedIn/shared/loadable/Loadable";
import MyProfilePage from "src/views/my-profile-page/MyProfilePage";
import MainPage from "../views/main-page/MainPage";

/* *** Layouts **** */
const LoggedInLayout = Loadable(
  lazy(() => import("../layouts/loggedIn/LoggedInLayout"))
);
const LoggedOutLayout = Loadable(
  lazy(() => import("../layouts/loggedOut/LoggedOutLayout"))
);
const BlankLayout = Loadable(
  lazy(() => import("../layouts/blank/BlankLayout"))
);

/* ****Pages***** */
const Events = Loadable(lazy(() => import("../views/main-page/MainPage")));
const Error = Loadable(lazy(() => import("../views/authentication/Error")));
const Login = Loadable(lazy(() => import("../views/authentication/Login")));
const ConfirmationCode = Loadable(
  lazy(() => import("../views/authentication/ConfirmationCode"))
);

const Router = [
  {
    path: "/",
    element: <LoggedInLayout />,
    children: [
      { path: "/", exact: true, element: <MainPage /> },
      { path: "/profile", exact: true, element: <MyProfilePage /> },
    ],
  },
  {
    path: "/",
    element: <LoggedOutLayout />,
    children: [
      { path: "/verify", element: <ConfirmationCode /> },
      { path: "/login", element: <Login /> },
    ],
  },
  {
    path: "/",
    element: <BlankLayout />,
    children: [{ path: "/404", element: <Error /> }],
  },
  { path: "/*", element: <Navigate to="/404" /> },
];

export default Router;
