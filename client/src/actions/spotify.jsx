import axios from "axios";
import * as actions from "./constants";
const BASE_URL = "https://api.spotify.com/v1/search?";
const CATEGORY_URL = "https://api.spotify.com/v1/browse/categories/";
const headers = {
  Authorization: "Bearer " + sessionStorage.getItem("accessToken")
};
const fetch = { method: "get", headers: headers };

export const reqArt = artist => dispatch => ({
  type: actions.API,
  payload: {
    type: actions.ARTIST_SUCCESS,
    success: dispatch(fetchArt(artist.artist))
  },
  meta: {
    throttle: 5000
  }
});

export const fetchArt = artist => async dispatch => {
  const FETCH_URL = `${BASE_URL}q=${artist}&type=artist`;
  const res = await axios.get(FETCH_URL, fetch);
  dispatch({ type: actions.FETCH_ARTIST, payload: res.data.artists });
};

export const selectedArtist = href => async dispatch => {
  const res = await axios.get(href, fetch);
  dispatch({ type: actions.SELECTED_ARTIST, payload: res.data });
};

export const reqSong = song => dispatch => ({
  type: actions.REQUEST_SONG,
  onSuccess: {
    type: actions.SONG_SUCCESS,
    dispatch: dispatch(fetchSong(song.song))
  }
});

export const fetchSong = song => async dispatch => {
  const FETCH_URL = `${BASE_URL}q=${song}&type=track`;
  const res = await axios.get(FETCH_URL, fetch);
  dispatch({ type: actions.FETCH_SONG, payload: res.data.tracks });
};

export const reqPL = playlist => dispatch => ({
  type: actions.REQUEST_PLAYLIST,
  onSuccess: {
    type: actions.PLAYLIST_SUCCESS,
    dispatch: dispatch(fetchPlaylist(playlist.playlist))
  }
});

export const fetchPlaylist = playlist => async dispatch => {
  const FETCH_URL = `${BASE_URL}q=${playlist}&type=playlist`;
  const res = await axios.get(FETCH_URL, fetch);
  dispatch({ type: actions.FETCH_PLAYLIST, payload: res.data.playlists });
};

export const selectedPlaylist = url => async dispatch => {
  const res = await axios.get(url, fetch);
  dispatch({ type: actions.SELECTED_PLAYLIST, payload: res.data });
};

export const reqGen = genre => dispatch => ({
  type: actions.REQUEST_GENRE,
  onSuccess: {
    type: actions.GENRE_SUCCESS,
    dispatch: dispatch(fetchGenre(genre.genre))
  }
});

export const fetchGenre = genre => async dispatch => {
  const FETCH_URL = `${CATEGORY_URL}${genre}/playlists`;
  const res = await axios.get(FETCH_URL, fetch);
  dispatch({ type: actions.FETCH_GENRE, payload: res.data.playlists });
};

export const selectedGenre = href => async dispatch => {
  const res = await axios.get(href, fetch);
  dispatch({ type: actions.SELECTED_GENRE, payload: res.data });
};

export const clearSearch = () => ({ type: actions.CLEAR_SEARCH });

export const fetchFailed = error => dispatch => {
  console.log(error);
  dispatch({
    type: actions.FETCH_FAILED,
    payload: error
  });
};

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

// export const spotifyRequest = () => ({
//   type: actions.REQUEST_ARTIST,
//   artist,
//   history,
//   url: `${BASE_URL}q=${artist.artist}&type=artist`,
//   onSuccess: (res, dispatch) => dispatch(fetchArt(artist, res.artist.items))
// });
