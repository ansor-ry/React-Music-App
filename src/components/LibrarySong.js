import React from "react";

function LibrarySong({ song, setCurrentSong, audioRef, isPlaying }) {
  const songSelectHandler = () => {
    setCurrentSong(song)
    if (isPlaying) {
      if (audioRef.current.play()) {
        console.log('salom');
      }
    }
  }
  return (
    <div className="library-song" onClick={songSelectHandler}>
      <img src={song.cover} alt="song" />
      <div className="song-description">
        <h2>{song.name}</h2>
        <h3>{song.artist}</h3>
      </div>
    </div>
  );
}

export default LibrarySong;
