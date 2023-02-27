import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/omnifood-logo.png";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container grid grid--5-cols grid--footer">
          <div className="logo-col">
            <Link to="/" className="footer-logo">
              <img src={logo} alt="omnifood-logo" className="logo" />
            </Link>
            <ul className="social-links">
              <li><a className="footer-link" href="#"><ion-icon name="logo-instagram"></ion-icon></a></li>
              <li><a className="footer-link" href="#"><ion-icon name="logo-facebook"></ion-icon></a></li>
              <li><a className="footer-link" href="#"><ion-icon name="logo-twitter"></ion-icon></a></li>
            </ul>
            <p className="copyright">
              Copyright &copy; 2027 by Omnifood,Inc. All rights reserved
            </p>
          </div>
          <div className="address-col">
            <p className="footer-heading">Contact us</p>
            <address className="contacts">
              <p className="address">623 Harrison St., 2nd Floor, San Francisco, CA 94107</p>
              <p>
              <a className="footer-link" href='tel:415-201-6370'>415-201-6370</a><br/>
              <a className="footer-link" href="mailto:hello@omnifood.com">hello@omnifood.com</a>
              </p>
            </address>
          </div>
          <nav className="nav-col">
            <p className="footer-heading">Account</p>
            <ul className="footer-nav">
              <li><a className="footer-link" href="#">Create Account</a></li>
              <li><a className="footer-link" href="#">Sign in</a></li>
              <li><a className="footer-link" href="#">iOS app</a></li>
              <li><a className="footer-link" href="#">Android app</a></li>
            </ul>
          </nav>
          <nav className="nav-col">
            <p className="footer-heading">Company</p>
            <ul className="footer-nav">
              <li><a className="footer-link" href="#">About Omnifood</a></li>
              <li><a className="footer-link" href="#">For Business</a></li>
              <li><a className="footer-link" href="#">Cooking partners</a></li>
              <li><a className="footer-link" href="#">Careers</a></li>
            </ul>
          </nav>
          <nav className="nav-col">
            <p className="footer-heading">Resources</p>
            <ul className="footer-nav">
              <li><a className="footer-link" href="#">Recipe Directory</a></li>
              <li><a className="footer-link" href="#">Help center</a></li>
              <li><a className="footer-link" href="#">Privacy & terms</a></li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
};

export default Footer;
