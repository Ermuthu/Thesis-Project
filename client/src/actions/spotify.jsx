import axios from "axios";
import * as actions from "./constants";
const BASE_URL = "https://api.spotify.com/v1/search?";
const CATEGORY_URL = "https://api.spotify.com/v1/browse/categories/";
const headers = {
  Authorization: "Bearer " + sessionStorage.getItem("accessToken")
};

export const fetchArtist = input => async dispatch => {
  const FETCH_URL = `${BASE_URL}q=${input}&type=artist`;
  const res = await axios.get(FETCH_URL, {
    method: "get",
    headers: headers
  });
  dispatch({ type: actions.FETCH_ARTIST, payload: res.data.artists });
};

export const fetchSong = input => async dispatch => {
  const FETCH_URL = `${BASE_URL}q=${input}&type=track`;
  const res = await axios.get(FETCH_URL, {
    method: "get",
    headers: headers
  });
  dispatch({ type: actions.FETCH_SONG, payload: res.data.tracks });
  // console.log(res);
};

export const fetchPlaylist = input => async dispatch => {
  const FETCH_URL = `${BASE_URL}q=${input}&type=playlist`;
  const res = await axios.get(FETCH_URL, {
    method: "get",
    headers: headers
  });
  dispatch({ type: actions.FETCH_PLAYLIST, payload: res.data.playlists });
  // console.log("playlist data", res.data.playlists.items);
};

export const selectedPlaylist = url => async dispatch => {
  const res = await axios.get(url, {
    method: "get",
    headers: headers
  });
  // console.log(res.data);
  dispatch({ type: actions.SELECTED_PLAYLIST, payload: res.data });
};

export const fetchGenre = input => async dispatch => {
  const FETCH_URL = `${CATEGORY_URL}${input}/playlists`;
  const res = await axios.get(FETCH_URL, {
    method: "get",
    headers: headers
  });
  dispatch({ type: actions.FETCH_GENRE, payload: res.data.playlists });
  // console.log(res);
};

export const clearSearch = () => async dispatch => {
  dispatch({ type: actions.CLEAR_SEARCH, payload: {} });
};
