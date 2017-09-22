import axios from "axios";
import {
  FETCH_USER,
  FETCH_ARTIST,
  ADD_SEARCH,
  ADD_LOG,
  CLEAR_SEARCH,
  FETCH_SONG
} from "./constants";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

const BASE_URL = "https://api.spotify.com/v1/search?";

export const fetchArtist = (input, state, auth) => async dispatch => {
  const FETCH_URL = `${BASE_URL}q=${input}&type=artist&limit=1`;
  // console.log("FETCH_URL", FETCH_URL);
  console.log("searchType");
  const headers = {
    Authorization: "Bearer " + state.accessToken
  };
  const res = await axios.get(FETCH_URL, {
    method: "get",
    headers: headers
  });
  dispatch({ type: FETCH_ARTIST, payload: res.data });
  // console.log(res.data.artists.items);
  return {
    type: FETCH_ARTIST,
    payload: res.data
  };
  // console.log(res);
};

export const fetchSong = (input, state, auth) => async dispatch => {
  const FETCH_URL = `${BASE_URL}q=${input}&type=track`;
  // console.log("FETCH_URL", FETCH_URL);
  console.log("search", input);
  const headers = {
    Authorization: "Bearer " + state.accessToken
  };
  const res = await axios.get(FETCH_URL, {
    method: "get",
    headers: headers
  });
  dispatch({ type: FETCH_SONG, payload: res.data });
  // console.log(res.data.artists.items);
  return {
    type: FETCH_SONG,
    payload: res.data
  };
  // console.log(res);
};

export function clearSearch() {
  return {
    type: CLEAR_SEARCH,
    data: {}
  };
}

export const addLogs = text => {
  const action = {
    type: ADD_LOG,
    text
  };
  // console.log("action in addLog", action);
  return action;
};

export const addSearch = text => {
  const action = {
    type: ADD_SEARCH,
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
