import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Detail() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const getMovie = async () => {
    const response = await fetch(`${import.meta.env.BASE_URL}db.json`);
    const json = await response.json();
    const seletedMovie = json.movies?.find((item) => item.id === id) ?? null;
    setMovie(seletedMovie);
  };
  useEffect(() => {
    getMovie();
  }, [id]);

  return (
    <div>
      <h1>영화 정보 상세 보기</h1>
      <h3>{movie.title}</h3>
      <img src={movie.poster} alt="poster" />
      <p>{movie.director}</p>
    </div>
  );
}

export default Detail;