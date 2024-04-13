import React, { useState, useRef } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image6 from '../Assets/Image8.jpg';
import Image7 from '../Assets/Image7.jpg';
import Image8 from '../Assets/Image8.jpg';
import Image9 from '../Assets/Image7.jpg';
import Image10 from '../Assets/Image8.jpg';
import {  Typography} from '@mui/material';

import './MidSection.css'

const SimpleSlider = () => {
  const [showText, setShowText] = useState(true);
  const sliderRef = useRef(null);

  const handleSlideChange = (index) => {
    // Function to handle slide changes
    console.log(`Slide changed to index ${index}`);
    // Hide the text content when index is greater than 0
    setShowText(index === 0);
  };

  const images = [Image6, Image7, Image8, Image9, Image10];
  
  // Text data
  const textData = {
    heading: "Skin Care+",
    info: "Intensive formulations for complex skin",
    details: "Explore products formulated with mature skin and urban dwellers in mind, to provide daily hydration and the additional benefit of potent vitamins and anti-oxidants."
  };

  const settings = {
    line: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    afterChange: (index) => handleSlideChange(index),
  };

  // Grouping images into sets of 3 for each slide
  const groupedImages = [];
  for (let i = 0; i < images.length; i += 3) {
    groupedImages.push(images.slice(i, i + 3));
  }

  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const goToNextSlide = () => {
    const currentSlide = sliderRef.current.innerSlider.state.currentSlide;
    const totalSlides = groupedImages.length;
    let nextSlide = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1;

    // If next slide has no images, find the next slide with images
    while (groupedImages[nextSlide].length === 0) {
      nextSlide = nextSlide === totalSlides - 1 ? 0 : nextSlide + 1;
    }

    sliderRef.current.slickGoTo(nextSlide);
    setShowText(nextSlide === 0);
  };

  return (
    <div style={{ maxWidth: '100vw', margin: '0 auto', position: 'relative',paddingTop: '100px',backgroundColor:'#dbd1c5' }}>
    <button className="nav-button prev-arrow prev" onClick={goToPrevSlide}>
  <div className="arrow-container">
    <div className="arrow left-arrow"></div>
  </div>
</button>
<button className="nav-button next-arrow next" onClick={goToNextSlide}>
  <div className="arrow-container">
    <div className="arrow right-arrow"></div>
  </div>
</button>
      <div style={{ position: 'relative', zIndex: 0 }}>
        <Slider ref={sliderRef} {...settings}>
          {groupedImages.map((group, index) => (
            <div key={index}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className={`text-content ${index === 0 && showText ? '' : 'hidden'}`}>
                  {/* Text content */}
                  {index === 0 && showText && (
                    <div>
                      <Typography  variant='h6'className="text-heading" style={{ marginLeft: '80px', fontFamily: 'Arial' }}>{textData.heading}</Typography>
                      <Typography variant='h4' className="text-info" style={{ marginLeft: '80px', fontFamily: 'Antipasto Pro' }}>{textData.info}</Typography>
                      <Typography  variant='h5' className="text-details" style={{ marginLeft: '80px', fontFamily: 'Antipasto Pro' }}>{textData.details}</Typography>
                      <Typography style={{ paddingTop: '10px', marginLeft: '80px', position: 'relative', display: 'inline-block' }} variant='h6'>
  Browse formulations
  <span className="arroww">&#8594;</span> 
</Typography>
                    </div>
                  )}
                </div>
                {group.map((image, i) => (
                  <div key={i} style={{ marginLeft: i > 0 ? '20px' : '0' }}>
                    <img src={image} alt={`Image ${index * 3 + i + 1}`} className="carousel-image" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SimpleSlider;
