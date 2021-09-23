import { takeEvery, all, call, put } from "redux-saga/effects";
import {
  getMoviesFailed,
  getMoviesDetailFailed,
  getMoviesSuccess,
  getMoviesDetailSucess,
} from "../actions/actions";

import { getMoviesFromAPI, getMovieDetailFromAPI } from "../apis/api-call";
import {
  GET_MOVIES_REQUEST,
  GET_MOVIES_DETAIL_REQUEST,
} from "../constant/app-constant";

function* getMovieList() {
  try {
    const data = yield call(getMoviesFromAPI);
    yield put(getMoviesSuccess(data.payload.results));
  } catch (error) {
    yield put(getMoviesFailed(error.message));
  }
}

function* getMovieDetail(action) {
  try {
    const data = yield call(getMovieDetailFromAPI, action.paramId);
    yield put(getMoviesDetailSucess(data.payload));
  } catch (error) {
    yield put(getMoviesDetailFailed(error.message));
  }
}

function* getMoviesWatcher() {
  yield takeEvery(GET_MOVIES_REQUEST, getMovieList);
}

function* getMovieDetailWatcher() {
  yield takeEvery(GET_MOVIES_DETAIL_REQUEST, getMovieDetail);
}

export default function* moviesSaga() {
  yield all([getMoviesWatcher(), getMovieDetailWatcher()]);
}
