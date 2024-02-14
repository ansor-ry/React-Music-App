import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faPlay,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({ currentSong, isPlaying, setIsPlaying, audioRef }) => {
  // Hooks
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  // Hooks
  const audioRefPlayer = audioRef;
  // Event Handlers
  const playSongHandler = () => {
    if (isPlaying) {
      audioRefPlayer.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRefPlayer.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;

    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration: duration,
    });
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const dragHandler = (e) => {
    audioRefPlayer.current.currentTime = e.target.value;
    setSongInfo({
      ...songInfo,
      currentTime: e.target.value,
    });
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input
          type="range"
          min="0"
          max={songInfo.duration}
          value={songInfo.currentTime}
          onChange={dragHandler}
        />
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="player-control">
        <FontAwesomeIcon icon={faAngleLeft} className="skip-back" size="2x" />

        <FontAwesomeIcon
          icon={isPlaying ? faPause : faPlay}
          className="play"
          size="2x"
          onClick={playSongHandler}
        />

        <FontAwesomeIcon
          icon={faAngleRight}
          className="skip-forward"
          size="2x"
        />
      </div>
      <audio
        onTimeUpdate={timeUpdateHandler}
        ref={audioRefPlayer}
        src={currentSong.audio}
        onLoadedData={timeUpdateHandler}
      ></audio>
    </div>
  );
};

export default Player;
