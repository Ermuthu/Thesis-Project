import { FETCH_ARTIST, CLEAR_SEARCH } from "../actions/constants";
// import initialState from "./InitialState";

const initialState = {
  error: {},
  loading: false,
  items: [],
  success: false
};

export default function(state = initialState, action) {
  // console.log("reducer fetch artist -> ", action.payload);
  switch (action.type) {
    case FETCH_ARTIST:
      return {
        ...state,
        items: action.payload.items,
        success: true
      };
    case CLEAR_SEARCH:
      return initialState;
    default:
      return state;
  }
}
