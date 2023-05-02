import React from "react";
// import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "../styles/login.css";
// import Signup from '../components/Signup';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Loggedin({ Login, error }) {
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  // const submitHandler = (e) => {
  //   e.preventDefault();

  //   Login(details);
  // };
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
  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user" />
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
              <a href="https://www.facebook.com/ally" className="social-icon">
                <i className="fab fa-facebook-f" />
              </a>
              <a
                href="https://twitter.com/allyfinancial?lang=en"
                className="social-icon"
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                href="https://www.google.com/search?q=ally+financial&sxsrf=APwXEdcCpxXRSRsaSSFc7ltqrE2Qt4cEjA%3A1683042859466&source=hp&ei=KzJRZJHGGtnpkPIPtY25uA4&iflsig=AOEireoAAAAAZFFAO3iXt0wnkA1tGiIevHTzDysH8jYk&gs_ssp=eJzj4tTP1TcwS8ktyFZgNGB0YPDiS8zJqVRIy8xLzEvOTMwBAIdZCVI&oq=Ally+&gs_lcp=Cgdnd3Mtd2l6EAEYAzIHCCMQigUQJzIHCCMQigUQJzIHCCMQigUQJzIQCC4QigUQsQMQxwEQ0QMQQzITCC4QgAQQFBCHAhCxAxDHARDRAzINCAAQgAQQFBCHAhCxAzIICAAQgAQQsQMyBwgAEIoFEEMyBQgAEIAEMggIABCABBCxAzoNCC4QigUQxwEQ0QMQQzoTCC4QigUQsQMQgwEQxwEQ0QMQQzoKCC4QigUQ1AIQQzoQCC4QxwEQsQMQ0QMQigUQQzoOCC4QgAQQsQMQxwEQ0QM6EwguEBQQxwEQhwIQsQMQ0QMQgARQAFjWB2DhGGgAcAB4AIABY4gBvwOSAQE1mAEAoAEB&sclient=gws-wiz"
                className="social-icon"
              >
                <i className="fab fa-google" />
              </a>
              <a
                href="https://www.linkedin.com/company/ally/"
                className="social-icon"
              >
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
              <a href="https://www.facebook.com/ally" className="social-icon">
                <i className="fab fa-facebook-f" />
              </a>
              <a
                href="https://twitter.com/allyfinancial?lang=en"
                className="social-icon"
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                href="https://www.google.com/search?q=ally+financial&sxsrf=APwXEdcCpxXRSRsaSSFc7ltqrE2Qt4cEjA%3A1683042859466&source=hp&ei=KzJRZJHGGtnpkPIPtY25uA4&iflsig=AOEireoAAAAAZFFAO3iXt0wnkA1tGiIevHTzDysH8jYk&gs_ssp=eJzj4tTP1TcwS8ktyFZgNGB0YPDiS8zJqVRIy8xLzEvOTMwBAIdZCVI&oq=Ally+&gs_lcp=Cgdnd3Mtd2l6EAEYAzIHCCMQigUQJzIHCCMQigUQJzIHCCMQigUQJzIQCC4QigUQsQMQxwEQ0QMQQzITCC4QgAQQFBCHAhCxAxDHARDRAzINCAAQgAQQFBCHAhCxAzIICAAQgAQQsQMyBwgAEIoFEEMyBQgAEIAEMggIABCABBCxAzoNCC4QigUQxwEQ0QMQQzoTCC4QigUQsQMQgwEQxwEQ0QMQQzoKCC4QigUQ1AIQQzoQCC4QxwEQsQMQ0QMQigUQQzoOCC4QgAQQsQMQxwEQ0QM6EwguEBQQxwEQhwIQsQMQ0QMQgARQAFjWB2DhGGgAcAB4AIABY4gBvwOSAQE1mAEAoAEB&sclient=gws-wiz"
                className="social-icon"
              >
                <i className="fab fa-google" />
              </a>
              <a
                href="https://www.linkedin.com/company/ally/"
                className="social-icon"
              >
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </form>
        </div>
      </div>
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
}
export default Loggedin;
