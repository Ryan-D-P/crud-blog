import { Link } from "react-router-dom";
import "../css/Home.css";

const Home = () => {
    return (
        <div className="Home">
            <h2 className="home-title">HOMEPAGE</h2>
            <Link to="/blogs" className="blogs-link">
                <p>Blogs...</p>
            </Link>
        </div>
    );
}
 
export default Home;