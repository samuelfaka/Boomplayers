import React, { useEffect, useState } from 'react';
import Music from './components/Music';
import Player from './components/Player';




const App = () => {
  const [songs] = useState([
    {
      title: "Side to Side",
      artist: "Ariana Grande ft. Nicki Minaj",
      img_src: "./images/side-to-side.jpg", 
      src: "./songs/side-to-side.mp3",
    },
    {
      title: "Touch-It",
      artist: "KiDi-Ft-Tyga",
      img_src: "./images/KiDi-Ft-Tyga-Touch-It.jpeg", 
      src: "./songs/KiDi-Ft-Tyga-Touch-It.mp3",
    },
    {
      title: "Boombastic",
      artist: "Shaggy",
      img_src: "./images/Shaggy-Boombastic.jpeg", 
      src: "./songs/Shaggy-Boombastic.mp3",
    },
    {
      title: "Professional Beat",
      artist: "Elena_Mara",
      img_src: "./images/Professional_Beat-Elena_Mara.jpeg", 
      src: "./songs/Professional_Beat-Elena_Mara.mp3",
    },
    {
      title: "Girlfriend",
      artist: "Ruga",
      img_src: "./images/Girlfriend (Official Video).jpeg", 
      src: "./songs/Girlfriend (Official Video).m4a",
    },
    {
      title: "Fireboy-ft-Cuppy-Feel-Good",
      artist: "Fireboy",
      img_src: "./images/Fireboy-ft-Cuppy-Feel-Good.jpeg", 
      src: "./songs/Fireboy-ft-Cuppy-Feel-Good.mp3",
    },
    {
      title: "Asaka Joha",
      artist: "Joha",
      img_src: "./images/Joha.jpeg", 
      src: "./songs/Joha.m4a",
    },
    {
      title: "Mara-bit",
      artist: "Mara-bit",
      img_src: "./images/Mara-bit.jpeg", 
      src: "./songs/Mara-bit.mp3",
    },
    {
      title: "Eve-Whos-That-Girl",
      artist: "Eve-Whos",
      img_src: "./images/Eve-Whos-That-Girl.jpeg", 
      src: "./songs/Eve-Whos-That-Girl.mp3",
    },
    {
      title: "Dj_Glitter",
      artist: "Dj-Glitter-Mara 2024",
      img_src: "./images/Dj_Glitter_-_Mara_2024_Track_4.jpeg", 
      src: "./songs/Dj_Glitter_-_Mara_2024_Track_4_.mp3",
    },
    {
      title: "Best Of Nicki Minaj",
      artist: " Nicki Minaj",
      img_src: "./images/Best Of Nicki Minaj Mix_www.NaijaDjMixtapes.com.jfif", 
      src: "./songs/Best Of Nicki Minaj Mix_www.NaijaDjMixtapes.com.mp3"
    },
    {
      title: "Best Of Mariah Carey",
      artist: "Mariah Carey",
      img_src: "./images/Best Of Mariah Carey Songs (www.ForeignDJMixtapes.COM.jfif", 
      src: "./songs/Best Of Mariah Carey Songs (www.ForeignDJMixtapes.COM).mp3",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(1);

  useEffect(() => {
    setNextSongIndex(() => {
      if(currentSongIndex + 1 > songs.length - 1 ) {
        return 0
      } else{
        return currentSongIndex + 1
      }
    })
  }, [currentSongIndex, songs.length]);

  return (
  
    <div className='bg'>
      <Music />
      <Player 
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs ={songs}
      />
    </div>
  
  );
};

export default App;
