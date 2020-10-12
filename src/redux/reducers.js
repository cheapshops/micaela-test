import { combineReducers } from "redux";
import category from "./category/reducer";

const appReducer = combineReducers({
    category
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;