import { FETCH_PLAYLIST, SELECTED_PLAYLIST } from "../actions/constants";

export default function(state = null, action) {
  // console.log("reducer fetch playlist -> ", action.payload);
  switch (action.type) {
    case FETCH_PLAYLIST:
      return action.payload;
    case SELECTED_PLAYLIST:
      return {
        ...state,
        playlists: action.payload
      };
    default:
      return state;
  }
}
