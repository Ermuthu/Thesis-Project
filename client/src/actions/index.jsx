import axios from "axios";
import * as actions from "./constants";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: actions.FETCH_USER, payload: res.data });
};

const BASE_URL = "https://api.spotify.com/v1/search?";

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

// console.log("song of the query -> ", song);
// console.log(state.accessToken);
// console.log("headers", headers);
// console.log(accessToken);
// console.log("song", `${song}`);

//   "Content-Type": "application/json",
//   Authorization: "Bearer " + this.getToken()
// }

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
