import { getMoviesFromAPI, getMovieDetailFromAPI } from "../apis/api-call";
import {
  GET_MOVIES,
  GET_MOVIES_FAILED,
  GET_MOVIES_DETAIL,
  GET_MOVIES_DETAIL_FAILED,
} from "../constant/app-constant";

export const getMovies = (payload) => ({
  type: GET_MOVIES,
  payload,
});

export const getMoviesDetail = (payload) => ({
  type: GET_MOVIES_DETAIL,
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
