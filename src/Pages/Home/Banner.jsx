import { FaSearch } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="bg-slate-500 h-[60vh] flex flex-col justify-center items-center">
            <h1 className="text-white text-2xl md:text-4xl font-bold">WELCOME TO DISPUTO FORUM</h1>
            <p className="text-white text-lg md:text-2xl mt-2 font-thin">The most popular forum on the internet!</p>

            <div className="">
                <div className="join mt-6">
                    <input className=" bg-slate-600 text-white placeholder:text-white md:placeholder:text-xl  join-item w-64 md:w-96 px-4 py-3 md:py-4" placeholder="Enter a keyword..." />
                    <button className=" join-item bg-cyan-600 px-5 md:px-6 text-white"> <FaSearch></FaSearch></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;