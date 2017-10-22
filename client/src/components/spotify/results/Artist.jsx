import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ArtistContainer, Image } from "../Spotify.Style";
import { selectedArtist, nextTwentyA } from "../../../actions/spotify";

const SpotifyArtist = ({ artist, next, nextTwentyA, selectedArtist }) => (
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
    <div onClick={() => nextTwentyA(next)}>Next 20 from this Search</div>
  </div>
);

const mapState = ({ artist }) => ({ artist, next: artist.results.next });

export default connect(mapState, { selectedArtist, nextTwentyA })(
  SpotifyArtist
);
