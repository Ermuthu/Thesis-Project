import { combineReducers } from "redux";
import authReducer from "./authReducer";
import logsReducer from "./logsReducer";
import spotifyReducer from "./spotifyReducer";
import songReducer from "./songReducer";

export default combineReducers({
  auth: authReducer,
  spotify: spotifyReducer,
  song: songReducer,
  logs: logsReducer
});
