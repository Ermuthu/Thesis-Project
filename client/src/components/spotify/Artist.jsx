import React, { Component } from "react";
import { connect } from "react-redux";
import { ArtistContainer } from "./Spotify.Style";
import { fetchArtist, clearSearch } from "../../actions";

class SpotifyArtist extends Component {
  componentDidMount() {
    this.props.fetchArtist();
  }
  componentWillUnmount() {
    this.props.clearSearch();
  }

  renderArtist() {
    const { artist } = this.props;
    if (!artist) {
      return <div> Loading ... </div>;
    }
    const list = artist.items;
    console.log(list);
    return (
      <ArtistContainer>
        {list.map((item, index) => {
          const name = item.name;
          const artistId = item.id;
          return (
            <div key={index}>
              <div>
                <div>{name}</div>
              </div>
            </div>
          );
        })}
        }
      </ArtistContainer>
    );
  }
  render() {
    const { artist } = this.props;
    return <div>{this.renderArtist()}</div>;
  }
}

const mapStateToProps = ({ artist }) => {
  return {
    artist
  };
};

export default connect(mapStateToProps, { fetchArtist, clearSearch })(
  SpotifyArtist
);

// console.log(item);
// console.log("artist", artist);
// console.log("list", list);
// console.log("trackImg", trackImg);
// const trackImg = item.images[0].url;
