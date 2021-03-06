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
      const results = action.payload.items;
      const song = action.payload;
      return {
        ...state,
        selectedGenre: [],
        selectedArtist: [],
        selectedPlaylist: [],
        items: results.map(item => {
          return {
            name: item.name,
            id: item.id,
            preview_url: item.preview_url,
            uri: item.uri,
            album: item.album,
            trackImg: item.album.images[0].url,
            albumLink: item.album.href
          };
        }),
        results: {
          href: song.href,
          next: song.next,
          prev: song.previous
        },
        success: true,
        error: null,
        isLoading: false
      };
    case actions.SONG_FAILED:
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
