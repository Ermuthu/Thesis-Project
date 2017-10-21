import * as actions from "../actions/constants";
import initialState from "./state_initial";

export default (state = initialState.spotify, action) => {
  switch (action.type) {
    case actions.REQUEST_SONG:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case actions.SONG_SUCCESS:
      return {
        ...state,
        isloading: false,
        error: null,
        success: true
      };
    case actions.FETCH_SONG:
      return {
        ...state,
        selectedGenre: [],
        selectedArtist: [],
        selectedPlaylist: [],
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
    case actions.CLEAR_SEARCH:
      return initialState.spotify;
    default:
      return state;
  }
};
