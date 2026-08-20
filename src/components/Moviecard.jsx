import { Link } from "react-router-dom";
import "./Moviecard.css";
function Moviecard({ movie }) {
  return (
    <div className="card">
      <Link to={`/movie/${movie.id}`} className="card-link">
        <div className="card-top">
          {movie.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          )}
        </div>
        <div className="card-content">
          <div className="Title">
            <b>Title:</b> {movie.title} <br />
          </div>
          <div className="ReleaseDate">
            <b>Release Date:</b> {movie.release_date} <br />
          </div>
          <div className="Voteaverage">
            <b>Vote average:</b> {movie.vote_average} <br />
          </div>
          <div className="movieid">
            <b>id:</b> {movie.id} <br />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Moviecard;
