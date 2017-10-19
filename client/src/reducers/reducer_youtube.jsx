import * as actions from "../actions/constants";
import initialState from "./state_initial";

export default function(state = initialState.youtube, action) {
  switch (action.type) {
    case actions.REQUEST_ARTIST:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case actions.FETCH_YOUTUBE:
      return {
        ...state,
        isLoading: false,
        error: null,
        items: action.payload.map(item => {
          return {
            etag: item.etag,
            videoId: item.id.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            url: "https:www.youtube.com/embed/" + item.id.videoId
          };
        })
      };
    default:
      return state;
  }
}
