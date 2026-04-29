import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    // 서버로부터 데이터 딱 한번만 가져오기
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1350")
      .then((response) => response.json())
      .then((json) => {
        setDatas(json.results);
        setIsLoading(false);
      });
  }, []);

  console.log(datas);

  return (
    <>
      <h1>Pokemon API</h1>
      <hr />
      {isLoading ? <p>IsLoading...</p> : null}
      <ul>
        {datas.map((data) => (
          <li>
            {data.name} <br /> {data.url}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;