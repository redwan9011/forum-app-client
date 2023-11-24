import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
    const [ showmenu, setShowMenu] = useState(false)
    const {user,  logOut} = useContext(AuthContext)
    const links = <>
        <li><NavLink>Home</NavLink></li>
        <li><NavLink>MemberShip</NavLink></li>
        <li><NavLink>Notification</NavLink></li>
    </>
    return (
        <div className="bg-red-200">
            <div className="navbar  max-w-6xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                           {
                            links
                           }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4">
                       {
                        links
                       }
                    </ul>
                </div>
                <div className="navbar-end">
                  {
                    user ? <div className="">
                        <img src={user?.photoURL} onClick={()=> setShowMenu(!showmenu)} alt=""  className="rounded-full h-14 w-14 cursor-pointer"/>
                        <div className={`text-center  bg-white px-3 py-3 text-black absolute  shadow-2xl ${ showmenu ? 'block z-30 top-[72px]' : 'hidden'}`}>
                            <h3>{user?.displayName}</h3>
                            <Link to='/dashboard'>Dashboard</Link> <br />
                            <button onClick={()=> logOut()}>Log Out</button>
                        </div>
                    </div> 
                    : 
                    <Link to='/login'> <button className="btn btn-outline">Join Us</button></Link>
                  }
                </div>
            </div>
        </div>
    );
};

export default Navbar;