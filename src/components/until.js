
export function playSong(isPlaying, audioRef) {
  if (isPlaying) {
    const playPromise = audioRef.current.play();
    if (isPlaying !== undefined) {
      playPromise.then((audio) => {
        audioRef.current.play();
      });
    }
  }
}

