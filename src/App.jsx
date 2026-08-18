import { useState, useEffect } from "react";
// import "./App.css";
import Moviecard from "./components/Moviecard";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const getMovies = async () => {
    setLoading(true);
    setError("");
    try {
      let url;
      if (search === "") {
        url = "https://api.themoviedb.org/3/movie/popular";
      } else {
        url = `https://api.themoviedb.org/3/search/movie?query=${search}`;
      }
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
        },
      });
      const data = await response.json();
      setMovies(data.results);
    } catch (e) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="whole">
      <div className="searchAndClick">
        <input
          type="search"
          name="search"
          id="Search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button onClick={getMovies} type="button">
          Search
        </button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="movie-grid">
          {movies.map((movie) => (
            <Moviecard
              key={movie.id}
              movie={movie}
              movies={movies}
              setMovies={setMovies}
              search={search}
              setSearch={setSearch}
              getMovies={getMovies}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
// <Moviecard
// movies = { movies };
// setMovies = { setMovies };
// search = { search };
// setSearch = { setSearch };
// getMovies = { getMovies };
// ></Moviecard>
