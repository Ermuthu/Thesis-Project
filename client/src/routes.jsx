import Landing from "./components/Landing";
import Home from "./components/home/Home";
import Spotify from "./components/spotify/SpotifyExport";
import Playlist from "./components/spotify/results/playlist/PlaylistExport";
import Genre from "./components/spotify/results/genre/GenreExport";
import Song from "./components/spotify/results/song/SongExport";
import Artist from "./components/spotify/results/artist/ArtistExport";
import SelectedPlaylist from "./components/spotify/results/playlist/SelectedPlaylist";
import SelectedGenre from "./components/spotify/results/genre/SelectedGenre";
import SelectedArtist from "./components/spotify/results/artist/SelectedArtist";
import YouTube from "./components/youtube/YouTube";
import YouTubeList from "./components/youtube/YouTubeList";

export default [
  {
    path: "/",
    component: Landing,
    exact: true
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/spotify",
    component: Spotify
  },
  {
    path: "/spotify/artist",
    component: Artist,
    exact: true
  },
  {
    path: "/spotify/artist/:id",
    component: SelectedArtist
  },
  {
    path: "/spotify/song",
    component: Song
  },
  {
    path: "/spotify/genre",
    component: Genre,
    exact: true
  },
  {
    path: "/spotify/genre/:id",
    component: SelectedGenre
  },
  {
    path: "/spotify/playlist",
    component: Playlist,
    exact: true
  },
  {
    path: "/spotify/playlist/:id",
    component: SelectedPlaylist
  },
  {
    path: "/youtube",
    component: YouTube
  },
  {
    path: "/youtube/:id",
    component: YouTubeList
  }
];
