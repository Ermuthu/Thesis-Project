import React from "react";
import { SongsDisplay } from "../containers/Headers";

const SpotifySong = ({ song, playSong, next, pauseSong, nextTwenty }) => (
  <div>
    {song.items.map(songs => (
      <div key={songs.id}>
        <SongsDisplay
          trackImg={songs.trackImg}
          name={songs.name}
          uri={songs.uri}
        />
        <div onClick={() => playSong(songs.preview_url)}>{songs.name}</div>
        <div onClick={() => pauseSong(songs.preview_url)}>{songs.name}</div>
        <div onClick={() => nextTwenty(next)}>Next 20 from this Search</div>
      </div>
    ))}
  </div>
);

export default SpotifySong;
