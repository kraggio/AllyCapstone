// import { Link } from "react-router-dom";
// import "../styles/Footer.css";

// function Footer() {
//   return (
//     <div className="container">
//       <footer className="footerContain">
//         <ul className="ulContainer">
//           <li className="nav-item">
//             <Link to="/" className="linkContain">
//               Home
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link to="/volunteer" className="linkContain">
//               Dashboard
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link to="/contact" className="linkContain">
//               Contact Us
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link to="/login" className="linkContain">
//               Login
//             </Link>
//           </li>
//         </ul>
//         <p>© 2023 SocialSpark, Inc</p>
//       </footer>
//     </div>
//   );
// }

// export default Footer;

import React from "react";
import "../styles/Footer.css";
import insta from "../images/insta.jpg";
import twitter from "../images/twitter.jpg";
import tiktok from "../images/tiktok.jpg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb__footer section__padding">
        <div className="sb__footer-links">
          <div className="sb__footer-links-div">
            <h4>For Business</h4>
            <a href="/employer">
              <p>Employer</p>
            </a>
            <a href="/healthplan">
              <p>Health Plan</p>
            </a>
            <a href="/individual">
              <p>Individual</p>
            </a>
          </div>
          <div className="sb__footer-links-div">
            <h4>Resources</h4>
            <a href="/resource">
              <p>Resource center</p>
            </a>
            <a href="/resource">
              <p>Testimonials </p>
            </a>
            <a href="/resource">
              <p>STV</p>
            </a>
          </div>
          <div className="sb__footer-links-div">
            <h4>Company</h4>
            <a href="/about">
              <p>About</p>
            </a>
            <a href="/press">
              <p>Press</p>
            </a>
            <a href="/career">
              <p>Career</p>
            </a>
            <a href="/contact">
              <p>Contact</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Coming soon on </h4>
            <div className="socialmedia">
              <p>
                <a href="https://twitter.com/allyfinancial?lang=en">
                  <img src={twitter} alt="twitter" />
                </a>
              </p>
              <p>
                <a href="https://www.tiktok.com/@allydoitright?lang=en">
                  <img src={tiktok} alt="tiktok" />
                </a>
              </p>
              <p>
                <a href="https://www.instagram.com/ally/?hl=en">
                  <img src={insta} alt="instagram" />
                </a>
              </p>
            </div>
          </div>
        </div>

        <hr></hr>

        <div className="sb__footer-below">
          <div className="sb__footer-copyright">
            <p>@{new Date().getFullYear()} SocialSpark</p>
          </div>
          <div className="sb__footer-below-links">
            <a href="/terms">
              <div>
                <p>Terms & Conditions</p>
              </div>
            </a>
            <a href="/privacy">
              <div>
                <p>Privacy</p>
              </div>
            </a>
            <a href="/security">
              <div>
                <p>Security</p>
              </div>
            </a>
            <a href="/cookie">
              <div>
                <p>Cookie Declaration</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
