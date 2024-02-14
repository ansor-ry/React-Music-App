import React from "react";
import LibrarySong from "./LibrarySong";

function Library({ songs, setCurrentSong, audioRef, isPlaying }) {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {/* <LibrarySong /> */}
        {songs.map((song) => (
          <LibrarySong song={song} setCurrentSong={setCurrentSong} key={song.id} audioRef={audioRef} isPlaying={isPlaying} />
        ))}
      </div>
    </div>
  );
}

export default Library;
