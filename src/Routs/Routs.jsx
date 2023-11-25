import {createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Login/Register/Register";
import Login from "../Pages/Login/Register/Login";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Adpost from "../LayOuts/DashboardPages/AddPost/Adpost";
import PostDetails from "../Pages/PostDetails/PostDetails";
import LayOut from "../LayOuts/LayOut";
import UsersProfile from "../LayOuts/DashboardPages/UsersProfile/UsersProfile";

const router = createBrowserRouter([
    {
      path: "/",
      element:<LayOut></LayOut> ,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/details/:id',
          element:<PostDetails></PostDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/posts/${params.id}`)
        }
      ]
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
        // users dashboard

        {
          path: 'userProfile',
          element: <UsersProfile></UsersProfile>,
          loader: ()=> fetch('http://localhost:5000/users')

        },
        {
          path: 'addpost',
          element: <Adpost></Adpost>
        },


      ]
    },

  ]);






  export default router