
import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import './HeroSection.css';
import image4 from '../Assets/image4.jpg';
import image5 from '../Assets/image5.jpg';
import image6 from '../Assets/image6.jpg';

const CarouselComponent = () => {
  // Initial text for each slide
  const textData = [
    {
      heading: "Warm weather companions",
      info: "Exfoliating and Replenishing Duo",
      details: "Support the skin as humidity rises by polishing away dead skin cells with a cream exfoliant and following with a hydrating, refreshing gel-based masque twice weekly"
    },
    {
      heading: "Skin Care+",
      info: "Vitamin-enriched skin care",
      details: "Additional details about thWith generous measures of efficacious botanicals and skin-supportive ingredients, the Skin Care+ range was designed to provide optimal replenishment."
    },
    {
      heading: "A tonic of many talents",
      info: "Introducing Immaculate Facial Tonic",
      details: "Enriched with Vitamin B3 (Niacinamide), Provitamin B5 (Panthenol), and a gentle chemical exfoliant, this new addition to the replenishing Skin Care+ range hydrates, balances and softens the skin in a daily step."
    }
  ];

  // State to keep track of current text
  const [currentText, setCurrentText] = useState(textData[0]);

  // Function to handle change in carousel slide
  const handleSlideChange = (index) => {
    setCurrentText(textData[index]);
  };

  // State to keep track of the screen width
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Function to update screen width
  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  // Listen for screen width changes
  useEffect(() => {
    window.addEventListener('resize', updateScreenWidth);
    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    };
  }, []);

  return (
    <Grid container spacing={2} className="carousel-container">
    {screenWidth >= 1280 ? (
      <>
        <Grid item lg={2} className="brand-name hidden-sm" >
          <Typography variant="h2" className="brand-name">Aesop</Typography>
        </Grid>
        <Grid item xs={12} lg={4} style={{ marginTop: '80px', gap: '50px' }}>
          <Typography variant="h6" style={{ marginBottom: '10px', fontFamily: 'Arial' }} className='heading'>{currentText.heading}</Typography>
          <Typography variant="h4" style={{ marginBottom: '10px', fontFamily: 'Antipasto Pro' }} className='info'>{currentText.info}</Typography>
          <Typography variant="h5" style={{ marginBottom: '10px', fontFamily: 'Antipasto ' }} className='details'>{currentText.details}</Typography>
          <div style={{ display: 'inline-block', border: '1px solid black', padding: '5px' }}>
  <Typography className='more' style={{ paddingTop: '10px', position: 'relative', display: 'inline-block' }} variant='h6'>
    Discover the formulation
    <span className="arroww">&#8594;</span> 
  </Typography>
</div>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Carousel
            autoPlay={false}
            interval={3000}
            indicators={true}
            navButtonsAlwaysVisible={true}
            cycleNavigation={true}
            onChange={(index) => handleSlideChange(index)}
            className="custom-carousel" // Add custom class for styling
          >
            <img src={image4} alt="Image 1" className="carousel-image" />
            <img src={image5} alt="Image 2" className="carousel-image" />
            <img src={image6} alt="Image 3" className="carousel-image" />
          </Carousel>
        </Grid>
      </>
      ) : (
        <Grid item xs={12} md={12} lg={12} style={{ justifyContent: 'center' }}>
          <Carousel
            autoPlay={false}
            interval={3000}
            indicators={true}
            navButtonsAlwaysVisible={true}
            cycleNavigation={true}
            onChange={(index) => handleSlideChange(index)}
            className="custom-carousel" // Add custom class for styling
          >
            <img src={image4} alt="Image 1" className="carousel-image" />
            <img src={image5} alt="Image 2" className="carousel-image" />
            <img src={image6} alt="Image 3" className="carousel-image" />
          </Carousel>
        </Grid>
      )}
      {screenWidth < 1280 && (
        <Grid item xs={12} md={12} lg={12}>
          <Grid container spacing={2}>
            <Grid item xs={12}  style={{ marginLeft:'100px' }}>
              <Typography variant="h6" style={{ marginBottom: '10px', fontFamily: 'Arial' }} className='heading'>{currentText.heading}</Typography>
              <Typography variant="h4" style={{ marginBottom: '10px', fontFamily: 'Antipasto Pro' }} className='info'>{currentText.info}</Typography>
              <Typography variant="h5" style={{ marginBottom: '10px', fontFamily: 'Antipasto' }} className='details'>{currentText.details}</Typography>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default CarouselComponent;



