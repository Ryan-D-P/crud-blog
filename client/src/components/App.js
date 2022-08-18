import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Blogs from "./Blogs";
import Blog from "./Blog";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/blogs" element={ <Blogs /> } />
          <Route path="/blogs/:id" element={ <Blog /> } />
        </Routes>
      </main>
    </div>
  );
}

export default App;