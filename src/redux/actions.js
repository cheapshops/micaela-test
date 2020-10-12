import { createAction } from "redux-actions";
import constants from "./constants";

export const getCategoryRequest = createAction(
  constants.GET_CATEGORY_REQUEST
);
export const getCategorySuccess = createAction(
  constants.GET_CATEGORY_SUCCESS
);
export const getCategoryError = createAction(
  constants.GET_CATEGORY_ERROR
);