import axios from "axios";
import {
  ERROR,
  API_KEY,
  LANGUAGE,
  GET_MOVIES_REQUEST_SUCCESS,
  GET_MOVIES_DETAIL_SUCCESS,
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
      return { type: GET_MOVIES_REQUEST_SUCCESS, payload: response.data };
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
  console.info(paramId);
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
      return { type: GET_MOVIES_DETAIL_SUCCESS, payload: response.data };
    })
    .catch((error) => {
      return { type: ERROR, payload: error };
    });

  return response;
};
