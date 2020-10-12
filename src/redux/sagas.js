import constants from "./constants";
import { takeLatest,  all } from "redux-saga/effects";
import {
  getCategoryRequest
} from "./category/action";

function* watchActions() {
  yield takeLatest(constants.GET_CATEGORY_REQUEST, getCategoryRequest);
}

export default function* rootSaga() {
    yield all([watchActions()]);
  }