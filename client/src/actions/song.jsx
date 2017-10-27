import axios from "axios";
import * as actions from "./constants";
const BASE_URL = "https://api.spotify.com/v1/search?";
const CATEGORY_URL = "https://api.spotify.com/v1/browse/categories/";
const headers = {
  Authorization: "Bearer " + sessionStorage.getItem("accessToken")
};
const fetch = { method: "get", headers: headers };

export const reqSong = (song, error) => dispatch => ({
  type: actions.REQUEST_SONG,
  dispatch: dispatch(fetchSong(song.song))
});

export const fetchSong = song => async dispatch => {
  const FETCH_URL = `${BASE_URL}q=${song}&type=track`;
  try {
    const res = await axios.get(FETCH_URL, fetch);
    !res.data.tracks.total
      ? dispatch(fetchSongFailed(res))
      : dispatch({ type: actions.SONG_SUCCESS, payload: res.data.tracks });
  } catch (error) {
    dispatch(fetchSongFailed(error));
  }
};

export const fetchSongFailed = error => dispatch => {
  console.log("SONG FETCH FAILED -->", error);
  dispatch({
    type: actions.SONG_FAILED,
    payload: error
  });
};

export const nextTwenty = next => async dispatch => {
  const res = await axios.get(next, fetch);
  dispatch({ type: actions.SONG_SUCCESS, payload: res.data.tracks });
};

export const prevTwenty = prev => async dispatch => {
  const res = await axios.get(prev, fetch);
  dispatch({ type: actions.SONG_SUCCESS, payload: res.data.tracks });
};
