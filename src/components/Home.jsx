import Feed from "./Feed";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const Home = () => {
  const { searchResult, fetchError, isLoading } = useContext(DataContext);
  return (
    <main className="Home">
      {isLoading ? <p>Data is being loaded</p> : null}
      {!isLoading && fetchError ? <p> Error occurred. Please retry.</p> : null}
      {!isLoading && !fetchError ? (
        searchResult.length ? (
          <Feed />
        ) : (
          <p>No posts to display!</p>
        )
      ) : null}
    </main>
  );
};

export default Home;
