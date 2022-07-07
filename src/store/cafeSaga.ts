import { call, put, takeLatest } from "redux-saga/effects";
import { customAxios } from "../http/customAxios";
import { cafeType, getCafeList, getCafeListFail, getCafeListSussecc } from "./cafe";
type responseType = {
  registeredCafe: cafeType[];
  unregisteredCafe: cafeType[];
};
export function* httpGetCafeList() {
  try {
    const res: responseType[] = yield call(customAxios, "/my", "GET");
    yield put({
      type: getCafeListSussecc,
      payload: res,
    });
  } catch (error) {
    yield put({
      type: getCafeListFail,
    });
  }
}

export function* watchGetCafeListSaga() {
  yield takeLatest(getCafeList, httpGetCafeList);
}
