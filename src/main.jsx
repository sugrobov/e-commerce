import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/root";
import About from "./Pages/About";
import FeedBack from "./Pages/FeedBack";
import Store from "./Pages/Store";

import ErrorPage from "./Pages/ErrorPage";
// import Index from "./Pages/Index";
import Main from "./components/Main";
import Details from "./components/Details";
import { Provider } from "react-redux";
import store from "./app/store";

import CheckOut from "./components/CheckOut";
import { useFetch } from "./utils";
import { API } from "./constants";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Main />

      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/feedback",
        element: <FeedBack />
      },

      {
        path: "/store",
        element: <Store />
      },
      {
        path: "/products/details/:Id",
        element: <Details />
      },
      {
        path: "/checkout",
        element: <CheckOut />
      }
    ]
  },



])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>

  </React.StrictMode>,
)
