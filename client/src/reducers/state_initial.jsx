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
    spotify: false,
    emails: null
  },
  youtube: {
    items: [],
    selectedVideo: null,
    error: {},
    isLoading: false,
    success: false,
    url: "https:www.youtube.com/embed/"
  },
  spotify: {
    error: {},
    isLoading: false,
    items: [],
    success: false,
    selectedPlaylist: [],
    selectedGenre: [],
    selectedArtist: []
  }
};
