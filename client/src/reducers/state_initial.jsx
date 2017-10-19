export default {
  currentSong: {
    playUrl: "",
    audio: null,
    playing: false
  },
  user: {
    loggedIn: false,
    error: {},
    loading: false,
    success: false,
    user: false,
    displayName: null,
    accessToken: null,
    refreshToken: null,
    photos: null,
    spotify: false
  },
  youtube: {
    items: [],
    selectedVideo: null,
    term: "",
    error: {},
    isLoading: false,
    success: false
  },
  videos: [],
  spotify: {
    error: {},
    isLoading: false,
    items: [],
    success: false,
    input: "",
    selectedPlaylist: [],
    selectedGenre: [],
    selectedArtist: []
  }
};
