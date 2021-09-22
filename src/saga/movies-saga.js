import { takeEvery, all, call, put, takeLeading } from "redux-saga/effects";
import {
  getMovies,
  getMoviesDetail,
  getMoviesFailed,
  getMoviesDetailFailed,
} from "../actions/actions";

import { getMoviesFromAPI, getMovieDetailFromAPI } from "../apis/api-call";
import { GET_MOVIES, GET_MOVIES_DETAIL } from "../constant/app-constant";

function* getMovieList() {
  try {
    const data = yield call(getMoviesFromAPI);
    yield put(getMovies(data));
  } catch (error) {
    yield put(getMoviesFailed(error.message));
  }
}

function* getMovieDetail(paramId) {
  try {
    const data = yield call(getMovieDetailFromAPI, paramId);
    yield put(getMoviesDetail(data));
  } catch (error) {
    yield put(getMoviesDetailFailed(error.message));
  }
}

function* getMoviesWatcher() {
  yield takeEvery(GET_MOVIES, getMovieList);
}

function* getMovieDetailWatcher() {
  yield takeEvery(GET_MOVIES_DETAIL, getMovieDetail);
}

export default function* moviesSaga() {
  yield all([getMoviesWatcher(), getMovieDetailWatcher()]);
}
