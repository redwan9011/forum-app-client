import Navbar from "../Navbar/Navbar";
import Posts from "./Posts";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
             <div className="max-w-6xl mx-auto">
            <Posts></Posts>
        </div>
        </div>
    );
};

export default Home;