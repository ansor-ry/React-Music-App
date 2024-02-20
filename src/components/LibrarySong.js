import React from "react";

function LibrarySong({ song }) {
  return (
    <div className="library-song">
      <img src={song.cover} alt="" />
      <div className="song-info">
        <h3>{song.name}</h3>
        <p>{song.artist}</p>
      </div>
    </div>
  );
}

export default LibrarySong;
