import { handleActions } from "redux-actions";
import update from "immutability-helper";
import constants from "../constants";

const initialState = {
  categoryList: {
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
    data: {},
  },
};

const getCategoryRequest = (state, action) =>
  update(state, {
    categoryList: {
      isLoading: { $set: true },
      isSuccess: { $set: false },
      isError: { $set: false },
      message: { $set: "" },
    },
  });

const getCategorySuccess = (state, action) =>
  update(state, {
    categoryList: {
      isLoading: { $set: false },
      isSuccess: { $set: true },
      isError: { $set: false },
      message: { $set: "" },
      data: { $set: action.payload },
    },
  });

const getCategoryError = (state, action) =>
  update(state, {
    categoryList: {
      isLoading: { $set: false },
      isSuccess: { $set: false },
      isError: { $set: true },
      message: { $set: action.payload },
    },
  });


export default handleActions(
  {
    [constants.GET_CATEGORY_REQUEST]: getCategoryRequest,
    [constants.GET_CATEGORY_SUCCESS]: getCategorySuccess,
    [constants.GET_CATEGORY_ERROR]: getCategoryError,
  },
  initialState
);