import { useParams } from "react-router-dom";
import useFetch from "../Usefetch/useFetch";
import IconLoading from "../IconLoading/IconLoading";
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: blog,
    error,
    loading,
  } = useFetch(`http://localhost:8000/blogs/${id}`);
  const handleClick = (e) => {
    fetch(`http://localhost:8000/blogs/${blog.id}`, { method: "DELETE" }).then(
      () => {
        alert("Deleted successful");
        navigate("/");
      }
    );
  };
  return (
    <div className="blog-details">
      <div>
        {loading ? (
          <div>
            <IconLoading />
            {error && <div> {error} </div>}
          </div>
        ) : (
          <div className="home">
            {blog && (
              <article>
                <h1> {blog.title}</h1>
                <p>Written By {blog.author}</p>
                <div>{blog.body}</div>
                <button onClick={handleClick}>Delete</button>
              </article>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogDetails;
