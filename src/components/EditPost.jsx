import { format } from "date-fns";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import api from "../api/posts";

const EditPost = () => {
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");
  const { id } = useParams();
  const { posts, setPosts } = useContext(DataContext);
  const post = posts.find((post) => post.id.toString() === id);
  const navigate = useNavigate();

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditTitle, setEditBody]);

  const editPostSubmit = async (id) => {
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const editedPost = { id, title: editTitle, datetime, body: editBody };
    try {
      const response = await api.patch(`/posts/${id}`, editedPost);
      setPosts(posts.map((post) => (post.id === id ? response.data : post)));
      setEditTitle("");
      setEditBody("");
      navigate("/");
    } catch (err) {
      console.log(`Error:${err.message}`);
    }
  };
  return (
    <main className="NewPost">
      {editTitle && (
        <>
          <h2>Edit Post</h2>
          <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="title">Title:</label>
            <input
              id="postTitle"
              required
              type="text"
              placeholder="Title"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <label htmlFor="postBody">Post:</label>
            <textarea
              id="postBody"
              required
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
            />
            <button onClick={() => editPostSubmit(post.id)} type="submit">
              Submit
            </button>
          </form>
        </>
      )}
      {!editTitle && (
        <>
          <h2>Post Not Found</h2>
          <p>Well, that's disappointing.</p>
          <p>
            <Link to="/">Go back to main page</Link>
          </p>
        </>
      )}
    </main>
  );
};

export default EditPost;
