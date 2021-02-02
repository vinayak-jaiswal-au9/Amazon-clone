import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="row">
        <ul className="row__name">
          <h2>Get to Know Us</h2>
          <li>Get to Know Us</li>
          <li>Careers</li>
          <li>Press Releases</li>
          <li>Amazon Cares</li>
          <li>Gift a Smile</li>
        </ul>
        <ul className="row__name">
          <h2>Connect with Us</h2>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
        </ul>
        <ul className="row__name">
          <h2>Make Money with Us</h2>
          <li>Sell on Amazon</li>
          <li>Advertise Your Products</li>
          <li>Amazon Pay on Merchantses</li>
          <li>Become an Affiliate</li>
          <li>Amazon Pay</li>
        </ul>
        <ul className="row__name">
          <h2>Let Us Help You</h2>
          <li>Your Account</li>
          <li>Returns Centre</li>
          <li>Amazon App Download</li>
          <li>Amazon Center</li>
          <li>Help</li>
        </ul>
      </div>

      <hr className="footer__line" />

      <div className="footer__image">
        <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
        <p>© 1996-2021, Amazon.com, Inc. or its affiliates</p>
      </div>
    </footer>
  );
}

export default Footer;
