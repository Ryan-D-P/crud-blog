import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../css/Blog.css';

const Blog = () => {
    // ID URL param
    const { id } = useParams();
    // Blog state
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        // GET blog
        const getBlog = async () => {
            const response = await fetch(`http://localhost:4000/${id}`);
            const data = await response.json();
            console.log(data);
            setBlog(data);
        };

        getBlog();
    }, [id]);

    if (blog.length < 1) return null;

    return (
        <div className="Blog">
            <div className="current-blog">
                <div className="blog-header">
                    <h2>{ blog[0].title }</h2>
                    <p className="blog-author">{ `Author: ${blog[0].author}` }</p>
                </div>
                <div className="blog-body">
                    {
                        blog[0].content.map((paragraph) => <p>{ paragraph }</p>)
                    }
                </div>
            </div>
        </div>
    );
}
 
export default Blog;