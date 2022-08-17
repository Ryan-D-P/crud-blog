import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Blogs from "./Blogs";
import Blog from "./Blog";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/blogs" element={ <Blogs /> } />
        <Route path="/blogs/:id" element={ <Blog /> } />
      </Routes>
    </div>
  );
}

export default App;