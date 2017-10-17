import axios from "axios";
import * as actions from "./constants";
const BASE_URL = "https://api.spotify.com/v1/search?";
const CATEGORY_URL = "https://api.spotify.com/v1/browse/categories/";
const headers = {
  Authorization: "Bearer " + sessionStorage.getItem("accessToken")
};
const fetch = { method: "get", headers: headers };

export const spotifyRequest = () => ({
  type: actions.SPOTIFY_REQUEST,
  isLoading: true,
  error: null
});

export const requestArtist = artist => dispatch => {
  dispatch(fetchArtist(artist.artist));
};

export const fetchArtist = artist => async dispatch => {
  const FETCH_URL = `${BASE_URL}q=${artist}&type=artist`;
  const res = await axios.get(FETCH_URL, fetch);
  dispatch({ type: actions.FETCH_ARTIST, payload: res.data.artists });
};

export const selectedArtist = href => async dispatch => {
  const res = await axios.get(href, fetch);
  dispatch({ type: actions.SELECTED_ARTIST, payload: res.data });
};

export const fetchSong = input => async dispatch => {
  const FETCH_URL = `${BASE_URL}q=${input}&type=track`;
  const res = await axios.get(FETCH_URL, fetch);
  dispatch({ type: actions.FETCH_SONG, payload: res.data.tracks });
  // console.log(res);
};

export const fetchPlaylist = input => async dispatch => {
  const FETCH_URL = `${BASE_URL}q=${input}&type=playlist`;
  const res = await axios.get(FETCH_URL, fetch);
  dispatch({ type: actions.FETCH_PLAYLIST, payload: res.data.playlists });
  // console.log("playlist data", res.data.playlists.items);
};

export const selectedPlaylist = url => async dispatch => {
  const res = await axios.get(url, fetch);
  // console.log(res.data);
  dispatch({ type: actions.SELECTED_PLAYLIST, payload: res.data });
};

export const fetchGenre = input => async dispatch => {
  const FETCH_URL = `${CATEGORY_URL}${input}/playlists`;
  const res = await axios.get(FETCH_URL, fetch);
  dispatch({ type: actions.FETCH_GENRE, payload: res.data.playlists });
  // console.log(res.data.playlists);
};

export const selectedGenre = href => async dispatch => {
  const res = await axios.get(href, fetch);
  dispatch({ type: actions.SELECTED_GENRE, payload: res.data });
};

export const clearSearch = () => ({ type: actions.CLEAR_SEARCH });
