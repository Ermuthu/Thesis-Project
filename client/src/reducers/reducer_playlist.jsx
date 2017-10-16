import * as actions from "../actions/constants";
import initialState from "./state_initial";

export default function(state = initialState.spotify, action) {
  // console.log("reducer fetch playlist -> ", action.payload);
  switch (action.type) {
    case actions.FETCH_PLAYLIST:
      return {
        ...state,
        items: action.payload.items.map(item => {
          return {
            trackImg: item.images[0].url,
            url: item.tracks.href,
            name: item.name,
            tracks: item.tracks.href,
            id: item.id
          };
        }),
        success: true,
        error: null,
        isLoading: false
      };
    case actions.SELECTED_PLAYLIST:
      return {
        ...state,
        items: [],
        selectedPlaylist: action.payload.items,
        success: true,
        error: null,
        isLoading: false
      };
    case actions.CLEAR_SEARCH:
      return {
        ...state,
        success: false,
        items: [],
        selectedPlaylist: []
      };
    default:
      return state;
  }
}
