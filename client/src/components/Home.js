import { useState, useEffect } from "react";

const Home = () => {
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
        <main className="Home">
            {
                blogs.length > 0 ? blogs.map((blog) => (
                    <div className="blog-container" key={ blog._id }>
                        <div class="blog-header">
                            <h2>{ blog.title }</h2>
                            <p className="blog-author">{ `Author: ${blog.author}` }</p>
                        </div>
                        <div className="blog-body">
                            {
                                blog.content.map((paragraph) => (
                                    <p>{ paragraph }</p>
                                ))
                            }
                        </div>
                    </div>
                )) : null
            }
        </main>
    );
}
 
export default Home;