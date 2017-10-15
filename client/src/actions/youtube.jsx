import * as actions from "./constants";
import YTSearch from "youtube-api-search";
const API = "AIzaSyBZpZmAdTa0lMogVGolFT2sIVUEnIk-yQ0";

export const fetchYouTube = term => async dispatch => {
  YTSearch({ key: API, term: `${term}` }, videos => {
    console.log("term", `${term}`);
    dispatch({ type: actions.FETCH_YOUTUBE, payload: videos });
  });
};
