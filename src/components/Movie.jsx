import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, poster, title, genres }) {
  return (
    <>
      <h3>
        <Link to={`/movie/${id}`}>{title}</Link>
        {/* <a href="/movie">{title}</a> */}
      </h3>

      <img src={poster} alt="poster" width="400px" height="600px" />
      <ul>
        {genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
    </>
  );
}

Movie.propTypes = {
  id: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;