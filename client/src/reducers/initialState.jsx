export default {
  currentSong: {
    playUrl: "",
    audio: null,
    playing: false
  },
  videos: [],
  selectedVideo: null,
  term: "",
  accessToken: null,
  refreshToken: null,
  user: {
    loading: false,
    display_name: null,
    email: null,
    external_urls: {},
    followers: {},
    href: null,
    id: null,
    images: [],
    uri: null
  },
  artists: {
    following: {
      items: [],
      isFetching: false,
      error: false
    }
  },
  songs: {
    following: {
      items: [],
      isFetching: false,
      error: false
    }
  },
  genre: {
    following: {
      items: [],
      isFetching: false,
      error: false
    }
  },
  playlists: {
    following: {
      items: [],
      isFetching: false,
      error: false,
      errorMessage: null
    }
  }
};
