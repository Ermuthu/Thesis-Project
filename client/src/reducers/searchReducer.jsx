import { ADD_SEARCH } from "../actions/constants"; , 

const search = action => {
  return {
    text: action.text,
    id: Math.random
  };
};

export default function(state = [], action) {
  let searches = null;
  switch (action.type) {
    case ADD_SEARCH:
      searches = [...state, search(action)];
      console.log("searches as state", searches);
      return searches;
    default:
      return state;
  }
};

