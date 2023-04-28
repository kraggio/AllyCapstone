import { useState } from "react";
import "../styles/Volunteer.css";

function Volunteer() {
  const [fullName, setFullName] = useState("");
  const [orgName, setOrgName] = useState("");
  const [volunteerType, setVolunteerType] = useState("");
  const [hoursVolunteered, setHoursVolunteered] = useState("");
  const [cards, setCards] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCard = { fullName, orgName, volunteerType, hoursVolunteered };
    setCards([...cards, newCard]);
    setFullName("");
    setOrgName("");
    setVolunteerType("");
    setHoursVolunteered("");
  };

  return (
    <div className="container-v">
      <form onSubmit={handleSubmit} className="form-v">
        <body className="body-v">
          <div className="loader">
            <span style={{ "--i": 10 }}></span>
            <span style={{ "--i": 9 }} className="span-v"></span>
            <span style={{ "--i": 8 }} className="span-v"></span>
            <span style={{ "--i": 7 }} className="span-v"></span>
            <span style={{ "--i": 6 }} className="span-v"></span>
            <span style={{ "--i": 5 }} className="span-v"></span>
            <span style={{ "--i": 4 }} className="span-v"></span>
            <span style={{ "--i": 3 }} className="span-v"></span>
            <span style={{ "--i": 2 }} className="span-v"></span>
            <span style={{ "--i": 1 }} className="span-v"></span>
          </div>
        </body>
        <label htmlFor="fullName-input" className="label-v">
          Full Name:
        </label>
        <input
          className="input-v"
          type="text"
          id="fullName-input"
          name="fullName"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
          required
        />

        <label htmlFor="orgName-input" className="label-v">
          Name of organization:
        </label>
        <select
          className="select-v"
          id="orgName-input"
          name="orgName"
          value={orgName}
          onChange={(event) => setOrgName(event.target.value)}
          required
        >
          <option value="">Select an option</option>
          <option value="Organization 1">Organization 1</option>
          <option value="Organization 2">Organization 2</option>
          <option value="Organization 3">Organization 3</option>
        </select>

        <label htmlFor="volunteerType-input" className="label-v">
          Type of volunteer work:
        </label>
        <select
          className="select-v"
          id="volunteerType-input"
          name="volunteerType"
          value={volunteerType}
          onChange={(event) => setVolunteerType(event.target.value)}
          required
        >
          <option value="">Select an option</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
        </select>

        <label htmlFor="hoursVolunteered-input" className="label-v">
          Hours volunteered:
        </label>
        <input
          className="input-v"
          type="number"
          id="hoursVolunteered-input"
          name="hoursVolunteered"
          value={hoursVolunteered}
          onChange={(event) => setHoursVolunteered(event.target.value)}
          required
        />

        <button type="submit" className="button-v">
          Submit
        </button>
      </form>

      {cards.map((card, index) => (
        <div className="card-v" key={index}>
          <h2>{card.fullName}</h2>
          <p>Organization: {card.orgName}</p>
          <p>Volunteer Type: {card.volunteerType}</p>
          <p>Hours Volunteered: {card.hoursVolunteered}</p>
        </div>
      ))}
    </div>
  );
}

export default Volunteer;
