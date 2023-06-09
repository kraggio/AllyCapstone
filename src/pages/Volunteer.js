// import { useState } from "react";
// import "../styles/Volunteer.css";
// import Axios from 'axios';

// function Volunteer() {
//   const [fullName, setFullName] = useState("");
//   const [orgName, setOrgName] = useState("");
//   const [volunteerType, setVolunteerType] = useState("");
//   const [hoursVolunteered, setHoursVolunteered] = useState("");

//   // const handleSubmit = (event) => {
//   //   event.preventDefault();
//   //   const newCard = { fullName, orgName, volunteerType, hoursVolunteered };
//   //   setCards([...cards, newCard]);
//   //   setFullName("");
//   //   setOrgName("");
//   //   setVolunteerType("");
//   //   setHoursVolunteered("");
//   // };
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     Axios.post('http://localhost:8004/volunteer', {
//       fullname: fullName,
//       org_name: orgName,
//       work_type: volunteerType,
//       vol_hours: hoursVolunteered,
//     })
//       .then((res) => {
//         console.log(res.data);
//         // Reset the form after successful submission
//         setFullName('');
//         setOrgName('');
//         setVolunteerType('');
//         setHoursVolunteered('');

//       })
//       .catch((err) => {
//         console.error('Error submitting contact form:', err);
//       });
//   };
import { useState } from "react";
import "../styles/Volunteer.css";
import Axios from "axios";

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
    Axios.post("http://localhost:8009/volunteer", {
      fullname: fullName,
      org_name: orgName,
      work_type: volunteerType,
      vol_hours: hoursVolunteered,
    })
      .then((response) => {
        console.log(response);
        // Do something after successful submission
      })
      .catch((error) => {
        console.log(error);
        // Do something if the submission fails
      });
  };

  return (
    <div className="container-v">
      <form onSubmit={handleSubmit} className="form-v">
        <div className="body-v">
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
        </div>
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
          <option value="Rising Right Now INC.">Rising Right Now INC.</option>
          <option value="Life Connections of the Carolinas INC.">
            Life Connections of the Carolinas INC.
          </option>
          <option value="Soul Beauty Outreach">Soul Beauty Outreach</option>
          <option value="Another Change House of Refuge">
            Another Change House of Refuge
          </option>
          <option value="Generational Wealth Educators">
            Generational Wealth Educators
          </option>
          <option value="Talented Girls in Action">
            Talented Girls in Action
          </option>
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
          <option value="Education">Education</option>
          <option value="Community">Community</option>
          <option value="Health">Health</option>
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
