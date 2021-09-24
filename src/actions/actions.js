import {
  GET_MOVIES_REQUEST,
  GET_MOVIES_REQUEST_SUCCESS,
  GET_MOVIES_FAILED,
  GET_MOVIES_DETAIL_REQUEST,
  GET_MOVIES_DETAIL_SUCCESS,
  GET_MOVIES_DETAIL_FAILED,
} from "../constant/app-constant";


export const getMovies = (payload) => ({
  type: GET_MOVIES_REQUEST,
  payload,
});
export const getMoviesSuccess = (payload) => ({
  type: GET_MOVIES_REQUEST_SUCCESS,
  payload,
});

export const getMoviesDetail = (paramId) => ({
  type: GET_MOVIES_DETAIL_REQUEST,
  paramId: paramId,
});
export const getMoviesDetailSucess = (payload) => ({
  type: GET_MOVIES_DETAIL_SUCCESS,
  payload,
});
export const getMoviesFailed = (payload) => ({
  type: GET_MOVIES_FAILED,
  payload,
});

export const getMoviesDetailFailed = (payload) => ({
  type: GET_MOVIES_DETAIL_FAILED,
  payload,
});
