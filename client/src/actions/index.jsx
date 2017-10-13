import axios from "axios";
import * as actions from "./constants";
import YTSearch from "youtube-api-search";
const API = "AIzaSyBZpZmAdTa0lMogVGolFT2sIVUEnIk-yQ0";
const BASE_URL = "https://api.spotify.com/v1/search?";
const CATEGORY_URL = "https://api.spotify.com/v1/browse/categories/";
const headers = {
  Authorization: "Bearer " + localStorage.getItem("access_token")
};

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: actions.FETCH_USER, payload: res.data });
  localStorage.setItem("access_token", res.data.accessToken);
  localStorage.setItem("refresh_token", res.data.refreshToken);
  // console.log(headers);
};

export const fetchYouTube = term => async dispatch => {
  YTSearch({ key: API, term: `${term}` }, videos => {
    console.log("term", `${term}`);
    dispatch({ type: actions.FETCH_YOUTUBE, payload: videos });
  });
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
  // console.log("action in searchSong", action);
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
