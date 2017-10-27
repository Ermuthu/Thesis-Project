import axios from "axios";
import * as actions from "./constants";
const BASE_URL = "https://api.spotify.com/v1/search?";
const CATEGORY_URL = "https://api.spotify.com/v1/browse/categories/";
const headers = {
  Authorization: "Bearer " + sessionStorage.getItem("accessToken")
};
const fetch = { method: "get", headers: headers };

export const reqArt = (artist, error) => dispatch => ({
  type: actions.REQUEST_ARTIST,
  dipsatch: dispatch(fetchArt(artist.artist))
});

export const fetchArt = artist => async dispatch => {
  const FETCH_URL = `${BASE_URL}q=${artist}&type=artist`;
  try {
    const res = await axios.get(FETCH_URL, fetch);
    !res.data.artists.total
      ? dispatch(fetchArtFailed(res))
      : dispatch({ type: actions.ARTIST_SUCCESS, payload: res.data.artists });
  } catch (error) {
    dispatch(fetchArtFailed(error));
  }
};

export const fetchArtFailed = error => dispatch => {
  console.log("ARTIST FETCH FAILED -->", error);
  dispatch({
    type: actions.ARTIST_FAILED,
    payload: error
  });
};

export const nextTwentyA = next => async dispatch => {
  const res = await axios.get(next, fetch);
  dispatch({ type: actions.ARTIST_SUCCESS, payload: res.data.artists });
};

export const prevTwentyA = prev => async dispatch => {
  const res = await axios.get(prev, fetch);
  dispatch({ type: actions.ARTIST_SUCCESS, payload: res.data.artists });
};

export const selectedArtist = href => async dispatch => {
  const res = await axios.get(href, fetch);
  dispatch({ type: actions.SELECTED_ARTIST, payload: res.data });
};
