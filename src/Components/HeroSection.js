import React, { useState } from "react";
import hero from "../img/hero.png";
import cus1 from "../img/customers/customer-1.jpg";
import cus2 from "../img/customers/customer-2.jpg";
import cus3 from "../img/customers/customer-3.jpg";
import cus4 from "../img/customers/customer-4.jpg";
import cus5 from "../img/customers/customer-5.jpg";
import cus6 from "../img/customers/customer-6.jpg";
import logo from "../img/omnifood-logo.png";
import logo1 from "../img/logos/techcrunch.png";
import logo2 from "../img/logos/forbes.png";
import logo3 from "../img/logos/business-insider.png";
import logo4 from "../img/logos/usa-today.png";
import logo5 from "../img/logos/the-new-york-times.png";
import Testimonials from "./Testimonials";
import CTASection from "./CTASection";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import How from "./How";
import Meals from "./Meals";
import Pricing from "./Pricing";

export const HeroSection = () => {
  const[menu,setMenu]=useState(false);
  const openMenu=()=>{
    setMenu(true);
    const headerEl=document.querySelector('.header');
    headerEl.classList.toggle('nav-open')
  }
  return (
    <>
      <header className="header">
      <Link href="/">
        <img src={logo} alt="omnifood-logo" className="logo" />
        </Link>
        <nav className="main-nav">
          <ul className="main-nav-list">
            <li>
              <Link to="/how" className="main-nav-link">
                How it works
              </Link>
            </li>
            <li>
              <Link to="/meals" className="main-nav-link">
                Meals
              </Link>
            </li>
            <li>
              <Link to="/testimonials" className="main-nav-link">
                Testimonials
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="main-nav-link">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/cta" className="main-nav-link nav-cta">
                Try for free
              </Link>
            </li>
          </ul>
        </nav>
        <button className='btn-mobile-nav' onClick={openMenu}>
          <ion-icon name='menu-outline'></ion-icon>
          <ion-icon name='close-outline'></ion-icon>
        </button>
      </header>
      <main>
        <section className="section-hero">
          <div className="hero">
            <div className="hero-text-box">
              <h1 className="heading-primary">
                A healthy meal delivered to your door, every single day
              </h1>
              <p className="hero-description">
                The smart 365-days-per-year food subscription that will make you
                eat healthy again. Tailored to your personal tastes and
                nutritional needs.
              </p>
              <Link to='/cta' className="btn btn--full margin-right-sm">
                Start eating well
              </Link>
              <Link to="/how" className="btn btn--outline">
                Learn More &darr;
              </Link>
              <div className="delivered-meals">
                <div className="delivered-imgs">
                  <img src={cus1} alt="customer-photo" />
                  <img src={cus2} alt="customer-photo" />
                  <img src={cus3} alt="customer-photo" />
                  <img src={cus4} alt="customer-photo" />
                  <img src={cus5} alt="customer-photo" />
                  <img src={cus6} alt="customer-photo" />
                </div>
                <p className="delivered-text">
                  <span>250,000+</span> meals delivered last year!
                </p>
              </div>
            </div>
            <div className="hero-img-box">
              <img
                src={hero}
                className="hero-img"
                alt="Women enjoying food,meals in storage container, and food bowls on a table"
              />
            </div>
          </div>
        </section>
        <section className="section-featured">
          <div className="container">
            <h2 className="heading-featured-in">As featured in</h2>
            <div className="logos">
              <img src={logo1} alt="Techcrunch logo" />
              <img src={logo2} alt="Forbes logo" />
              <img src={logo3} alt="Business Insider logo" />
              <img src={logo4} alt="USA Today logo" />
              <img src={logo5} alt="The New York Times logo" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
