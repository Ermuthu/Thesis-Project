import * as actions from "../actions/constants";

export default function(state = [], action) {
  // console.log("auth reducer", action.payload);
  switch (action.type) {
    case actions.FETCH_USER:
      return action.payload || false;
    case actions.SET_TOKEN:
      return Object.assign({}, state, {
        token: action.payload
      });
    default:
      return state;
  }
}
