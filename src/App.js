import React, { useState } from "react";

// import Components
import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";
// import style
import "./styles/app.scss";
// import data
import data from "./util";

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[2]);
  const [isPlaying, setIsPlaying] = useState(false);
  const color = currentSong.color;
  console.log(color);
  // background: ;
  return (
    <div
      className="App"
      style={{
        background: `linear-gradient(45deg, ${color[0]} 0%, ${color[1]} 100%)`,
      }}
    >
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <Library
        songs={songs}
        setSongs={setSongs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </div>
  );
}

export default App;
