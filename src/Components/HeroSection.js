import React from "react";
import hero from "../img/hero.png";
import cus1 from "../img/customers/customer-1.jpg";
import cus2 from "../img/customers/customer-2.jpg";
import cus3 from "../img/customers/customer-3.jpg";
import cus4 from "../img/customers/customer-4.jpg";
import cus5 from "../img/customers/customer-5.jpg";
import cus6 from "../img/customers/customer-6.jpg";
import logo from "../img/omnifood-logo.png";
import app from "../img/app/app-screen-1.png";
import app2 from "../img/app/app-screen-2.png";
import app3 from "../img/app/app-screen-3.png";
import logo1 from "../img/logos/techcrunch.png";
import logo2 from "../img/logos/forbes.png";
import logo3 from "../img/logos/business-insider.png";
import logo4 from "../img/logos/usa-today.png";
import logo5 from "../img/logos/the-new-york-times.png";
import meal1 from "../img/meals/meal-1.jpg";
import meal2 from "../img/meals/meal-2.jpg";
import Testimonials from "./Testimonials";
import CTASection from "./CTASection";

export const HeroSection = () => {
  return (
    <>
      <header className="header">
        <img src={logo} alt="omnifood-logo" className="logo" />
        <nav className="main-nav">
          <ul className="main-nav-list">
            <li>
              <a href="#" className="main-nav-link">
                Section 1
              </a>
            </li>
            <li>
              <a href="#" className="main-nav-link">
                Section 2
              </a>
            </li>
            <li>
              <a href="#" className="main-nav-link">
                Section 3
              </a>
            </li>
            <li>
              <a href="#" className="main-nav-link">
                Section 4
              </a>
            </li>
            <li>
              <a href="#" className="main-nav-link nav-cta">
                Section 5
              </a>
            </li>
          </ul>
        </nav>
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
              <a href="#" className="btn btn--full margin-right-sm">
                Start eating well
              </a>
              <a href="#" className="btn btn--outline">
                Learn More &darr;
              </a>
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
        <section className="section-how">
          <div className="container">
            <span className="subheading">How it works</span>
            <h2 className="heading-secondary">
              Your daily dose of health in 3 simple steps
            </h2>
          </div>
          <div className="container grid grid--2-cols gird--center-v">
            {/* Step-01 */}
            <div className="step-text-box">
              <p className="step-number">01</p>
              <h3 className="heading-tertiary">
                Tell us what you like (and what not):
              </h3>
              <p className="step-description">
                Never again waste time thinking about what to eat! Omnifood AI
                will create a 100% personalized weekly meal plan just for you.
                It makes sure you get all the nutrients and vitamins you need,
                no matter what diet you follow!
              </p>
            </div>
            <div className="step-img-box">
              <img
                src={app}
                className="step-img"
                alt="iPhone app preferences selection screen"
              />
            </div>
            {/* Step-02 */}
            <div className="step-img-box">
              <img
                src={app2}
                className="step-img"
                alt="iPhone app meal approving plan screen"
              />
            </div>
            <div className="step-text-box">
              <p className="step-number">02</p>
              <h3 className="heading-tertiary">
                Approve your weekly meal plan:
              </h3>
              <p className="step-description">
                Once per week, approve the meal plan generated for you by
                Omnifood AI. You can change ingredients, swap entire meals, or
                even add your own recipes.
              </p>
            </div>
            {/* Step-03 */}
            <div className="step-text-box">
              <p className="step-number">03</p>
              <h3 className="heading-tertiary">
                Receive meals at convenient time:
              </h3>
              <p className="step-description">
                Best chefs in town will cook your selected meal every day, and
                we will deliver it to your door whenever works best for you. You
                can change delivery schedule and address daily!
              </p>
            </div>
            <div className="step-img-box">
              <img
                src={app3}
                className="step-img"
                alt="iPhone app delivery screen"
              />
            </div>
          </div>
        </section>
        <section className="section-meals">
          <div className="container center-text">
            <span className="subheading">Meals</span>
            <h2 className="heading-secondary">
              Omnifood AI chooses from 5,000+ recipes
            </h2>
          </div>
          <div className="container grid grid--3-cols margin-bottom-md">
            <div className="meal">
              <img src={meal1} className="meal-img" alt="Japanese Gyozas" />
              <div className="meal-content">
                <div className="meal-tags">
                  <span className="tag tag--vegetarian">Vegetarian</span>
                </div>
                <p className="meal-title">Japanese Gyozas</p>
                <ul className="meal-attributes">
                  <li className="meal-attribute">
                    <ion-icon
                      className="meal-icon"
                      name="flame-outline"
                    ></ion-icon>
                    <span>
                      <strong>650</strong> calories
                    </span>
                  </li>
                  <li className="meal-attribute">
                    <ion-icon
                      className="meal-icon"
                      name="restaurant-outline"
                    ></ion-icon>
                    <span>
                      NutriScore &reg; <strong>74</strong>
                    </span>
                  </li>
                  <li className="meal-attribute">
                    <ion-icon
                      className="meal-icon"
                      name="star-outline"
                    ></ion-icon>
                    <span>
                      <strong>4.9</strong> rating (537)
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="meal">
              <img src={meal2} className="meal-img" alt="Avocado Salad" />
              <div className="meal-content">
                <div className="meal-tags">
                  <span className="tag tag--vegan">
                    Vegan
                  </span>
                  <span className="tag tag--paleo">Paleo</span>
                </div>
                <p className="meal-title">Avocado Salad</p>
                <ul className="meal-attributes">
                  <li className="meal-attribute">
                    <ion-icon
                      className="meal-icon"
                      name="flame-outline"
                    ></ion-icon>
                    <span>
                      <strong>400</strong> calories
                    </span>
                  </li>
                  <li className="meal-attribute">
                    <ion-icon
                      className="meal-icon"
                      name="restaurant-outline"
                    ></ion-icon>
                    <span>
                      NutriScore &reg; <strong>92</strong>
                    </span>
                  </li>
                  <li className="meal-attribute">
                    <ion-icon
                      className="meal-icon"
                      name="star-outline"
                    ></ion-icon>
                    <span>
                      <strong>4.8</strong> rating (441)
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="diets">
            <h3 className='heading-tertiary'>Works with any diet</h3>
              <ul className="list">
                <li className="list-item"><ion-icon name="checkmark-outline"></ion-icon><span>Vegetarian</span></li>
                <li className="list-item"><ion-icon name="checkmark-outline"></ion-icon><span>Vegan</span></li>
                <li className="list-item"><ion-icon name="checkmark-outline"></ion-icon><span>Pescatarianegan</span></li>
                <li className="list-item"><ion-icon name="checkmark-outline"></ion-icon><span>Gluten-free</span></li>
                <li className="list-item"><ion-icon name="checkmark-outline"></ion-icon><span>Lactose-free</span></li>
                <li className="list-item"><ion-icon name="checkmark-outline"></ion-icon><span>Keto</span></li>
                <li className="list-item"><ion-icon name="checkmark-outline"></ion-icon><span>Paleo</span></li>
                <li className="list-item"><ion-icon name="checkmark-outline"></ion-icon><span>Low FODMAP</span></li>
                <li className="list-item"><ion-icon name="checkmark-outline"></ion-icon><span>Kid-friendly</span></li>
              </ul>
            </div>
          </div>
          <div className="container all-recipes">
            <a href="#" className="link">See all recipes &rarr;</a>
          </div>
        </section>
        <Testimonials/>
        <CTASection/>
      </main>
    </>
  );
};
