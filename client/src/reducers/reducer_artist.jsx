import * as actions from "../actions/constants";
import initialState from "./state_initial";

export default (state = initialState.spotify, action) => {
  switch (action.type) {
    case actions.REQUEST_ARTIST:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case actions.ARTIST_SUCCESS:
      return {
        ...state,
        isloading: false,
        error: null,
        success: true
      };
    case actions.FETCH_ARTIST:
      const items = action.payload.items;
      const artist = action.payload;
      return {
        ...state,
        selectedGenre: [],
        selectedArtist: [],
        selectedPlaylist: [],
        items: items.map(item => {
          return {
            name: item.name,
            trackImg: item.images[0] ? item.images[0].url : item.name,
            uri: item.uri,
            href: item.href,
            id: item.id
          };
        }),
        results: {
          href: artist.href,
          next: artist.next
        },
        success: true,
        error: null,
        isLoading: false
      };
    case actions.SELECTED_ARTIST:
      const results = action.payload;
      return {
        ...state,
        items: [],
        selectedGenre: [],
        selectedPlaylist: [],
        selectedArtist: {
          external_urls: results.external_urls.spotify,
          name: results.name,
          img: results.images[0].url,
          uri: results.uri,
          id: results.id,
          message: ", Click for artists Spotify profile"
        },
        success: true,
        error: null,
        isLoading: false
      };
    case actions.FETCH_FAILED:
      return {
        ...state,
        selectedGenre: [],
        selectedPlaylist: [],
        selectedArtist: [],
        items: [],
        success: false,
        error: action.payload.error,
        isLoading: false
      };
    case actions.CLEAR_SEARCH:
      return initialState.spotify;
    default:
      return state;
  }
};
