import { combineReducers } from "redux";
import auth from "./reducer_auth";
import logs from "./reducer_logs";
import artist from "./reducer_artist";
import song from "./reducer_song";
import playlist from "./reducer_playlist";
import genre from "./reducer_genre";
import youtube from "./reducer_youtube";

export default combineReducers({
  auth,
  artist,
  song,
  playlist,
  genre,
  logs,
  youtube
});
