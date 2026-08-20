import Moviecard from "../components/Moviecard";
import "./Home.css";
function Home({
  movies,
  setMovies,
  search,
  setSearch,
  loading,
  error,
  getMovies,
}) {
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
export default Home;
