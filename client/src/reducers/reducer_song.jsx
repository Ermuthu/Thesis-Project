import { FETCH_SONG, CLEAR_SEARCH } from "../actions/constants";
import initialState from "./state_initial";

export default function(state = initialState.spotify, action) {
  // console.log("reducer fetch song -> ", action.payload);
  switch (action.type) {
    case FETCH_SONG:
      return {
        ...state,
        items: action.payload.items,
        success: true,
        error: null,
        isLoading: false
      };
    case CLEAR_SEARCH:
      return {
        ...state,
        success: false,
        items: []
      };
    default:
      return state;
  }
}
