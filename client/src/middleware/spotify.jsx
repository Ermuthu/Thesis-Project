import * as actions from "../actions/constants";
import { playSong, pauseSong } from "../actions/spotify";

const spotifyMiddleware = ({ dispatch }) => next => action => {
  if (action.type !== actions.PLAY_SPOTIFY && actions.PAUSE_SPOTIFY) {
    return next(action);
  }
  const { preview_url } = action.payload;
  console.log(preview_url);
  const audio = new Audio(preview_url);
  const time = action.meta.active;
  if (time) {
    audio.play();
  }
  const noTime = action.meta.notActive;
  if (noTime) {
    audio.pause();
  }
  return next(action);
};

export default spotifyMiddleware;
