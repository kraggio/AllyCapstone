import React from "react";
// import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "../styles/login.css";
// import Signup from '../components/Signup';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Loggedin({ Login, error }) {
<<<<<<< HEAD
  const [details, setDetails] = useState({
=======
  const [details, setDetails ] = useState({
>>>>>>> b132948e1a7d54dd290fe6061c8f5dab6ade240d
    email: "",
    password: "",
  });
  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
<<<<<<< HEAD
  };
=======
  }
>>>>>>> b132948e1a7d54dd290fe6061c8f5dab6ade240d
  const navigate = useNavigate();

  useEffect(() => {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");

    sign_up_btn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
    });

    sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
    });

    // Cleanup function to remove event listeners when the component unmounts
    return () => {
      sign_up_btn.removeEventListener("click", () => {
        container.classList.add("sign-up-mode");
      });

      sign_in_btn.removeEventListener("click", () => {
        container.classList.remove("sign-up-mode");
      });
    };
  }, []);
<<<<<<< HEAD
  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user" />
=======
  return(
      <div className="container">
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form">
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-user" />
                <input type="text" username="username" id="username" placeholder="Username" onChange={e => setDetails({...details, username: e.target.value })} vallue={details.username} />
              </div>
              <div className="input-field">
                <i className="fas fa-lock" />
                <input type="password" placeholder="Password" />
              </div>
              {/* <input type="submit" defaultValue="Login" className="btn solid" /> */}
>>>>>>> b132948e1a7d54dd290fe6061c8f5dab6ade240d
              <input
                type="text"
                username="username"
                id="username"
                placeholder="Username"
                onChange={(e) =>
                  setDetails({ ...details, username: e.target.value })
                }
                vallue={details.username}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock" />
              <input type="password" placeholder="Password" />
            </div>
            {/* <input type="submit" defaultValue="Login" className="btn solid" /> */}
            <input
              type="submit"
              defaultValue="Login"
              className="btn solid"
              onClick={() => navigate("/volunteer")}
            />

            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter" />
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google" />
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </form>
          <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user" />
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope" />
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock" />
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" className="btn" defaultValue="Sign up" />
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter" />
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google" />
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </form>
        </div>
      </div>
<<<<<<< HEAD
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p></p>
            <h4>You're in the right place!</h4>
            Create an account to explore all of our different allies. A culture
            of giving back.
            <h4>Better Together.</h4>
            <p />
            <button className="btn transparent" id="sign-up-btn">
              Sign up
            </button>
          </div>
          <img src="imgs/connect.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h1>One of us ?</h1>
            <p></p>
            <h4>Welome Back!</h4>
            <p />
            <button className="btn transparent" id="sign-in-btn">
              Sign in
            </button>
          </div>
          <img src="imgs/signup.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  );
=======
  )
>>>>>>> b132948e1a7d54dd290fe6061c8f5dab6ade240d
}
export default Loggedin;
