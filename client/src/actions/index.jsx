import axios from "axios";
import {
  FETCH_USER,
  SEARCH_SONG,
  FETCH_SONG,
  ADD_SEARCH,
  ADD_LOG
} from "./constants";

// const baseUrl = "https://api.spotify.com/";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const addLogs = text => {
  const action = {
    type: ADD_LOG,
    text
  };
  // console.log("action in addLog", action);
  return action;
};

export const searchSong = text => {
  const action = {
    type: SEARCH_SONG,
    text
  };
  // console.log("action in searchSong", action);
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

export const fetchSong = (song, state, auth) => async dispatch => {
  console.log("song of the query -> ", song);
  console.log(state.accessToken);
  const headers = {
    Authorization: "Bearer " + state.accessToken
  };
  console.log("headers", headers);
  // console.log(accessToken);
  // console.log("search", `${song}`);
  const res = await axios.get(
    `https://api.spotify.com/v1/search?q=${song}&type=artist`,
    {
      method: "get",
      headers: headers
    }
  );
  dispatch({ type: FETCH_SONG, payload: res.data });
  console.log(res.data);

  return {
    type: FETCH_SONG,
    payload: res
  };
};

//   "Content-Type": "application/json",
//   Authorization: "Bearer " + this.getToken()
// }

// export const fetchSong = (accessToken, values) => {
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
