import { FETCH_ARTIST, CLEAR_SEARCH } from "../actions/constants";
import initialState from "./state_initial";

export default function(state = initialState.spotify, action) {
  // console.log("reducer fetch artist -> ", action.payload);
  switch (action.type) {
    case FETCH_ARTIST:
      return {
        ...state,
        items: action.payload.items,
        success: true,
        input: action.payload.input,
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
