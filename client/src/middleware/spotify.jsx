import * as actions from "../actions/constants";
import { playSpotify, pauseSpotify } from "../actions/spotify";

const spotifyMiddleware = ({ dispatch }) => next => action => {
  if (action.type !== actions.PLAY_SPOTIFY && actions.PAUSE_SPOTIFY) {
    return next(action);
  }

  const { url, preview_url } = action.payload;
  console.log(preview_url);
  const audio = new Audio(preview_url);
  const time = action.meta.active;
  if (time) {
    audio.play();
  }
  if (!time) {
    audio.currentTime = 0;
    dispatch(pauseSpotify(audio.pause()));
  }
  return next(action);
};

export default spotifyMiddleware;
