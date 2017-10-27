import * as actions from "./constants";

export const playSong2 = url => dispatch => {
  dispatch({
    type: actions.PLAY_SONG,
    payload: url
  });
};

export const playSong = preview_url => ({
  type: actions.PLAY_SPOTIFY,
  payload: {
    preview_url
  },
  meta: {
    active: true
  }
});

export const pauseSong = preview_url => {
  return {
    type: actions.PAUSE_SPOTIFY,
    payload: {
      playUrl: preview_url
    },
    meta: {
      notActive: true
    }
  };
};

export const clearSearch = () => ({ type: actions.CLEAR_SEARCH });
