import axios from "axios";
import * as actions from "./constants";

export const loginRequest = () => {
  return { type: actions.LOGIN_REQUEST };
};

// export const refreshToken = () => async dispatch => {
//   const res = await axios.post('')
// }

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: actions.FETCH_USER, payload: res.data });
};

export const logOut = () => ({ type: actions.LOGOUT });
