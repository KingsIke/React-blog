import { useState } from "react";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending, setIsPending] = useState(false);

  const navigate = useNavigate();
  // const [auth, setAuth] = useState("mario");

  // const handleAuth = (e) => {
  //   setAuth(e.target.value);
  //   console.log(e.target.value);
  // };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    console.log(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
    console.log(e.target.value);
  };
  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      alert("New Blog Added");
      setIsPending(false);
    });

    navigate("/");
  };
  return (
    <div className="create">
      <h1>Add New Blog</h1>

      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={handleTitleChange}
        />

        <label>Blog Body:</label>
        <textarea required value={body} onChange={handleBodyChange}></textarea>

        <label> Blog Author </label>
        {/* <select value={auth} onChange={handleAuth}>
          <option value="mario">Mario</option>
          <option value="yahio">Yahio</option>
        </select> */}
        <input
          type="text"
          required
          value={author}
          onChange={handleAuthorChange}
        />

        {!isPending && <button> Add Blog</button>}
        {isPending && <button disabled> Adding Blog ...</button>}
      </form>
    </div>
  );
};

export default Create;
