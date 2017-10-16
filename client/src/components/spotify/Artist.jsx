import React, { Component } from "react";
import { connect } from "react-redux";
import { ArtistContainer } from "./Spotify.Style";
import { fetchArtist, clearSearch } from "../../actions/spotify";

class SpotifyArtist extends Component {
  componentWillUnmount = () => this.props.clearSearch();

  render() {
    const { artist, clearSearch } = this.props;
    if (!artist) {
      return <div> Loading ... </div>;
    }
    const list = artist.items ? artist.items : [];
    // console.log(list);
    // console.log(artist);
    return (
      <ArtistContainer>
        {list.map((item, index) => {
          const name = item.name;
          const artistImg = item.images[0] ? item.images[0].url : "";
          return (
            <div key={index}>
              <div>
                <div>{name}</div>
                <img
                  src={artistImg}
                  alt="artist"
                  style={{ width: "200px", height: "200px" }}
                />
              </div>
            </div>
          );
        })}
      </ArtistContainer>
    );
  }
}

const mapStateToProps = ({ artist }) => ({ artist });

export default connect(mapStateToProps, { fetchArtist, clearSearch })(
  SpotifyArtist
);
