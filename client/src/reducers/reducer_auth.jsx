import * as actions from "../actions/constants";

const initialState = {
  loggedIn: false,
  error: {},
  loading: false,
  auth: false,
  success: false
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
      return action.payload || false;
    case actions.LOGOUT:
      return false;
    default:
      return state;
  }
}
