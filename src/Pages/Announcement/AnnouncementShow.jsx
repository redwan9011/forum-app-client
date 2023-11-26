import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const AnnouncementShow = () => {
    const axiosSecure = useAxiosSecure()
    const [ announcement, setAnnouncement] = useState([])
    useEffect(()=> {
        axiosSecure.get('/announcement')
        .then(res => {
           setAnnouncement(res.data)
        })
    },[axiosSecure])
    return (
        <div className=" my-8 max-w-4xl mx-auto">
            {
                announcement.map( announce => <div key={announce._id}>

                    <div className="my-4 shadow-xl p-8 ">
                        <h1 className="text-xl font-bold"> {announce.title}</h1>
                        <p className="mt-2 text-slate-600">{announce.description}</p>
                    </div>

                </div>)
            }
        </div>
    );
};

export default AnnouncementShow;