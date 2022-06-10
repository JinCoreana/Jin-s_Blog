import React from "react";
import Post from "./Post";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const Feed = () => {
  const { searchResult } = useContext(DataContext);
  return (
    <div>
      {searchResult.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;
