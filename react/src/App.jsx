import { useState,useEffect } from 'react';
import ImageList from './Components/ImageLis';
import ImageDetail from './Components/imageDetail';
import imagesData from './Components/imagesData';
import logo from '../public/assets/shared/logo.svg';
import './App.css'

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isSlideshow, setIsSlideshow] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    let slideshowInterval;
    if (isSlideshow) {
      slideshowInterval = setInterval(() => {
        setCurrentSlide(prevSlide => (prevSlide + 1) % imagesData.length);
      }, 2000); 
      setSelectedImage(imagesData[currentSlide]);
    } else {
      clearInterval(slideshowInterval);
    }

    return () => clearInterval(slideshowInterval);
  }, [isSlideshow, currentSlide]);
    const startSlideshow = () => {
    setIsSlideshow(true);
    setSelectedImage(imagesData[0]);
    };

   const stopSlideshow = () => {
    setIsSlideshow(false);
    setSelectedImage(null);
    setCurrentSlide(0);
   };


  return (
    <div className="app">
      <header>
        <img src={logo} alt="logo"></img>
        <button  onClick={startSlideshow} className ="slideshow-button">START SLIDESHOW</button>
        </header>
      {selectedImage ? (
        <ImageDetail  image={selectedImage} onClose={stopSlideshow} />
      ) : (
        <ImageList images={imagesData} onImageClick={setSelectedImage} />
      )}
    </div>
  );
}

export default App;

