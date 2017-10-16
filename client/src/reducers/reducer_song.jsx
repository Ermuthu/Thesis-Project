import { FETCH_SONG, CLEAR_SEARCH } from "../actions/constants";
import initialState from "./state_initial";

export default function(state = initialState.spotify, action) {
  // console.log("reducer fetch song -> ", action.payload);
  switch (action.type) {
    case FETCH_SONG:
      return {
        ...state,
        items: action.payload.items.map(item => {
          return {
            name: item.name,
            id: item.id,
            preview_url: item.preview_url,
            uri: item.uri,
            album: item.album,
            trackImg: item.album.images[0].url
          };
        }),
        success: true,
        error: null,
        isLoading: false
      };
    case CLEAR_SEARCH:
      return initialState;
    default:
      return state;
  }
}
