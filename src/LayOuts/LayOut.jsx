import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";



const LayOut = () => {
    return (
        <div>
            <Navbar></Navbar>
            
            <div className="">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default LayOut;