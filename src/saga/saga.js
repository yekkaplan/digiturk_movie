// export default function* () {
//   console.log('I am redux-saga');
// }

import { all } from "redux-saga/effects";
import moviesSaga from "./movies-saga";


// redux saga
export default function* () {
  yield all([moviesSaga()]);
}
