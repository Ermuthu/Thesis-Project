import axios from "axios";
import * as actions from "./constants";
const BASE_URL = "https://api.spotify.com/v1/search?";
const CATEGORY_URL = "https://api.spotify.com/v1/browse/categories/";
const headers = {
  Authorization: "Bearer " + sessionStorage.getItem("accessToken")
};
const fetch = { method: "get", headers: headers };

export const reqPL = playlist => dispatch => ({
  type: actions.REQUEST_PLAYLIST,
  dispatch: dispatch(fetchPlaylist(playlist.playlist))
});

export const fetchPlaylist = playlist => async dispatch => {
  const FETCH_URL = `${BASE_URL}q=${playlist}&type=playlist`;
  try {
    const res = await axios.get(FETCH_URL, fetch);
    !res.data.playlists.total
      ? dispatch(fetchPlaylistFailed(res))
      : dispatch({
          type: actions.PLAYLIST_SUCCESS,
          payload: res.data.playlists
        });
  } catch (error) {
    dispatch(fetchPlaylistFailed(error));
  }
};

export const fetchPlaylistFailed = error => dispatch => {
  console.log("PLAYLIST FETCH FAILED -->", error);
  dispatch({
    type: actions.PLAYLIST_FAILED,
    payload: error
  });
};

export const nextTwentyP = next => async dispatch => {
  const res = await axios.get(next, fetch);
  dispatch({ type: actions.PLAYLIST_SUCCESS, payload: res.data.playlists });
};

export const prevTwentyP = prev => async dispatch => {
  const res = await axios.get(prev, fetch);
  dispatch({ type: actions.PLAYLIST_SUCCESS, payload: res.data.playlists });
};

export const selectedPlaylist = url => async dispatch => {
  const res = await axios.get(url, fetch);
  dispatch({ type: actions.SELECTED_PLAYLIST, payload: res.data });
};
