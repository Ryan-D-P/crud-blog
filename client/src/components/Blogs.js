import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../css/Blogs.css';

const Blogs = () => {
    // Blogs state
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        // GET blogs
        const getBlogs = async () => {
            const response = await fetch("http://localhost:4000/");
            const data = await response.json();
            setBlogs(data);
        };

        getBlogs();
    }, []);

    return (
        <div className="Blogs">
            {
                blogs.length > 0 ? blogs.map((blog) => (
                    <Link to={ `/blogs/${blog._id}` } className="blog-container" key={ blog._id }>
                        <div className="blog-header">
                            <h2>{ blog.title }</h2>
                            <p className="blog-author">{ `Author: ${blog.author}` }</p>
                        </div>
                        <div className="blog-body">
                            <p>{ `${blog.content[0].slice(0, 200).trim()}...` }</p>
                        </div>
                    </Link>
                )) : null
            }
        </div>
    );
}
 
export default Blogs;