import React from "react";
import Card from "../components/Card";
import '../styles/Partners.css'


const Partners = () => {
  return (
    <div className="wholepage">
    <div className="grid-container">
    {/* <div className="content-area"> */}
      <Card
        imageSrc="/imgs/sprk.svg"
        title="Rising Right Now INC."
        text="Children & Youth, Community, Sports & Recreaction"
        link="http://www.risingnowinc.org/"
      />
      <Card
        imageSrc="/imgs/sprk.svg"
        title="Life Connections Of the Carolinas INC."
        text="Advocacy & Human Rights, Children & Youth, Community"
        link="https://lifeconnections.us/"
      />
      <Card
        imageSrc="/imgs/sprk.svg"
        title="Soul Beauty Outreach."
        text="Health & Medicine, Homless & Housing"
        link="https://soulbeautyoutreach.com/"
      />
      <Card
        imageSrc="/imgs/anotherchance.png"
        title="Another Change House of Refuge."
        text="Community, Education & Literacy, Homeless & Housing"
        link="https://anotherchanceclt.org/"
      />
      <Card
        imageSrc="/imgs/AC.png"
        title="Generational Wealth Educators."
        text="Community, Education & Literacy, Homeless & Housing"
        link="https://www.gweducators.com/"
      />
      <Card
        imageSrc="/imgs/sprk.svg"
        title="Talented Girls In Action."
        text="Community, Education & Literacy, Homeless & Housing"
        link="https://tgiainc.org/"
      />
    </div>
     </div>
  );
};

export default Partners;
