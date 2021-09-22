import axios from "axios";
import {
  IDLE_MOVIES,
  IDLE_MOVIESDETAIL,
  ERROR,
  API_KEY,
  LANGUAGE,
  GET_MOVIES,
  GET_MOVIES_DETAIL,
} from "../constant/app-constant";

/**
 *
 * @param {String} API_KEY  - moviedb key
 * @param {String} LANGUAGE  - locale language code
 * @returns
 */
export const getMoviesFromAPI = () => {
  var response = axios
    .get(
      "https://api.themoviedb.org/3/movie/popular?api_key=" +
        API_KEY +
        "&language=" +
        LANGUAGE +
        "&page=1"
    )
    .then((response) => {
      return { type: GET_MOVIES, payload: response.data };
    })
    .catch((error) => {
      return { type: ERROR, payload: error };
    });
  return response;
};
/**
 * @param {String} API_KEY  - moviedb key
 * @param {String} LANGUAGE  - locale language code
 * @param {String} paramId  - its movie id
 * @returns  -
 */
export const getMovieDetailFromAPI = (paramId) => {
  var response = axios
    .get(
      "https://api.themoviedb.org/3/movie/" +
        paramId +
        "?api_key=" +
        API_KEY +
        "&language=" +
        LANGUAGE
    )
    .then((response) => {
      return { type: GET_MOVIES_DETAIL, payload: response.data };
    })
    .catch((error) => {
      return { type: ERROR, payload: error };
    });

  return response;
};
