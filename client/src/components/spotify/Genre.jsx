import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { selectedGenre } from "../../actions/spotify";
import { SongContainer, Inner } from "./Spotify.Style";

const SpotifyGenre = ({ genre, selectedGenre }) => {
  if (!genre) {
    return <div> Loading... </div>;
  }
  // console.log("genre", genre);
  const playlists = genre.items ? genre.items : [];
  // console.log("playlist", playlists[0]);
  return (
    <SongContainer>
      {playlists.map((playlist, index) => {
        const trackImg = playlist.images[0].url;
        const href = playlist.tracks.href;
        return (
          <div key={index} onClick={() => selectedGenre(href)}>
            <Link to={`/spotify/genre/${playlist.id}`}>
              {playlist.name}
              <img
                src={trackImg}
                alt="track"
                style={{ width: "200px", height: "200px" }}
              />
            </Link>
          </div>
        );
      })}
    </SongContainer>
  );
};

const mapStateToProps = ({ genre }) => ({ genre });

export default connect(mapStateToProps, { selectedGenre })(SpotifyGenre);
