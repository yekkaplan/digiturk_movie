import {
  GET_MOVIES,
  BUSY,
  ERROR,
  GET_MOVIES_DETAIL,
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
 * @param {Any} state - Includes application state
 * @param {Any} action -It contains method/object actions.
 * @returns - it returns state again after state has been processed
 */
export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BUSY:
      return { ...state, isLoading: true, errorMessage: "" };
    case GET_MOVIES:
      return { ...state, movies: action.payload, isLoading: false };
    case GET_MOVIES_DETAIL:
      return { ...state, movieDetail: action.payload, isLoading: false };
    case ERROR:
      return { ...state, errorMessage: action.payload, isLoading: false };
    default:
      return state;
  }
};
