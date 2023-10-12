import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [isAuth, setIsAuth] = useState(false);
  const [authResult, setAuthResult] = useState("");

  useEffect(() => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const params = urlParams.get("authResult");

      if (params) {
        const result = JSON.parse(params);
        localStorage.setItem("token", result.access);

        (async function getResult() {
          try {
            const movieListResult = await axios.get(
              `${process.env.REACT_APP_SERVER_URL}/movie-apis/get/list`
            );

            setMovieList(movieListResult.data); // Оновлюємо стан

            setIsAuth(true);
            setAuthResult(params);
          } catch (error) {
            console.error("Помилка при завантаженні списку фільмів:", error);
          }
        })();
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  async function getListFreeDaysFromGoogleCalendar() {
    await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/movie-apis/get/list?authResult=${authResult}`
    );
  }

  async function findPossibleTime(displayTime) {
    try {
      axios.post(
        `${process.env.REACT_APP_SERVER_URL}/movie-apis/get/list?authResult=${authResult}`
      );
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="App">
      <h1>Movie planner</h1>
      {!isAuth ? (
        <form
          action={`${process.env.REACT_APP_SERVER_URL}/google`}
          method="get"
        >
          <input type="submit" value="Press to log in" />
        </form>
      ) : (
        ""
      )}

      <div>
        {movieList.length ? (
          movieList.map((movie) => (
            <div key={movie.id}>
              <p>{movie.title}</p>
              <div onClick={() => findPossibleTime(movie.displayTime)}>
                Дізнатись
              </div>
            </div>
          ))
        ) : (
          <div>No movies available.</div>
        )}
      </div>
    </div>
  );
}

export default App;
