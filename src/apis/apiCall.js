import axios from "axios";
import {
  IDLE_MOVIES,
  IDLE_MOVIESDETAIL,
  ERROR,
} from "../constant/app-constant";

/**
 *
 * @param {String} API_KEY  - moviedb key
 * @param {String} LANGUAGE  - locale language code
 * @returns
 */
export const getMoviesFromAPI = (API_KEY, LANGUAGE) => {
  var response = axios
    .get(
      "https://api.themoviedb.org/3/movie/popular?api_key=" +
        API_KEY +
        "&language=" +
        LANGUAGE +
        "&page=1"
    )
    .then((response) => {
      return { type: IDLE_MOVIES, payload: response.data };
    })
    .catch((error) => {
      return { type: ERROR, payload: error };
    });
  return response;
};
/**
 *
 * @param {String} API_KEY  - moviedb key
 * @param {String} LANGUAGE  - locale language code
 * @param {String} paramId  - its movie id
 * @returns  -
 */
export const getMovieDetailFromAPI = (API_KEY, LANGUAGE, paramId) => {
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
      return { type: IDLE_MOVIESDETAIL, payload: response.data };
    })
    .catch((error) => {
      return { type: ERROR, payload: error };
    });

  return response;
};
