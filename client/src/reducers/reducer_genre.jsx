import * as actions from "../actions/constants";
import initialState from "./state_initial";

export default function(state = initialState.spotify, action) {
  switch (action.type) {
    case actions.FETCH_GENRE:
      return {
        ...state,
        items: action.payload.items.map(item => {
          return {
            trackImg: item.images[0].url,
            name: item.name,
            href: item.tracks.href,
            id: item.id
          };
        }),
        success: true,
        selectedGenre: [],
        selectedArtist: [],
        selectedPlaylist: [],
        error: null,
        isLoading: false
      };
    case actions.SELECTED_GENRE:
      return {
        ...state,
        items: [],
        selectedGenre: action.payload.items.map(item => {
          return {
            track: item.track,
            album: item.track.album,
            trackImg: item.track.album.images[0].url,
            id: item.track.id,
            preview_url: item.track.preview_url
          };
        }),
        selectedArtist: [],
        selectedPlaylist: [],
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
