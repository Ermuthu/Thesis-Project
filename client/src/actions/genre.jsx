import axios from "axios";
import * as actions from "./constants";
import { BASE_URL, CATEGORY_URL, headers, fetch } from "./searchConsts";

export const reqGen = genre => dispatch => ({
  type: actions.REQUEST_GENRE,
  dispatch: dispatch(fetchGenre(genre.genre))
});

export const fetchGenre = genre => async dispatch => {
  const FETCH_URL = `${CATEGORY_URL}${genre}/playlists`;
  try {
    const res = await axios.get(FETCH_URL, fetch);
    !res.data.playlists.total
      ? dispatch(fetchGenreFailed(res))
      : dispatch({ type: actions.GENRE_SUCCESS, payload: res.data.playlists });
  } catch (error) {
    dispatch(fetchGenreFailed(error));
  }
};

export const fetchGenreFailed = error => dispatch => {
  console.log("GENRE FETCH FAILED -->", error);
  dispatch({
    type: actions.GENRE_FAILED,
    payload: error
  });
};

export const nextTwentyG = next => async dispatch => {
  const res = await axios.get(next, fetch);
  dispatch({ type: actions.GENRE_SUCCESS, payload: res.data.playlists });
};

export const prevTwentyG = prev => async dispatch => {
  const res = await axios.get(prev, fetch);
  dispatch({ type: actions.GENRE_SUCCESS, payload: res.data.playlists });
};

export const selectedGenre = href => async dispatch => {
  const res = await axios.get(href, fetch);
  dispatch({ type: actions.SELECTED_GENRE, payload: res.data });
};
