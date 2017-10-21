import React from "react";
import { Link } from "react-router-dom";
import { selectedPlaylist } from "../../../actions/spotify";
import { connect } from "react-redux";
import { PlaylistContainer, Image } from "../Spotify.Style";

const SpotifyPlaylist = ({ playlist, selectedPlaylist }) => (
  <div>
    {playlist.items.map(item => (
      <PlaylistContainer
        key={item.id}
        onClick={() => selectedPlaylist(item.url)}
      >
        <Link to={`/spotify/playlist/${item.name}`}>
          <div>{item.name}</div>
          <Image src={item.trackImg} alt="track" />
        </Link>
      </PlaylistContainer>
    ))}
  </div>
);

const mapState = ({ playlist }) => ({ playlist });

export default connect(mapState, { selectedPlaylist })(SpotifyPlaylist);
