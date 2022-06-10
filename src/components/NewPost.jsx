import { format } from "date-fns";
import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import api from "../api/posts";
import { useNavigate } from "react-router-dom";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [bodyArea, setBodyArea] = useState("");
  const { posts, setPosts } = useContext(DataContext);
  const navigate = useNavigate();

  const newPostSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const newPost = { id, title: title, datetime, body: bodyArea };
    try {
      const response = await api.post("/posts", newPost);
      setPosts([...posts, response.data]);
      setTitle("");
      setBodyArea("");
      navigate("/");
    } catch (err) {
      console.log(`Error:${err.message}`);
    }
  };
  return (
    <main className="NewPost">
      <h2>New Post</h2>
      <form className="newPostForm" onSubmit={newPostSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          id="postTitle"
          required
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label htmlFor="body">Post:</label>
        <textarea
          id="postBody"
          required
          value={bodyArea}
          onChange={(e) => {
            setBodyArea(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default NewPost;
