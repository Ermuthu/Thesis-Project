import { FETCH_PLAYLIST } from "../actions/constants";

export default function(state = null, action) {
  // console.log("reducer fetch playlist -> ", action.payload);
  switch (action.type) {
    case FETCH_PLAYLIST:
      return action.payload;
    default:
      return state;
  }
}
