import React, { useState, useRef } from "react";
import Library from "./components/Library";
import Player from "./components/Player";
import Song from "./components/Song";
import "./styles/app.scss";
//  Adding data 
import chillHop from "./util";

function App() {

  const audioRef = useRef(null);

  const [song, setSong] = useState(chillHop());
  const [currentSong, setCurrentSong] = useState(song[1]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
      />
      <Library
        songs={song}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
      />
    </div>
  );
}

export default App;
