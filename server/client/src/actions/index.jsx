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

export const fetchSong = (
  accessToken,
  auth,
  state,
  values
) => async dispatch => {
  // const access_token = `${auth.accessToken}`;
  const headers = { Authorization: "Bearer " + accessToken };
  console.log(headers);
  console.log(accessToken);
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
  console.log(res.data);

  return {
    type: FETCH_SONG,
    payload: res.data
  };
};
