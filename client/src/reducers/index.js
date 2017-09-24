import { combineReducers } from "redux";
import authReducer from "./authReducer";
import logsReducer from "./logsReducer";
import artistReducer from "./artistReducer";
import songReducer from "./songReducer";
import playlistReducer from "./playlistReducer";
import genreReducer from "./genreReducer";

export default combineReducers({
  auth: authReducer,
  artist: artistReducer,
  song: songReducer,
  playlist: playlistReducer,
  genre: genreReducer,
  logs: logsReducer
});
