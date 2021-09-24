
import { all } from "redux-saga/effects";
import moviesSaga from "./movies-saga";


/**
 * Redux all saga
 */
// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
  yield all([moviesSaga()]);
}
