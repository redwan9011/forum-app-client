import {createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Login/Register/Register";
import Login from "../Pages/Login/Register/Login";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Adpost from "../LayOuts/DashboardPages/AddPost/Adpost";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Home></Home> ,
    },
    {
      path: "/login",
      element:<Login></Login> ,
    },
    {
      path: "/register",
      element:<Register></Register> ,
    },
    {
      path: "/dashboard",
      element:<Dashboard></Dashboard> ,
      children: [
        {
          path: 'addpost',
          element: <Adpost></Adpost>
        }
      ]
    },

  ]);






  export default router