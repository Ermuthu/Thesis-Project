import * as actions from "./constants";
import YTSearch from "youtube-api-search";
const API = "AIzaSyBZpZmAdTa0lMogVGolFT2sIVUEnIk-yQ0";

export const reqYT = term => dispatch => ({
  type: actions.API,
  payload: {
    type: actions.YOUTUBE_SUCCESS,
    success: dispatch(fetchYT(term.term))
  },
  meta: {
    throttle: 5000
  }
});

export const fetchYT = (term, history) => async dispatch => {
  YTSearch({ key: API, term: `${term}` }, videos => {
    dispatch({ type: actions.FETCH_YOUTUBE, payload: videos });
  });
};
