import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Detail.css";

function Detail() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  const getMovie = async () => {
    const response = await fetch(`${import.meta.env.BASE_URL}db.json`);
    const json = await response.json();
    const selectedMovie = json.movies?.find((item) => item.id === id) ?? null;
    setMovie(selectedMovie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, [id]);

  if (loading) return <div className="loading">불러오는 중...</div>;
  if (!movie) return <div className="loading">영화를 찾을 수 없습니다.</div>;

  return (
    <div className="detail-wrapper">
      {/* 상단 포스터 배너 */}
      <div className="detail-banner">
        <img src={movie.poster} alt={movie.title} className="detail-poster" />
        <div className="detail-banner-text">
          <p className="detail-tag">#추천영화 #지금봐야할영화</p>
          <h1 className="detail-title">{movie.title}</h1>
          <div className="detail-genres">
            {movie.genres?.map((g, i) => (
              <span key={i} className="genre-tag">#{g}</span>
            ))}
          </div>
        </div>
      </div>

      {/* 정보 카드 (노트 스타일) */}
      <div className="detail-card">
        <div className="card-spiral">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="spiral-hole" />
          ))}
        </div>
        <div className="card-content">
          <div className="info-row">
            <span className="info-label">제목</span>
            <span className="info-value">{movie.title}</span>
          </div>
          <div className="info-row">
            <span className="info-label">감독</span>
            <span className="info-value">{movie.director}</span>
          </div>
          <div className="info-row">
            <span className="info-label">장르</span>
            <span className="info-value">{movie.genres?.join(", ")}</span>
          </div>
          <div className="info-row">
            <span className="info-label">출연</span>
            <span className="info-value casting">{movie.casting?.join(", ")}</span>
          </div>
        </div>
      </div>

      <button className="back-btn" onClick={() => navigate("/")}>
        ← 목록으로 돌아가기
      </button>
    </div>
  );
}

export default Detail;