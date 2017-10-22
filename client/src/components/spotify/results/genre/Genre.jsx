import React from "react";
import { Link } from "react-router-dom";
import { SongContainer, Image } from "../../Spotify.Style";

const SpotifyGenre = ({ genre, prev, next, actions }) => (
  <SongContainer>
    {genre.items.map(playlist => {
      return (
        <div
          key={playlist.id}
          onClick={() => actions.selectedGenre(playlist.href)}
        >
          <Link to={`/spotify/genre/${playlist.name}`}>
            {playlist.name}
            <Image src={playlist.trackImg} alt="track" />
          </Link>
        </div>
      );
    })}
    {next ? (
      <div onClick={() => actions.nextTwentyG(next)}>
        Next 20 from this Search
      </div>
    ) : (
      ""
    )}
    {prev ? (
      <div onClick={() => actions.prevTwentyG(prev)}>
        Previous 20 from this Search
      </div>
    ) : (
      ""
    )}
  </SongContainer>
);

export default SpotifyGenre;
