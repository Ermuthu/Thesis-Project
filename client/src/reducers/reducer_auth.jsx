import * as actions from "../actions/constants";
import initialState from "./state_initial";

export default function(state = initialState.user, action) {
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
        success: true,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        spotify: action.payload.spotifyId ? true : false,
        google: action.payload.googleId ? true : false,
        displayName: action.payload.displayName,
        photos: action.payload.photos,
        loading: false,
        user: action.payload
      };
    case actions.LOGOUT:
      return initialState.user;
    default:
      return state;
  }
}
