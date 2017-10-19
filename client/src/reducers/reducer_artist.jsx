import * as actions from "../actions/constants";
import initialState from "./state_initial";

export default function(state = initialState.spotify, action) {
  // console.log("reducer fetch artist -> ", action.payload);
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
      return {
        ...state,
        selectedGenre: [],
        selectedArtist: [],
        selectedPlaylist: [],
        items: action.payload.items.map(item => {
          return {
            name: item.name,
            trackImg: item.images[0] ? item.images[0].url : item.name,
            uri: item.uri,
            href: item.href,
            id: item.id
          };
        }),
        success: true,
        error: null,
        isLoading: false
      };
    case actions.SELECTED_ARTIST:
      return {
        ...state,
        items: [],
        selectedGenre: [],
        selectedPlaylist: [],
        selectedArtist: {
          external_urls: action.payload.external_urls.spotify,
          name: action.payload.name,
          img: action.payload.images[0].url,
          uri: action.payload.uri,
          id: action.payload.id,
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
}
