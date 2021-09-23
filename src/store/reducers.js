import {
  ERROR,
  GET_MOVIES_DETAIL_REQUEST,
  GET_MOVIES_DETAIL_SUCCESS,
  GET_MOVIES_REQUEST_SUCCESS,
  GET_MOVIES_REQUEST,
} from "../constant/app-constant";

/**
 * @param {Bool} isLoading -  for spin text.
 * @param {Array} movies -  list of movies
 * @param {Object} movieDetail -  detail of movie
 */
const INITIAL_STATE = {
  isLoading: false,
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
    case GET_MOVIES_REQUEST:
    case GET_MOVIES_REQUEST_SUCCESS:
      return { ...state, movies: action.payload, isLoading: false };
    case GET_MOVIES_DETAIL_REQUEST:
    case GET_MOVIES_DETAIL_SUCCESS:
      return { ...state, movieDetail: action.payload, isLoading: false };
    case ERROR:
      return { ...state, errorMessage: action.payload, isLoading: false };
    default:
      return state;
  }
};
