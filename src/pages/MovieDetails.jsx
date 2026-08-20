import { useParams } from "react-router-dom";
function MovieDetails() {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <p>Movie ID: {id}</p>
    </div>
  );
}
export default MovieDetails;
