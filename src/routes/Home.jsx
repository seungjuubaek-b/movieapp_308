import { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [datas, setDatas] = useState([]);

  const getMovies = async () => {
    const response = await fetch(`${import.meta.env.BASE_URL}db.json`);
    const json = await response.json();
    setDatas(json.movies ?? []);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div style={{ maxWidth: "960px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Movie json-server API</h1>
      <hr />
      {isLoading ? <p style={{ textAlign: "center" }}>불러오는 중...</p> : null}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",  // 3열 고정
        gap: "24px",
        marginTop: "24px",
      }}>
        {datas.map((data) => (
          <Movie
            key={data.id}
            id={data.id}
            poster={data.poster}
            genres={data.genres}
            title={data.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;