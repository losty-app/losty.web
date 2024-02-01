import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../layouts/loggedIn/shared/loadable/Loadable';
import EventsPage from 'src/views/events-page/EventsPage';
import AdminPage from 'src/views/admin-page/AdminPage';
import SchedulePage from 'src/views/schedule-page/SchedulePage';
import MyProfilePage from 'src/views/my-profile-page/MyProfilePage';

/* *** Layouts **** */
const LoggedInLayout = Loadable(lazy(() => import('../layouts/loggedIn/LoggedInLayout')));
const LoggedOutLayout = Loadable(lazy(() => import('../layouts/loggedOut/LoggedOutLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));

/* ****Pages***** */
const Dashboard = Loadable(lazy(() => import('../views/dashboard/Dashboard')));
const TypographyPage = Loadable(lazy(() => import('../views/utilities/TypographyPage')));
const Shadow = Loadable(lazy(() => import('../views/utilities/Shadow')));
const Error = Loadable(lazy(() => import('../views/authentication/Error')));
const Login = Loadable(lazy(() => import('../views/authentication/Login')));
const ConfirmationCode = Loadable(lazy(() => import('../views/authentication/ConfirmationCode')));

const Router = [
  {
    path: '/',
    element: <LoggedInLayout />,
    children: [
      { path: '/', element: <Navigate to="/schedule" /> },
      {
        path: '/dashboard',
        exact: true,
        element: <Dashboard />,
      },
      { path: '/schedule', exact: true, element: <SchedulePage /> },
      { path: '/events', exact: true, element: <EventsPage /> },
      { path: '/admin', exact: true, element: <AdminPage /> },
      { path: '/profile', exact: true, element: <MyProfilePage /> },
      { path: '/ui/typography', exact: true, element: <TypographyPage /> },
      { path: '/ui/shadow', exact: true, element: <Shadow /> },
    ],
  },
  {
    path: '/',
    element: <LoggedOutLayout />,
    children: [
      { path: '/verify', element: <ConfirmationCode /> },
      { path: '/login', element: <Login /> },
    ],
  },
  {
    path: '/',
    element: <BlankLayout />,
    children: [{ path: '/404', element: <Error /> }],
  },
  { path: '/*', element: <Navigate to="/404" /> },
];

export default Router;
