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
    isLoggedIn: false,
    isFetching: false,
    isAuthenticated: sessionStorage.getItem("accessToken" ? true : false),
    spotifyId: null,
    acessToken: null,
    refreshToken: null,
    profile: {},
    _id: null
  },
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
