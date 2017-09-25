import { combineReducers } from "redux";
import auth from "./authReducer";
import logs from "./logsReducer";
import artist from "./artistReducer";
import song from "./songReducer";
import playlist from "./playlistReducer";
import genre from "./genreReducer";
import youtube from "./youtubeReducer";

export default combineReducers({
  auth,
  artist,
  song,
  playlist,
  genre,
  logs,
  youtube
});
