import React, { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import api from "../api/posts";

const PostPage = () => {
  const { posts, setPosts } = useContext(DataContext);
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  const navigate = useNavigate();

  const onClickDelete = async (id) => {
    const newPosts = posts.filter((post) => post.id !== id);
    try {
      await api.delete(`/posts/${id}`);
      setPosts(newPosts);
      navigate("/");
    } catch (err) {
      console.log(`Error:${err.message}`);
    }
  };

  return (
    <main className="PostPage">
      <article className="post">
        {post && (
          <>
            <h2>{post.title}</h2>
            <p className="postDate">{post.datetime}</p>
            <p className="postBody">{post.body}</p>
            <button className="edit">
              <Link to={`../edit/${id}`}>Edit</Link>
            </button>
            <button className="delete" onClick={() => onClickDelete(post.id)}>
              Delete
            </button>
          </>
        )}
      </article>
    </main>
  );
};

export default PostPage;
