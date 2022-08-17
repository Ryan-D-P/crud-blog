import { Routes, Route } from "react-router-dom";
import Blogs from "./Blogs";
import Blog from "./Blog";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/blogs" element={ <Blogs /> } />
        <Route path="/blogs/:id" element={ <Blog /> } />
      </Routes>
    </div>
  );
}

export default App;