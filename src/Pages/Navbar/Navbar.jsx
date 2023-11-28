import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { IoMdNotificationsOutline } from "react-icons/io";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
const Navbar = () => {
    const axiosSecure = useAxiosSecure()
    const [ showmenu, setShowMenu] = useState(false)
    const {user,  logOut} = useContext(AuthContext)
    const [ announcement, setAnnouncement] = useState([])
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/membership'>MemberShip</NavLink></li>
      
    </>

    useEffect(()=> {
        axiosSecure.get('/announcement')
        .then(res => {
           setAnnouncement(res.data)
        })
    },[axiosSecure])
    return (
        <div className="bg-slate-500 border-b">
            <div className="navbar  max-w-6xl mx-auto text-white md:px-20 px-10 lg:px-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 bg-black">
                           {
                            links
                           }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">DISPUTO</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4">
                       {
                        links
                       }
                    </ul>
                </div>
                <div className="navbar-end gap-6">

                    {
                        announcement.length > 0 ? 
                      <Link to='/announcement'>
                        <div className="relative">
                        <IoMdNotificationsOutline className="text-4xl "></IoMdNotificationsOutline>
                        <div className="bg-red-500  w-5 h-5 absolute top-0 right-0 rounded-full flex justify-center items-center p-1">
                        <span className="text-white text-xs">{announcement.length}</span>
                        </div>
                     </div>
                      </Link>
                     : 
                     ''
                    }
                   
                  {
                    user ? <div className="">
                        <img src={user?.photoURL} onClick={()=> setShowMenu(!showmenu)} alt=""  className="rounded-full h-14 w-14 cursor-pointer"/>
                        <div className={`text-center w-36  bg-white px-3 py-3 text-black absolute right-8 lg:right-16 md:right-10 overflow-hidden  shadow-2xl ${ showmenu ? 'block z-30 top-[72px]' : 'hidden'}`}>
                            <h3>{user?.displayName}</h3>
                            <Link to='/dashboard' className="hover:underline">Dashboard</Link> <br />
                            <button onClick={()=> logOut()} className=" hover:underline">Log Out</button>
                        </div>
                    </div> 
                    : 
                    <Link to='/login'> <button className="btn btn-outline border-white text-white">Join Us</button></Link>
                  }
                </div>
            </div>
        </div>
    );
};

export default Navbar;