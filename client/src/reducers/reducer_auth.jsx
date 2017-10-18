import * as actions from "../actions/constants";

const initialState = {
  loggedIn: false,
  error: {},
  loading: false,
  auth: false,
  success: false,
  user: false
};

export default function(state = initialState, action) {
  // console.log(state);
  // console.log("auth reducer", action.payload);
  switch (action.type) {
    case actions.LOGIN_REQUEST:
      return {
        ...state,
        loading: true
      };
    case actions.FETCH_USER:
      return {
        ...state,
        loggedIn: true,
        auth: true,
        success: true,
        accessToken: action.payload.accessToken,
        spotify: action.payload.spotifyId ? true : false,
        loading: false,
        user: action.payload
      };
    case actions.LOGOUT:
      return initialState;
    default:
      return state;
  }
}
