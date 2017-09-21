import { FETCH_ARTIST } from "../actions/constants";

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_ARTIST:
      return action.payload || false;
    default:
      return state;
  }
}
