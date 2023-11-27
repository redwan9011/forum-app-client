
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const AnnouncementShow = () => {
    const axiosSecure = useAxiosSecure()
    const{ data : announcement =[], isLoading} = useQuery({
        queryKey: ['cart' ],
        queryFn: async ()=> {
            const res = await  axiosSecure(`/announcement`)
            return res.data
        }
    })
 if(isLoading){
    return <div className="h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
    </div>
 }
    return (
        <div className=" my-8 max-w-4xl mx-auto px-8 md:px-8 lg:px-0">
            {
                announcement.map( announce => <div key={announce._id}>

                    <div className="my-4 shadow-xl p-8 ">
                        <h1 className="text-xl font-bold"> {announce.title}</h1>
                        <p className="mt-2 text-sm md:text-base text-slate-600">{announce.description}</p>
                    </div>

                </div>)
            }
        </div>
    );
};

export default AnnouncementShow;