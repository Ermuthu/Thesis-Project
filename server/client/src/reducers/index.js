import { combineReducers } from "redux";
import authReducer from "./authReducer";
import spotifyReducer from "./spotifyReducer";

export default combineReducers({
  auth: authReducer,
  search: spotifyReducer
});
