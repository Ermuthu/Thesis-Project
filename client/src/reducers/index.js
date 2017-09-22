import { combineReducers } from "redux";
import authReducer from "./authReducer";
import logsReducer from "./logsReducer";
import spotifyReducer from "./spotifyReducer";

export default combineReducers({
  auth: authReducer,
  spotify: spotifyReducer,
  logs: logsReducer
});
