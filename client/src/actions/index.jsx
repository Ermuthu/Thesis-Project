import axios from "axios";
import * as actions from "./constants";
import YTSearch from "youtube-api-search";
const API = "AIzaSyBZpZmAdTa0lMogVGolFT2sIVUEnIk-yQ0";
const BASE_URL = "https://api.spotify.com/v1/search?";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: actions.FETCH_USER, payload: res.data });
};

export const fetchYouTube = () => async dispatch => {
  YTSearch({ key: API, term: "meditation" }, videos => {
    // console.log(videos);
    dispatch({ type: actions.FETCH_YOUTUBE, payload: videos });
  });
};

export const fetchArtist = (input, state, auth) => async dispatch => {
  const FETCH_URL = `${BASE_URL}q=${input}&type=artist&limit=1`;
  const headers = {
    Authorization: "Bearer " + state.accessToken
  };
  const res = await axios.get(FETCH_URL, {
    method: "get",
    headers: headers
  });
  dispatch({ type: actions.FETCH_ARTIST, payload: res.data });
};

export const fetchSong = (input, state, auth) => async dispatch => {
  const FETCH_URL = `${BASE_URL}q=${input}&type=track`;
  const headers = {
    Authorization: "Bearer " + state.accessToken
  };
  const res = await axios.get(FETCH_URL, {
    method: "get",
    headers: headers
  });
  dispatch({ type: actions.FETCH_SONG, payload: res.data });
};

export const fetchPlaylist = (input, state, auth) => async dispatch => {
  const FETCH_URL = `${BASE_URL}q=${input}&type=playlist`;
  const headers = {
    Authorization: "Bearer " + state.accessToken
  };
  const res = await axios.get(FETCH_URL, {
    method: "get",
    headers: headers
  });
  dispatch({ type: actions.FETCH_PLAYLIST, payload: res.data });
  console.log("playlist data", res.data.playlists.items);
};

export const fetchGenre = (input, state, auth) => async dispatch => {
  const FETCH_URL = `${BASE_URL}q=${input}&type=genre`;
  const headers = {
    Authorization: "Bearer " + state.accessToken
  };
  const res = await axios.get(FETCH_URL, {
    method: "get",
    headers: headers
  });
  dispatch({ type: actions.FETCH_GENRE, payload: res.data });
};

export const selectedPlaylist = playlistID => async dispatch => {};

export const clearSearch = () => async dispatch => {
  dispatch({ type: actions.CLEAR_SEARCH, payload: {} });
};

export const addLogs = text => {
  const action = {
    type: actions.ADD_LOG,
    text
  };
  // console.log("action in addLog", action);
  return action;
};

export const addSearch = text => {
  const action = {
    type: actions.ADD_SEARCH,
    text
  };
  console.log("action in searchSong", action);
  return action;
};

// export const fetchArtist = (accessToken, values) => {
//   const search = `v1/search?q=${values}&type=artist&limit=1`;
//   return dispatch => {
// const headers = { Authorization: "Bearer " + window.accessToken };
//     fetch(`${baseUrl}${search}`, { headers })
//       .then(response => response.json())
//       .then(json => {
//         dispatch(displaySearchedArtist(values, json));
//         dispatch(setArtistId(values, json));
//       })
//       .catch(err => "err");
//   };
// };

// const token = res.data.accessToken;
// dispatch(setToken(token));
// dispatch({ type: actions.SET_TOKEN, payload: res.data.accessToken });
// dispatch(fetchArtist(actions.SET_TOKEN));

// export const setToken = token => async dispatch => {
//   const action = {
//     type: actions.SET_TOKEN,
//     token
//   };
//   dispatch(fetchArtist(token));
//   console.log("action in token", token);
//   return token;
// };
