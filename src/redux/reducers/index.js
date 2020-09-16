import { combineReducers } from "redux";
import errorsReducer from "./errorsReducer";
import moviesReducer from "./moviesReducer";

const rootReducers = combineReducers({
  errors: errorsReducer,
  movies: moviesReducer,
});

export default rootReducers;
