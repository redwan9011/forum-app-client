import { useEffect } from "react";
import { useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const Announcementsection = () => {
    const [ announcements, setAnnouncements] = useState([])
    const axiosPublic = useAxiosPublic()
    useEffect( ()=> {
        axiosPublic('/announcement')
        .then( res => {
            setAnnouncements(res.data)
        })
    }, [axiosPublic])
    return (
        <div>
            {
                announcements.length > 0 ? 
                <div>
                <h1 className="text-3xl font-bold text-center mt-5"> Announcement</h1>
                   <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  
                  {
                     announcements.map( announce => <div key={announce._id}>
        
                         <div className="my-4 shadow-xl p-8 ">
                             <h1 className="text-xl font-bold h-14"> {announce.title}</h1>
                             <p className="mt-2 text-sm md:text-base text-slate-600 h-48">{announce.description}</p>
                         </div>
        
                     </div>)
                 }
             </div>
             </div>
             : 
             ''
            }
        </div>
    );
};

export default Announcementsection;