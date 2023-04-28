import React, { useState, useEffect } from 'react';
import '../styles/Slider.css'

// uses the "useState" and "useEffect" hooks from React to manage the state of the current slide 
//and to set an interval to automatically advance the slideshow.

//setCurrentSlide" function is used to update the state of the current slide,
// and it is initially set to 0

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
  {
  id: 0,
  image: 'imgs/AC.png',
  },
  {
  id: 1,
      image: 'imgs/anotherchance.png',
    },
    {
      id: 2,
      image: 'imgs/AC.png' ,
    },
    {
      id: 3,
      image: 'imgs/anotherchance.png' ,
    },
    {
      id: 3,
      image: 'imgs/AC.png' ,
    },
  
  ];
  
// "useEffect" hook is used to set an interval that calls the "setCurrentSlide" 
//function every 5000 milliseconds (or 5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div>
      <div className="hero-slider">
      <div className='about'>
<div class="content">
<br></br><h3>What <span> We do. </span></h3>
<p> text about our mission.text about our missiontext about our missiontext about our missiontext about our missiontext about our missiontext about our missiontext about our missiontext about our missiontext about our missiontext about our missiontext about our missiontext about our missiontext about our missiontext about our missiontext about our missiontext about our mission.text about our missiontext about our missiontext about our missiontext about our missiontext about our missiontext about our missiontext about our mission

</p>
{/* <button className='btn'>read more</button> */}
</div>
</div>
        <img src={slides[currentSlide].image} alt={slides[currentSlide].title} />
      </div>
    </div>
  );

}

export default Slider;