import * as actions from "../actions/constants";
import initialState from "./state_initial";

export default function(state = initialState.spotify, action) {
  // console.log("reducer fetch genre -> ", action.payload);
  switch (action.type) {
    case actions.FETCH_GENRE:
      return {
        ...state,
        items: action.payload.items,
        success: true,
        error: null,
        isLoading: false
      };
    case actions.SELECTED_GENRE:
      return {
        ...state,
        items: [],
        selectedGenre: action.payload.items,
        success: true,
        error: null,
        isLoading: false
      };
    case actions.CLEAR_SEARCH:
      return {
        ...state,
        success: false,
        items: [],
        selectedGenre: []
      };
    default:
      return state;
  }
}
