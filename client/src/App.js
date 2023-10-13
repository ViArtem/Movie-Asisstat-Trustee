import React, { useEffect, useState } from "react";
import axios from "axios";

import "./styles/App.css";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [isAuth, setIsAuth] = useState(false);
  const [authResult, setAuthResult] = useState("");
  const [aboutFilm, setAboutFilm] = useState(false);

  const [filmTitle, setFilmTitle] = useState("");
  const [filmTime, setFilmTime] = useState([]);

  useEffect(() => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const params = urlParams.get("authResult");

      if (params) {
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

  async function findPossibleTime(displayTime, title) {
    try {
      const availableTime = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/movie-schedule/get/possible-movie-time?authResult=${authResult}`,
        { displayTime }
      );

      setFilmTitle(title);
      setFilmTime(availableTime.data);
      setAboutFilm(true);
    } catch (error) {
      alert(error);
    }
  }

  async function saveEventToCalendar(title, startTime, endTime) {
    try {
      await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/calendar/create-event?authResult=${authResult}`,
        { title, startTime, endTime }
      );

      setAboutFilm(false);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="App">
      <h1 className="appTitle">Movie planner</h1>
      {!isAuth ? (
        <form
          action={`${process.env.REACT_APP_SERVER_URL}/google`}
          method="get"
        >
          <input className="signIn" type="submit" value="Увійти" />
        </form>
      ) : (
        ""
      )}
      {!aboutFilm ? (
        <div className="filmListBlock">
          <h2 className="filmListBlockHEad">Доступні фільми</h2>
          {movieList.length ? (
            movieList.map((movie) => (
              <div className="movieListElm" key={movie.id}>
                <h3 className="movieListElmPar">{movie.title}</h3>
                <div
                  className="findButton"
                  onClick={() =>
                    findPossibleTime(movie.displayTime, movie.title)
                  }
                >
                  Запланувати час
                </div>
              </div>
            ))
          ) : (
            <div className="noMovie">Фільми не доступні, увійдіть в акаунт</div>
          )}
        </div>
      ) : (
        <div className="filmListBlock">
          <h2 className="filmListBlockHEad">{filmTitle}</h2>
          <h3 className="filmListBlockSubtitle">
            Можливий час перегляду фільму врахувуючи ваш графік
          </h3>
          {filmTime.length ? (
            filmTime.map((time) => {
              return (
                <div className="movieDetail" key={`${time.start}-${time.end}`}>
                  <p className="movieDetailPar">Початок: {time.start}</p>
                  <p className="movieDetailPar">Кінець: {time.end}</p>
                  <div
                    className="movieDetailButton"
                    onClick={() => {
                      saveEventToCalendar(filmTitle, time.start, time.end);
                    }}
                  >
                    Заберегти в календар
                  </div>
                </div>
              );
            })
          ) : (
            <p className="noMovie">Немає доступних сеансів</p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
