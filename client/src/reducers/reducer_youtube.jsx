import { FETCH_YOUTUBE } from "../actions/constants";
import initialState from "./state_initial";

export default function(state = initialState.videos, action) {
  // console.log("reducer youtube -> ", action.payload);
  // console.log(state);
  switch (action.type) {
    case FETCH_YOUTUBE:
      return action.payload;
    default:
      return state;
  }
}
