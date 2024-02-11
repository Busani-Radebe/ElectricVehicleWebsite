import React, { useState } from 'react';
import 'C:/Users/Busan/OneDrive/Desktop/React Web/EV-website/src/assets/Components/Hero/Hero.css';
import arrowBtn from 'C:/Users/Busan/OneDrive/Desktop/React Web/EV-website/src/assets/arrow_btn.png';
import playIcon from "C:/Users/Busan/OneDrive/Desktop/React Web/EV-website/src/assets/play_icon.png";
import pauseIcon from "C:/Users/Busan/OneDrive/Desktop/React Web/EV-website/src/assets/pause_icon.png";
import video1 from "C:/Users/Busan/OneDrive/Desktop/React Web/EV-website/src/assets/video1.mp4";
import image1 from "C:/Users/Busan/OneDrive/Desktop/React Web/EV-website/src/assets/image1.png";
import image2 from "C:/Users/Busan/OneDrive/Desktop/React Web/EV-website/src/assets/image2.png";
import image3 from "C:/Users/Busan/OneDrive/Desktop/React Web/EV-website/src/assets/image3.png";

const Hero = ({ setPlayStatus, playStatus }) => {
  const [heroImages] = useState([image1, image2, image3]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleClick = (index) => {
    setCurrentIndex(index);
    setIsVideoPlaying(false); // Stop video if it's playing
  };

  const handlePlayToggle = () => {
    setPlayStatus((prevPlayStatus) => !prevPlayStatus);
    setCurrentIndex(-1); // Set index to -1 to stop showing images when video is played
    setIsVideoPlaying((prevIsVideoPlaying) => !prevIsVideoPlaying);
  };

  return (
    <div className='hero'>
      <div className='hero-text'>
        <p>Dive into</p>
        <p>what you love</p>
      </div>
      <div className='hero-explore'>
        <p>Explore the features</p>
        <img src={arrowBtn} alt=''/>
      </div>
      <div className='hero-dot-play'></div>
      <ul className='hero dots'>
        {heroImages.map((image, index) => (
          <li key={index} onClick={() => handleClick(index)} className={currentIndex === index ? 'hero-dot orange' : 'hero-dot'}></li>
        ))}
      </ul>
      <div className='hero-play'>
        <img onClick={handlePlayToggle} src={playStatus ? pauseIcon : playIcon} alt=''/>
      </div>
      {isVideoPlaying ? (
        <video className='background' autoPlay loop muted>
          <source src={video1} type='video/mp4' />
        </video>
      ) : (
        <img src={heroImages[currentIndex]} className='background' alt='Background Image' />
      )}
    </div>
  );
}

export default Hero;
