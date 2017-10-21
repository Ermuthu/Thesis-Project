import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { selectedGenre } from "../../../actions/spotify";
import { SongContainer, Image } from "../Spotify.Style";

const SpotifyGenre = ({ genre, selectedGenre }) => (
  <SongContainer>
    {genre.items.map(playlist => {
      return (
        <div key={playlist.id} onClick={() => selectedGenre(playlist.href)}>
          <Link to={`/spotify/genre/${playlist.name}`}>
            {playlist.name}
            <Image src={playlist.trackImg} alt="track" />
          </Link>
        </div>
      );
    })}
  </SongContainer>
);

const mapState = ({ genre }) => ({ genre });

export default connect(mapState, { selectedGenre })(SpotifyGenre);
