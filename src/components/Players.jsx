import React, { useEffect, useRef, useState } from 'react';
import "./player.css";
import Details from './Details';
import Controls from './Controls';
import { Link } from 'react-router-dom';

const Player = (props) => {
    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play();
        } else {
            audioEl.current.pause();
        }
    });

    const skipSong = (forwards = true) => {
        if (forwards) {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp++;

                if (temp > props.songs.length - 1) {
                    temp = 0;
                }

                return temp;
            });
        } else {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp--;

                if(temp < 0) {
                    temp = props.songs.length - 1;
                }

                return temp;
            });
        }
    };

    return (
        <div className='both'>
            <div className='player'>
                <div className='now'>
                    <h4 className='text-2'>Playing Now</h4>
                </div>
                <Details 
                song = {props.songs[props.currentSongIndex]} 
                />
                <Controls
                    isPlaying = {isPlaying}
                    setIsPlaying = {setIsPlaying}
                    skipSong = {skipSong}
                />
                <audio
                    className='audio'
                    src={props.songs[props.currentSongIndex].src}
                    ref={audioEl}
                    controls
                ></audio>
                <p className='tex'>
                    Next up: <span>{props.songs[props.nextSongIndex].title}</span> by{" "}
                    {props.songs[props.nextSongIndex].artist}
                </p>
            </div>
        </div>
    );
};

export default Player;
