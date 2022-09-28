import React from "react";
import classes from "./Footer.module.css";

import logo from "../../images/logo-white.svg";
import facebookLogo from "../../images/facebook.svg";
import twitterLogo from "../../images/twitter.svg";
import instagramLogo from "../../images/instagram.svg";
import linkedinLogo from "../../images/linkedin.svg";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.column}>
        <label>Company</label>
        <ul>
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">Why Choose us</a>
          </li>
          <li>
            <a href="/">Pricing</a>
          </li>
          <li>
            <a href="/">Testimonial</a>
          </li>
        </ul>
      </div>
      <div className={classes.column}>
        <label>Resources</label>
        <ul>
          <li>
            <a href="/">Privacy Policy</a>
          </li>
          <li>
            <a href="/">Terms and Codition</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className={classes.column}>
        <label>Products</label>
        <ul>
          <li>
            <a href="/">Project management</a>
          </li>
          <li>
            <a href="/">Time tracker</a>
          </li>
          <li>
            <a href="/">Time schedule</a>
          </li>
          <li>
            <a href="/">Lead generate</a>
          </li>
          <li>
            <a href="/">Remote Collaboration</a>
          </li>
        </ul>
      </div>
      <div className={classes.column}>
        <ul>
          <li>
            <img src={logo} className={classes.logo} alt="logo" />
          </li>
        </ul>
        <label>Subscribe to our Newsletter</label>
        <form>
          <div className={classes.subscribe}>
            <input
              type="text"
              placeholder="Enter your Email"
              name="subscribe-email"
            />
            <button>Subscribe</button>
          </div>
        </form>
      </div>
      <div className={classes.break}></div>
      <div className={classes.social}>
        <ul>
          <li>
            <span className={classes.line} />
          </li>
          <li>&copy; Copyright Finsweet {new Date().getFullYear()}</li>
          <li>
            <img src={facebookLogo} alt="facebookLogo" />
          </li>
          <li>
            <img src={twitterLogo} alt="twitterLogo" />
          </li>
          <li>
            <img src={instagramLogo} alt="instagramLogo" />
          </li>
          <li>
            <img src={linkedinLogo} alt="linkedinLogo" />
          </li>
          <li>
            <span className={classes.line} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
