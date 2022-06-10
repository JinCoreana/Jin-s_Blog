import { createContext, useEffect, useState } from "react";
import useAxiosFetch from "../hooks/useAxiosFetch";

export const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const { data, fetchError, isLoading } = useAxiosFetch(
    "http://localhost:3500/posts"
  );

  useEffect(() => {
    setPosts(data);
  }, [data]);

  useEffect(() => {
    const filteredResults = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );
    if (filteredResults) setSearchResult(filteredResults.sort((a, b) => a > b));
  }, [posts, search]);

  return (
    <DataContext.Provider
      value={{
        search,
        setSearch,
        searchResult,
        fetchError,
        isLoading,
        posts,
        setPosts,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
