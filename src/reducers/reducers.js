import {
  IDLE_MOVIES,
  BUSY,
  ERROR,
  IDLE_MOVIESDETAIL,
} from "../constant/app-constant";

/**
 * @param {Bool} isLoading -  for spin text.
 * @param {Array} movies -  list of movies
 * @param {Object} movieDetail -  detail of movie
 */
const INITIAL_STATE = {
  isLoading: true,
  movies: [],
  movieDetail: null,
  errorMessage: "",
};

/**
 *
 * @param {Any} state - App state
 * @param {Any} action -It contains method/object actions.
 * @returns
 */
export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BUSY:
      return { ...state, isLoading: true, errorMessage: "" };
    case IDLE_MOVIES:
      return { ...state, movies: action.payload, isLoading: false };
    case IDLE_MOVIESDETAIL:
      return { ...state, movieDetail: action.payload, isLoading: false };
    case ERROR:
      return { ...state, errorMessage: action.payload, isLoading: false };
    default:
      return state;
  }
};
