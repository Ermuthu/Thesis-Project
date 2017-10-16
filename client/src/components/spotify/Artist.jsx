import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ArtistContainer, Image } from "./Spotify.Style";
import { selectedArtist } from "../../actions/spotify";

const SpotifyArtist = ({ artist, selectedArtist }) => (
  <div>
    {artist.items.map(artist => (
      <ArtistContainer
        key={artist.id}
        onClick={() => selectedArtist(artist.href)}
      >
        <Link to={`/spotify/artist/${artist.name}`}>
          <div>{artist.name}</div>
          <Image src={artist.trackImg} alt="artist" />
        </Link>
      </ArtistContainer>
    ))}
  </div>
);

const mapStateToProps = ({ artist }) => ({ artist });

export default connect(mapStateToProps, { selectedArtist })(SpotifyArtist);
