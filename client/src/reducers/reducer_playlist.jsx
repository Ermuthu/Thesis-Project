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
        selectedGenre: [],
        selectedArtist: [],
        selectedPlaylist: [],
        success: true,
        error: null,
        isLoading: false
      };
    case actions.SELECTED_PLAYLIST:
      return {
        ...state,
        items: [],
        selectedPlaylist: action.payload.items.map(item => {
          return {
            track: item.track,
            album: item.track.album,
            trackImg: item.track.album.images[0].url,
            uri: item.track.uri,
            preview_url: item.track.preview_url
          };
        }),
        selectedGenre: [],
        selectedArtist: [],
        success: true,
        error: null,
        isLoading: false
      };
    case actions.CLEAR_SEARCH:
      return initialState;
    default:
      return state;
  }
}
