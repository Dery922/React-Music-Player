import logo from "./logo.svg";
import "./styles/app.scss";
import Player from "./components/Player";
import Song from "./components/Song";
import data from "./util";
import React, { useState } from "react";

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]); //getting the current song from the above songs object states
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      {/* passing current song states as props to the song component */}
      <Song currentSong={currentSong} />
      <Player
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
      />
    </div>
  );
}

export default App;
