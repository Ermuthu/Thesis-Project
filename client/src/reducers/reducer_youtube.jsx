import * as actions from "../actions/constants";
import initialState from "./state_initial";

export default (state = initialState.youtube, action) => {
  switch (action.type) {
    case actions.YOUTUBE_SUCCESS:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case actions.FETCH_YOUTUBE:
      const results = action.payload;
      return {
        ...state,
        isLoading: false,
        error: null,
        items: results.map(item => {
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
};
