
import Announcementsection from "./Announcementsection";
import Banner from "./Banner";
import Posts from "./Posts";
import Tags from "./Tags";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
          <div className="max-w-6xl mx-auto">
          <Tags></Tags>
          </div>
             <div className="max-w-6xl mx-auto">
            <Posts></Posts>
            <Announcementsection></Announcementsection>
        </div>
       
        </div>
    );
};

export default Home;