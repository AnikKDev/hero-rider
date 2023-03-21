import Registration from "../Pages/Authentication/Registration";
import ChooseJoinState from "../Pages/Authentication/ChooseJoinState";
import { createBrowserRouter } from "react-router-dom";
import Signin from "../Pages/Authentication/Signin";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Homepage from "../Pages/Homepage/Homepage";
import Main from "../Pages/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/home",
        element: <Homepage />,
      },
      {
        path: "/join-as",
        element: <ChooseJoinState />,
      },
      {
        path: "/register",
        element: <Registration />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
    ],
  },
]);

export default router;
