import * as actions from "../actions/constants";
import initialState from "./state_initial";

export default (state = initialState.user, action) => {
  switch (action.type) {
    case actions.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null
      };
    case actions.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case actions.FETCH_USER:
      const user = action.payload;
      return {
        ...state,
        loggedIn: true,
        success: true,
        accessToken: user.accessToken,
        refreshToken: user.refreshToken,
        spotify: user.spotifyId ? true : false,
        google: user.googleId ? true : false,
        displayName: user.displayName,
        photos: user.photos,
        loading: false,
        emails: user.emails,
        user: user
      };
    case actions.LOGOUT:
      return initialState.user;
    default:
      return state;
  }
};
