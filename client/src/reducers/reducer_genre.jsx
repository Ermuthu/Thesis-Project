import { FETCH_GENRE } from "../actions/constants";

export default function(state = null, action) {
  // console.log("reducer fetch genre -> ", action.payload);
  switch (action.type) {
    case FETCH_GENRE:
      return action.payload;
    default:
      return state;
  }
}
