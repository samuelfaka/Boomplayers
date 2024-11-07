import React from 'react';
import "./Player.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faForward, faPause, faPlay } from '@fortawesome/free-solid-svg-icons';

const Controls = (props) => {
  return (
    <div className='control'>
        <button
            className='backward hover:bg-red-200'
            onClick={() => props.skipSong(false)}
            aria-label="Previous Song"
        >
            <FontAwesomeIcon icon={faBackward} />
        </button>

        <button
            className='control-play'
            onClick={() => props.setIsPlaying(!props.isPlaying)}
            aria-label={props.isPlaying ? "Pause" : "Play"}
        >
            <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
        </button>

        <button
            className='forward'
            onClick={() => props.skipSong()} 
            aria-label="Next Song"
        >
            <FontAwesomeIcon icon={faForward} />
        </button>
    </div>
  );
};

export default Controls;
