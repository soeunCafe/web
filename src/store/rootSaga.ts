import { all, fork } from "redux-saga/effects";
import { watchGetCafeListSaga } from "./cafeSaga";
export default function* rootSaga() {
  yield all([fork(watchGetCafeListSaga)]);
}
