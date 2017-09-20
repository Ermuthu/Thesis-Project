import axios from "axios";
import { FETCH_USER, FETCH_SURVEYS, FETCH_SONG } from "./types";

// const user = { state };

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

// function mapDispatchToProps(auth) {
//   console.log(auth);
//   return { auth };
// }

export const fetchSong = (accessToken, values) => async dispatch => {
  console.log("values of the query -> ", values);
  const headers = { Authorization: "Bearer " + accessToken };
  // console.log(headers);
  // console.log(accessToken);
  const res = await axios.get(
    `https://api.spotify.com/v1/search?q=${values}&type=track`,
    {
      method: "get",
      headers: headers
    }
    //   "Content-Type": "application/json",
    //   Authorization: "Bearer " + this.getToken()
    // }
  );
  dispatch({ type: FETCH_SONG, payload: res.data });
  console.log(res.data);

  return {
    type: FETCH_SONG,
    payload: res.data
  };
};

// export const fetchSong = (accessToken, values) => {
//   const baseUrl = "https://api.spotify.com/";
//   const search = `v1/search?q=${values}&type=artist&limit=1`;
//   return dispatch => {
//     const headers = { Authorization: "Bearer " + window.accessToken };
//     fetch(`${baseUrl}${search}`, { headers })
//       .then(response => response.json())
//       .then(json => {
//         dispatch(displaySearchedArtist(values, json));
//         dispatch(setArtistId(values, json));
//       })
//       .catch(err => "err");
//   };
// };
