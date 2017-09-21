import { ADD_LOG } from "../actions/constants";

const log = action => {
  return {
    text: action.text,
    id: Math.random
  };
};

const logs = (state = [], action) => {
  let logs = null;
  switch (action.type) {
    case ADD_LOG:
      logs = [...state, log(action)];
      // console.log("logs as state", logs);
      return logs;
    default:
      return state;
  }
};

export default logs;
