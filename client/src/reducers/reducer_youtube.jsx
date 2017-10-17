import { FETCH_YOUTUBE } from "../actions/constants";
import initialState from "./state_initial";

export default function(state = initialState.videos, action) {
  switch (action.type) {
    case FETCH_YOUTUBE:
      return action.payload;
    default:
      return state;
  }
}
