import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";


const Announcement = () => {
    const { user } = useContext(AuthContext)
    const axiossecure = useAxiosSecure()
    const handleAnnouncement = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const title = form.title.value;
        const description = form.description.value;
        const email = user?.email;
        const announcement = {
            name, image, title, description, email,
        }
        console.log(announcement);
        axiossecure.post('/announcement' , announcement)
        .then(res => {
            console.log(res.data);
            Swal.fire("Announcement Add Succesfully");
            form.reset()
        })
    }
    return (
        <div >
            <h1 className="text-center text-2xl font-bold my-8">Make your Announcement</h1>
            <form onSubmit={handleAnnouncement}>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold">Author Name</span>
                    </label>
                    <input type="text" name="name" placeholder="author name" className="input input-bordered" required />
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold">Author Image</span>
                    </label>
                    <input type="text" name="image" placeholder="author image" className="input input-bordered" required />
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold">Announcement Title</span>
                    </label>
                    <input type="text" name="title" placeholder="announcement title" className="input input-bordered" required />
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold">Announcement Description</span>
                    </label>
                    <textarea name="description" id="" cols="30" rows="10" className="input input-bordered" placeholder="announcement description"></textarea>
                </div>

                <input type="submit" value="Create Announcement" className="w-full bg-slate-700 rounded-md py-3 text-lg text-white cursor-pointer mt-5 hover:bg-slate-800" />


            </form>
        </div>
    );
};

export default Announcement;