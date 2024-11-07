import React from 'react';
import "./Player.css";

const Details = (props) => {
  return (
    <div className='detail'>
        <div className=''>
            <img className='image' src={props.song.img_src} alt="" />
        </div>
        <h3 className='title'>{props.song.title}</h3> {/* Corrected typo here */}
        <h3 className='artist'>{props.song.artist}</h3>
    </div>
  );
};

export default Details;
