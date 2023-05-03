import React, { useState, useEffect } from "react";
import "../styles/Slider.css";

// uses the "useState" and "useEffect" hooks from React to manage the state of the current slide
//and to set an interval to automatically advance the slideshow.

//setCurrentSlide" function is used to update the state of the current slide,
// and it is initially set to 0

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 0,
      image: "imgs/conversation.svg",
    },
    {
      id: 1,
      image: "imgs/havingfun.svg",
    },
    {
      id: 2,
      image: "imgs/education.svg",
    },
    {
      id: 3,
      image: "imgs/group.svg",
    },
    {
      id: 3,
      image: "imgs/engineer.svg",
    },
  ];

  // "useEffect" hook is used to set an interval that calls the "setCurrentSlide"
  //function every 5000 milliseconds (or 5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, slides.length]);

  return (
    <div>
      <div className="hero-slider">
        <div className="about">
          <div class="content">
            <br></br>
            <h3>
              What <span> We do. </span>
            </h3>
            <p>
              {" "}
              Social Spark was founded in 2023 by three passionate individuals
              who shared a common goal: to create a platform that supports
              organizations in spreading knowledge about financial literacy,
              feeding the homeless, human rights, and supporting the youth.
              Their vision was to create a company that could bridge the gap
              between those who want to volunteer and organizations that need
              volunteers. Social Spark provides a portal that connects
              volunteers with organizations that need help, and it also tracks
              the time spent volunteering. This way, volunteers can keep track
              of their efforts and make sure that they are making a meaningful
              contribution to their communities. With a commitment to promoting
              positive change and supporting community initiatives, Social Spark
              is quickly becoming the go-to platform for individuals looking to
              make a difference in their community. The company's founders
              believe that everyone has something to give, and they are
              dedicated to creating a platform that makes it easy for people to
              get involved and make a difference.
            </p>
            {/* <button className='btn'>read more</button> */}
          </div>
        </div>
        <img
          src={slides[currentSlide].image}
          alt={slides[currentSlide].title}
        />
      </div>
    </div>
  );
}

export default Slider;
