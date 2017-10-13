import * as actions from "../actions/constants";

const initialState = {
  isLoggedIn: false,
  isFetching: false,
  isAuthenticated: localStorage.getItem("access_token" ? true : false)
};

export default function(state = initialState, action) {
  // console.log(state);
  // console.log("auth reducer", action.payload);
  switch (action.type) {
    case actions.FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}
