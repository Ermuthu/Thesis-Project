import React from "react";
import { SongsDisplay } from "../../containers/Headers";

const SpotifySong = ({ song, prev, next, actions }) => (
  <div>
    {song.items.map(songs => (
      <div key={songs.id}>
        <SongsDisplay
          trackImg={songs.trackImg}
          name={songs.name}
          uri={songs.uri}
        />
        <div onClick={() => actions.playSong(songs.preview_url)}>
          {songs.name}
        </div>
        <div onClick={() => actions.pauseSong(songs.preview_url)}>
          {songs.name}
        </div>
        {next ? (
          <div onClick={() => actions.nextTwenty(next)}>
            Next 20 from this Search
          </div>
        ) : (
          ""
        )}
        {prev ? (
          <div onClick={() => actions.prevTwenty(prev)}>
            Previous 20 from this Search
          </div>
        ) : (
          ""
        )}
      </div>
    ))}
  </div>
);

export default SpotifySong;
