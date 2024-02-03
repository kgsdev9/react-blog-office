import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './errorPage.jsx'
import Dashboard from './Dashboard/index.jsx';
import Login from './Auth/login.jsx';
import Register from './Auth/register.jsx';
import ListeUsers from './Dashboard/Users/index.jsx';
import CreateUsers from './Dashboard/Users/create.jsx';

const router =  createBrowserRouter([
    {
      path:"/",
      element: <Dashboard />,
      errorElement: <ErrorPage />,
    },
    {
      path :'/sss', 
      element: "seess"
    },

    {
      path :'/connexion', 
      element: <Login />
    },

    {
      path :'/inscription', 
      element: <Register />
    },

    {
      path :'/users/liste', 
      element: <ListeUsers />
    },

    {
      path :'/users/create', 
      element: <CreateUsers />
    },

    {
      path :'/users/create', 
      element: <CreateUsers />
    },

])


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
