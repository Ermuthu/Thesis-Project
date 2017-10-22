import React from "react";
import { ArtistContainer, Image } from "../../Spotify.Style";
import { Link } from "react-router-dom";

const SpotifyArtist = ({ artist, next, prev, actions }) => (
  <div>
    {artist.items.map(artist => (
      <ArtistContainer
        key={artist.id}
        onClick={() => actions.selectedArtist(artist.href)}
      >
        <Link to={`/spotify/artist/${artist.name}`}>
          <div>{artist.name}</div>
          <Image src={artist.trackImg} alt="artist" />
        </Link>
      </ArtistContainer>
    ))}
    {next ? (
      <div onClick={() => actions.nextTwentyA(next)}>
        Next 20 from this Search
      </div>
    ) : (
      ""
    )}
    {prev ? (
      <div onClick={() => actions.prevTwentyA(prev)}>
        Previousrev 20 from this Search
      </div>
    ) : (
      ""
    )}
  </div>
);

export default SpotifyArtist;
