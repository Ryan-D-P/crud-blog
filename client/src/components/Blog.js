import { useParams } from "react-router-dom";

const Blog = () => {
    const { id } = useParams();

    return (
        <div className="Blog">
            <h2 style={ {color: "green"} }>{ `BLOG: ${id}` }</h2>
        </div>
    );
}
 
export default Blog;