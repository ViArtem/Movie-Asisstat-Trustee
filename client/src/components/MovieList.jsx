import React, { useEffect, useState } from "react";

const MovieList = () => {
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

            setMovieList(movieListResult.data);

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
  return (
    <div>
      {movieList.length ? (
        movieList.map((movie) => (
          <div key={movie.id}>
            <p>{movie.title}</p>
            <div
              onClick={() => findPossibleTime(movie.displayTime, movie.title)}
            >
              Дізнатись
            </div>
          </div>
        ))
      ) : (
        <div>No movies available.</div>
      )}
    </div>
  );
};

export default MovieList;
