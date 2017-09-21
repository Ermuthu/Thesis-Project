import { combineReducers } from "redux";
import authReducer from "./authReducer";
import logsReducer from "./logsReducer";
import songReducer from "./songReducer";

export default combineReducers({
  auth: authReducer,
  song: songReducer,
  logs: logsReducer
});
