import React, { useState } from "react";
import "../styles/Contact.css";
import "../components/Navbar";
import MyComponent from "../components/Map";
// import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
// function Map() {
//   return (
//    <GoogleMap
//   defaultZooom={10}
//   defaultCenter={{lat: 35.227085, lng:-80.843124}}
// />
//   )
// }
//  const WrappedMap= withScriptjs(withGoogleMap(Map));
// usues use state hook to create four state variables to keep track of the values entered into each input field:
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  //function is called when the form is submitted. prevents the default form submission behavior using event.preventDefault(), which would normally refresh the page.
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Thank you for your message, ${name}! We will get back to you via email or phone provided!`
    );
  };
  return (
    <>
      <section className="contact-c" id="contact">
        <div className="map">
          <MyComponent />
        </div>
        <form action="" onSubmit={handleSubmit}>
          <h3>Stay Connected!</h3>
          <input
            type="text"
            placeholder="your name"
            className="box"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
          <input
            type="email"
            placeholder="your email"
            className="box"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <input
            type="number"
            placeholder="your number"
            className="box"
            value={number}
            onChange={(event) => setNumber(event.target.value)}
          />
          <textarea
            name=""
            placeholder="your message"
            id=""
            cols="30"
            rows="10"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
          <input type="submit" value="send message" className="btn-c" />
        </form>
      </section>
    </>
  );
};
export default Contact;