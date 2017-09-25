import { FETCH_YOUTUBE } from "../actions/constants";
import initialState from "./initialState";

export default function(state = initialState.youtube, action) {
  //   console.log("reducer youtube -> ", actio`n.paylo`ad);
  //   console.log(state);
  switch (action.type) {
    case FETCH_YOUTUBE:
      return action.payload;
    default:
      return state;
  }
}
