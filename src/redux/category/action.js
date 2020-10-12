import * as actions from "../actions";
import { call, put } from "redux-saga/effects";
import { fireApi } from "../../services";

export function* getCategoryRequest(action) {
  const header = {};
  try {
    const response = yield call(
      fireApi,
      "GET",
      `/api.json`,
      action.payload,
      header
    );
    if (response) {
      yield put(actions.getCategorySuccess(response.data));
    }
  } catch (e) {
    yield put(actions.getCategoryError(e.response.data));
  }
}