import { getMoviesFromAPI, getMovieDetailFromAPI } from "../apis/api-call";
import { API_KEY, LANGUAGE } from "../constant/app-constant";

/**
 *
 * @returns - dispatch  movies reducers with payload
 */
export const getMovies = () => async (dispatch) => {
  var response = await getMoviesFromAPI(API_KEY, LANGUAGE);
  dispatch({ type: response.type, payload: response.payload });
};

/**
 *
 * @returns - dispatch movieDetail reducers with payload
 */
export const getMovieDetail = (paramId) => async (dispatch) => {
  var response = await getMovieDetailFromAPI(API_KEY, LANGUAGE, paramId);

  dispatch({ type: response.type, payload: response.payload });
};
