import { Link, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="grid grid-cols-12 gap-10 max-w-6xl mx-auto">
            <div className="col-span-3 bg-slate-500 h-screen text-white  ">
                <div className="mt-10 flex flex-col items-center text-xl gap-3">
                <Link> My Profile</Link>
                <Link to='/dashboard/addpost'> Add Post</Link>
                <Link> My Post</Link>

                <div className="divider divider-neutral"></div>

                <Link to='/'> Home</Link>
                </div>

                
            </div>

            <div className="col-span-9">

                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;