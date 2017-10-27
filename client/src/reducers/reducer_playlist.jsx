import * as actions from "../actions/constants";
import initialState from "./state_initial";

export default (state = initialState.spotify, action) => {
  switch (action.type) {
    case actions.REQUEST_PLAYLIST:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case actions.PLAYLIST_SUCCESS:
      const results = action.payload.items;
      const playlist = action.payload;
      return {
        ...state,
        selectedGenre: [],
        selectedArtist: [],
        selectedPlaylist: [],
        items: results.map(item => {
          return {
            trackImg: item.images[0].url,
            url: item.tracks.href,
            name: item.name,
            tracks: item.tracks.href,
            id: item.id
          };
        }),
        results: {
          href: playlist.href,
          next: playlist.next,
          prev: playlist.previous
        },
        success: true,
        error: null,
        isLoading: false
      };
    case actions.SELECTED_PLAYLIST:
      const selected = action.payload.items;
      return {
        ...state,
        selectedGenre: [],
        selectedArtist: [],
        selectedPlaylist: selected.map(item => {
          return {
            track: item.track,
            album: item.track.album,
            trackImg: item.track.album.images[0].url,
            uri: item.track.uri,
            preview_url: item.track.preview_url,
            id: selected.id
          };
        }),
        success: true,
        error: null,
        isLoading: false
      };
    case actions.PLAYLIST_FAILED:
      return {
        ...state,
        selectedGenre: [],
        selectedPlaylist: [],
        selectedArtist: [],
        items: [],
        results: {},
        success: false,
        error: action.payload,
        isLoading: true
      };
    case actions.CLEAR_SEARCH:
      return initialState.spotify;
    default:
      return state;
  }
};
