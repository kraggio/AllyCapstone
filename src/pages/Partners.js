import React from "react";
import Card from "../components/Card";
import "../styles/Partners.css";

const Partners = () => {
  return (
    <div className="wholepage">
      <div className="Partners">
        <h1>
          {" "}
          Our <span>Partners.</span>{" "}
        </h1>
      </div>
      <div className="grid-container">
        {/* <div className="content-area"> */}
        <Card
          imageSrc="/imgs/conversation.svg"
          title="Rising Right Now INC."
          text="Children & Youth, Community, Sports & Recreaction"
          link="http://www.risingnowinc.org/"
        />
        <Card
          imageSrc="/imgs/havingfun.svg"
          title="Life Connections Of the Carolinas INC."
          text="Advocacy & Human Rights, Children & Youth, Community"
          link="https://lifeconnections.us/"
        />
        <Card
          imageSrc="/imgs/team.svg"
          title="Soul Beauty Outreach."
          text="Health & Medicine, Homless & Housing"
          link="https://soulbeautyoutreach.com/"
        />
        <Card
          imageSrc="/imgs/education.svg"
          title="Another Change House of Refuge."
          text="Community, Education & Literacy, Homeless & Housing"
          link="https://anotherchanceclt.org/"
        />
        <Card
          imageSrc="/imgs/group.svg"
          title="Generational Wealth Educators."
          text="Community, Education & Literacy, Homeless & Housing"
          link="https://www.gweducators.com/"
        />
        <Card
          imageSrc="/imgs/happy.svg"
          title="Talented Girls In Action."
          text="Community, Education & Literacy, Homeless & Housing"
          link="https://tgiainc.org/"
        />
      </div>
    </div>
  );
};
export default Partners;
