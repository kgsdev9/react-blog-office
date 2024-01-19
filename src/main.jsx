import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NavBar from './Pages/NavBar.jsx'//importation de la navBar 
import Blog from './Pages/Home/blog.jsx'
import ErrorPage from './errorPage.jsx'
import About from './Pages/About.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import BlogDetail from './Pages/Home/BlogDetail.jsx'
import ListeArticle from './Pages/Dashboard/articles/ListeArticle.jsx'

const router =  createBrowserRouter([
    {
      path:"/",
      element: <NavBar />,
      errorElement: <ErrorPage />,
      children: [
        {
          path:"/blog",
          element: <Blog />,
        },
        {
          path: "about",
          element: <About />,
        },

        {
          path: "detail/:id",
          element: <BlogDetail />,
        },

      ],
    },
    {
      path :'/dashboard',
      element:  <ListeArticle />,
      
    }

])


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
