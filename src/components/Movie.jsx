import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// 장르별 이모티콘 매핑
const genreEmoji = {
  수사: "🔍",
  범죄: "🚔",
  드라마: "🎭",
  스릴러: "😱",
  액션: "💥",
  청춘: "🌸",
  로맨스: "💕",
  공포: "👻",
  오컬트: "🔮",
  서스펜스: "😰",
  미스터리: "🕵️",
};

function Movie({ id, poster, title, genres }) {
  return (
    <div style={{
      textAlign: "center",
      cursor: "pointer",
    }}>
      <Link to={`/movie/${id}`}>
        <img
          src={poster}
          alt={title}
          style={{
            width: "100%",
            height: "280px",
            objectFit: "cover",
            borderRadius: "10px",
            display: "block",
          }}
        />
      </Link>
      <h3 style={{ margin: "10px 0 6px", fontSize: "16px", fontWeight: "800" }}>
        <Link to={`/movie/${id}`} style={{ textDecoration: "none", color: "#1a1a1a" }}>
          🎬 {title}
        </Link>
      </h3>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "13px", color: "#222", fontWeight: "600" }}>
        {genres.map((genre, index) => (
          <li key={index}>
            {genreEmoji[genre] ?? "🎞️"} {genre}
          </li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;