import {createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Login/Register/Register";
import Login from "../Pages/Login/Register/Login";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Adpost from "../LayOuts/DashboardPages/AddPost/Adpost";
import PostDetails from "../Pages/PostDetails/PostDetails";
import LayOut from "../LayOuts/LayOut";
import UsersProfile from "../LayOuts/DashboardPages/UsersProfile/UsersProfile";
import PrivateRouts from "./PrivateRouts";
import UserPost from "../LayOuts/DashboardPages/UserPost/UserPost";
import AdminProfile from "../LayOuts/DashboardPages/AdminProfile/AdminProfile";
import ManageUsers from "../LayOuts/DashboardPages/ManageUsers/ManageUsers";
import Activites from "../LayOuts/DashboardPages/Activites/Activites";
import Announcement from "../LayOuts/DashboardPages/Announcement/Announcement";

import MemberShip from "../Pages/Mebership/MemberShip";
import Comment from "../LayOuts/DashboardPages/UserPost/Comment";

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
          path: '/membership',
          element: <PrivateRouts><MemberShip></MemberShip></PrivateRouts>
        },
        {
          path: '/details/:id',
          element:<PostDetails></PostDetails> ,
          loader: ({params}) => fetch(`https://forum-app-server-roan.vercel.app/posts/${params.id}`)
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
      element:<PrivateRouts><Dashboard></Dashboard></PrivateRouts> ,
      children: [
        // users dashboard

        {
          path: 'userProfile',
          element: <PrivateRouts><UsersProfile></UsersProfile></PrivateRouts> ,
          loader: ()=> fetch('https://forum-app-server-roan.vercel.app/users')

        },
      
        {
          path: 'addpost',
          element: <PrivateRouts> <Adpost></Adpost></PrivateRouts> 
        },
        {
          path: 'mypost',
          element: <PrivateRouts> <UserPost></UserPost> </PrivateRouts> 
        },
        {
          path: 'comment/:id',
          element: <PrivateRouts> <Comment></Comment>  </PrivateRouts> 
        },

        // admin dashboard

        {
          path: 'adminProfile',
          element: <AdminProfile></AdminProfile>,
          loader: ()=> fetch('https://forum-app-server-roan.vercel.app/users')
        },
        {
          path: 'manageusers',
          element: <ManageUsers></ManageUsers>
        },
        {
          path: 'activities',
          element: <Activites></Activites>
        },
        {
          path: 'announcement',
          element: <Announcement></Announcement>
        },


      ]
    },

  ]);






  export default router