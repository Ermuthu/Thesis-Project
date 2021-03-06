import * as actions from "../actions/constants";
import initialState from "./state_initial";

export default (state = initialState.spotify, action) => {
  switch (action.type) {
    case actions.REQUEST_GENRE:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case actions.GENRE_SUCCESS:
      const results = action.payload.items;
      const playlist = action.payload;
      return {
        ...state,
        isLoading: false,
        selectedGenre: [],
        selectedArtist: [],
        selectedPlaylist: [],
        items: results.map(item => {
          return {
            trackImg: item.images[0].url,
            name: item.name,
            href: item.tracks.href,
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
    case actions.SELECTED_GENRE:
      const selected = action.payload.items;
      return {
        ...state,
        selectedArtist: [],
        selectedPlaylist: [],
        selectedGenre: selected.map(item => {
          return {
            track: item.track,
            album: item.track.album,
            trackImg: item.track.album.images[0].url,
            id: item.track.id,
            preview_url: item.track.preview_url,
            uri: item.track.uri,
            name: item.track.name,
            href: item.track.href
          };
        }),
        success: true,
        error: null,
        isLoading: false
      };
    case actions.GENRE_FAILED:
      console.log(action.payload);
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
