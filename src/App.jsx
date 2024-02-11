import { useEffect, useState } from "react";

import Background from 'C:/Users/Busan/OneDrive/Desktop/React Web/EV-website/src/assets/Components/Background/Background';
import Navbar from "./assets/Components/NavBar/Navbar";
import Hero from "./assets/Components/Hero/Hero";

const App = () => {
    const heroData = [
        {text1:'Dive into',text2:'what you love', imagePath: 'C:/Users/Busan/OneDrive/Desktop/React Web/EV-website/src/assets/image1.png'},
        {text1:'Indulge',text2:'your passion', imagePath: 'C:/Users/Busan/OneDrive/Desktop/React Web/EV-website/src/assets/image2.png'},
        {text1:'Give in to',text2:'your passions', imagePath: 'C:/Users/Busan/OneDrive/Desktop/React Web/EV-website/src/assets/image3.png'},
    ];
    const [heroCount,setHeroCount] = useState(1);
    const [playStatus,setPlayStatus] = useState(false);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setHeroCount((count) => count === 2 ? 0 : count + 1);
      }, 3000);

      return () => clearInterval(intervalId);
    }, []);

    return (
      <div>
        <Background playStatus={playStatus} heroCount={heroCount} />
        <Navbar/>
        <Hero
          setPlayStatus={setPlayStatus}
          heroData={heroData[heroCount]}
          setHeroCount={setHeroCount} // Changed prop name to match state setter
          playStatus={playStatus}
        />
      </div>
    );
}

export default App;
