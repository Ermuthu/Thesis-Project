import { FETCH_ARTIST, FETCH_SONG, CLEAR_SEARCH } from "../actions/constants";

export default function(state = null, action) {
  // console.log("reducer fetch song -> ", action.payload);
  switch (action.type) {
    case FETCH_ARTIST:
      return action.payload;
    case FETCH_SONG:
      return action.payload;
    case CLEAR_SEARCH:
      return {
        ...state,
        data: action.data
      };
    default:
      return state;
  }
}

// const searchReducer = (state = {}, action) => {
//   Object.freeze(state);

//   switch (action.type) {
//     case RECEIVE_RESULTS:
//       return action.results;
//     default:
//       return state;
//   }
// };
