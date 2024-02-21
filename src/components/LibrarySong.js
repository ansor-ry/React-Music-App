import React from "react";
import { playSong } from "./until";

function LibrarySong({
  song,
  currentSong,
  setCurrentSong,
  audioRef,
  isPlaying,
  songs,
  setSongs,
  id,
}) {
  const songSelectHandler = () => {
    setCurrentSong(song);
    playSong(isPlaying, audioRef);

    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });

    setSongs(newSongs);
  };

  return (
    <div
      className={`library-song ${song.active ? "select" : ""}`}
      onClick={() => songSelectHandler()}
    >
      <img src={song.cover} alt="" />
      <div className="song-info">
        <h3>{song.name}</h3>
        <p>{song.artist}</p>
      </div>
    </div>
  );
}

export default LibrarySong;
