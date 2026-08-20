import { useState, useEffect } from "react";
import { Route, Router, Routes } from "react-router-dom";
// import "./App.css";
import Moviecard from "./components/Moviecard";
import MovieDetails from "./pages/MovieDetails";
import Home from "./pages/Home";

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
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              movies={movies}
              setMovies={setMovies}
              search={search}
              setSearch={setSearch}
              loading={loading}
              error={error}
              getMovies={getMovies}
            ></Home>
          }
        ></Route>
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </>
  );
}

export default App;
