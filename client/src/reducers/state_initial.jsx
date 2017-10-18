export default {
  currentSong: {
    playUrl: "",
    audio: null,
    playing: false
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
