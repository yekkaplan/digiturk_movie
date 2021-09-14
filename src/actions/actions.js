import axios from "axios";
import { Alert } from "react-bootstrap";
import {
  IDLE_MOVIES,
  BUSY,
  ERROR,
  API_KEY,
  LANGUAGE,
  IDLE_MOVIESDETAIL,
} from "../constant/app-constant";

export const getMovies = () => (dispatch) => {
  dispatch({ type: BUSY });
  axios
    .get(
      "https://api.themoviedb.org/3/movie/popular?api_key=" +
        API_KEY +
        "&language=" +
        LANGUAGE +
        "&page=1"
    )
    .then((response) => dispatch({ type: IDLE_MOVIES, payload: response.data }))
    .catch((error) => dispatch({ type: ERROR, payload: error }));
};

export const getMovieDetail = (paramId) => (dispatch) => {
  console.log(paramId);

  dispatch({ type: BUSY });
  axios
    .get(
      "https://api.themoviedb.org/3/movie/" +
        paramId +
        "?api_key=" +
        API_KEY +
        "&language=" +
        LANGUAGE
    )
    .then((response) =>
      dispatch({ type: IDLE_MOVIESDETAIL, payload: response.data })
    )
    .catch((error) => dispatch({ type: ERROR, payload: error }));
};
