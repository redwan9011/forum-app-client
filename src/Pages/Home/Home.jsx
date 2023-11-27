
import Banner from "./Banner";
import Posts from "./Posts";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
             <div className="max-w-6xl mx-auto">
            <Posts></Posts>
        </div>
       
        </div>
    );
};

export default Home;