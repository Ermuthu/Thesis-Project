import React from "react";
import { Link } from "react-router-dom";
import { PlaylistContainer, Image } from "../../Spotify.Style";

const SpotifyPlaylist = ({ playlist, prev, next, actions }) => (
  <div>
    {playlist.items.map(item => (
      <PlaylistContainer
        key={item.id}
        onClick={() => actions.selectedPlaylist(item.url)}
      >
        <Link to={`/spotify/playlist/${item.name}`}>
          <div>{item.name}</div>
          <Image src={item.trackImg} alt="track" />
        </Link>
      </PlaylistContainer>
    ))}
    {next ? (
      <div onClick={() => actions.nextTwentyP(next)}>
        Next 20 from this Search
      </div>
    ) : (
      ""
    )}
    {prev ? (
      <div onClick={() => actions.prevTwentyP(prev)}>
        Previous 20 from this Search
      </div>
    ) : (
      ""
    )}
  </div>
);
export default SpotifyPlaylist;
