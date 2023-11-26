import { Link, Outlet } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin/useAdmin";


const Dashboard = () => {
    // const isAdmin = true
    const [isAdmin] = useAdmin()
    return (
        <div className="grid grid-cols-12 gap-10 max-w-6xl mx-auto">
            <div className="col-span-3 bg-slate-500 min-h-screen text-white  ">
                <div className="mt-10 flex flex-col items-center text-xl gap-3">
                    {
                        isAdmin ? <div className="mt-10 flex flex-col items-center text-xl gap-3">
                            <Link to='/dashboard/adminProfile' className="hover:underline"> Admin Profile</Link>
                            <Link to='/dashboard/manageusers' className="hover:underline"> Manage Users</Link>
                            <Link to='/dashboard/activities' className="hover:underline"> Activities</Link>
                            <Link to='/dashboard/announcement' className="hover:underline"> Make Announncement</Link>
                        </div>
                            :
                            <div className="mt-10 flex flex-col items-center text-xl gap-3">

                                <Link to='/dashboard/userProfile' className="hover:underline"> My Profile</Link>
                                <Link to='/dashboard/addpost' className="hover:underline"> Add Post</Link>
                                <Link to='/dashboard/mypost' className="hover:underline"> My Post</Link>

                            </div>
                    }
                    <div className="divider divider-neutral"></div>

                    <Link to='/' className="hover:underline"> Home</Link>
                </div>


            </div>

            <div className="col-span-9">

                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;