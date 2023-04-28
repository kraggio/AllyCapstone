import React from 'react';
import Slider from "../components/Slider";

function Home() {
    return (
        <div className="html">
        <div className="home">
          <div className="content">
            <h3> welcome to Social Spark!</h3>
            {/* <a href="/partners">
              <button>Explore!</button>
            </a> */}
          </div>
        </div>
        <Slider />
        <div className="about">
          <div className="image">
            <img src="" alt="viv" />
          </div>
          <div class="content">
            <h3>
              <span> Meet</span> The Creators.
            </h3>
            <p>
              text about the team....text about the team....text about the team....text about the team....text about the team....text about the team....text about the team....text about the team....text about the team....text about the team....text about the team....text about the team....text about the team....text about the team....text about the team....text about the team....text about the team....text about the team....text about the team....text about the team....
            </p>
          </div>
        </div>
      </div>
    );
  }

export default Home;