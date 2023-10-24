import React from "react";

const Song = ({ currentSong }) => {
  return (
    <div className="song-container">
      <h1>{currentSong.name}</h1>
      <h2>{currentSong.cover}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};

export default Song;
