function Moviecard({ movies, setMovies, search, setSearch, getMovies }) {
  return (
    <div>
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

      <div>
        {movies.map((Movie) => (
          <div key={Movie.id}>
            {Movie.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500${Movie.poster_path}`}
                alt={Movie.title}
              />
            )}
            <br />
            <b>Title:</b> {Movie.title} <br />
            <b>Release Date:</b> {Movie.release_date} <br />
            <b>Vote average:</b> {Movie.vote_average} <br />
            <b>id:</b> {Movie.id} <br />
            <br />
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Moviecard;
