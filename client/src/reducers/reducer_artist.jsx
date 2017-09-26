import { FETCH_ARTIST } from "../actions/constants";
// import initialState from "./InitialState";

export default function(state = null, action) {
  // console.log("reducer fetch artist -> ", action.payload);
  switch (action.type) {
    case FETCH_ARTIST:
      return action.payload;
    default:
      return state;
  }
}
