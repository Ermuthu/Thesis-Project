import * as actions from "../actions/constants";
import initialState from "./state_initial";

export default (state = initialState.player, action) => {
  switch (action.type) {
    case actions.PLAY_SONG:
      return {
        ...state,
        isPlaying: true,
        url: action.payload
      };
    case actions.PLAY_SPOTIFY:
      return {
        ...state,
        playUrl: action.payload.playUrl
      };
    case actions.PAUSE_SPOTIFY:
      return {
        ...state,
        playUrl: action.payload.playUrl
      };
    default:
      return state;
  }
};
