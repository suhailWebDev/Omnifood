import React from 'react';
import cus1 from "../img/customers/dave.jpg";
import cus2 from "../img/customers/ben.jpg";
import cus3 from "../img/customers/steve.jpg";
import cus4 from "../img/customers/hannah.jpg";
import gallery1 from '../img/gallery/gallery-1.jpg';
import gallery2 from '../img/gallery/gallery-2.jpg';
import gallery3 from '../img/gallery/gallery-3.jpg';
import gallery4 from '../img/gallery/gallery-4.jpg';
import gallery5 from '../img/gallery/gallery-5.jpg';
import gallery6 from '../img/gallery/gallery-6.jpg';
import gallery7 from '../img/gallery/gallery-7.jpg';
import gallery8 from '../img/gallery/gallery-8.jpg';
import gallery9 from '../img/gallery/gallery-9.jpg';
import gallery10 from '../img/gallery/gallery-10.jpg';
import gallery11 from '../img/gallery/gallery-11.jpg';
import gallery12 from '../img/gallery/gallery-12.jpg';

const Testimonials = () => {
  return (
    <>
      <section className='section-testimonials'>
      <div className='testimonials-container'>
            <span className="subheading">Testimonials</span>
            <h2 className="heading-secondary">
              Once you try it, you can't go back
            </h2>
        <div className='testimonials'>
        <figure className='testimonial'>
            <img src={cus1} className='testimonial-img' alt='Dave Bryson'/>
            <blockquote className='testimonial-text'>Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical.</blockquote>
            <p className='testimonial-name'>&mdash; Dave Bryson</p>
        </figure>
        <figure className='testimonial'>
            <img src={cus2} className='testimonial-img' alt='Ben Hadley'/>
            <blockquote className='testimonial-text'>The AI algorithm is crazy good, it chooses the right meals for me every time. It's amazing not to worry about food anymore!</blockquote>
            <p className='testimonial-name'>&mdash;  Ben Hadley</p>
        </figure>
        <figure className='testimonial'>
            <img src={cus3} className='testimonial-img' alt='Steve Miller'/>
            <blockquote className='testimonial-text'>Omnifood is a life saver! I just started a company, so there's no time for cooking. I couldn't live without my daily meals now!</blockquote>
            <p className='testimonial-name'>&mdash;  Steve Miller</p>
        </figure>
        <figure className='testimonial'>
            <img src={cus4} className='testimonial-img' alt='Hannah Smith'/>
            <blockquote className='testimonial-text'>I got Omnifood for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic.</blockquote>
            <p className='testimonial-name'>&mdash;  Hannah Smith</p>
        </figure>
        </div>
        </div>
        <div className='gallery'>
          <figure className='gallery-item'>
            <img src={gallery1} alt='photo of food'/>
          </figure>
          <figure className='gallery-item'>
            <img src={gallery2} alt='photo of food'/>
          </figure>
          <figure className='gallery-item'>
            <img src={gallery3} alt='photo of food'/>
          </figure>
          <figure className='gallery-item'>
            <img src={gallery4} alt='photo of food'/>
          </figure>
          <figure className='gallery-item'>
            <img src={gallery5} alt='photo of food'/>
          </figure>
          <figure className='gallery-item'>
            <img src={gallery6} alt='photo of food'/>
          </figure>
          <figure className='gallery-item'>
            <img src={gallery7} alt='photo of food'/>
          </figure>
          <figure className='gallery-item'>
            <img src={gallery8} alt='photo of food'/>
          </figure>
          <figure className='gallery-item'>
            <img src={gallery9} alt='photo of food'/>
          </figure>
          <figure className='gallery-item'>
            <img src={gallery10} alt='photo of food'/>
          </figure>
          <figure className='gallery-item'>
            <img src={gallery11} alt='photo of food'/>
          </figure>
          <figure className='gallery-item'>
            <img src={gallery12} alt='photo of food'/>
          </figure>
        </div>
      </section>
      <section className='section-pricing'>
      <div className="container">
            <span className="subheading">Pricing</span>
            <h2 className="heading-secondary">
              Eating well without breaking the bank
            </h2>
          </div>
          <div className='container grid grid--2-cols'>
            <div className='pricing-plan pricing-plan--starter'>
            <header className='plan-header'>
            <p className='plan-name'>Starter</p>
            <p className='plan-price'><span>$</span>399</p>
            <p className='plan-text'>per month. That's just $13 per meal!</p>
            </header>
            <ul className='list'>
              <li className='list-item'>
                <ion-icon name='checkmark-outline'></ion-icon><span>1 meal per day</span>
              </li>
              <li className='list-item'>
                <ion-icon name='checkmark-outline'></ion-icon><span>Order from 11am and 9pm</span>
              </li>
              <li className='list-item'>
                <ion-icon name='checkmark-outline'></ion-icon><span>Delivery is free</span>
              </li>
              <li className='list-item'>
              <ion-icon name="close-outline"></ion-icon>
              </li>
            </ul>
            <div className='plan-sign-up'>
            <a href="#" className="btn btn--full">
                Start eating well
              </a>
              </div>
            </div>
            <div className='pricing-plan pricing-plan--complete'>
            <header className='plan-header'>
            <p className='plan-name'>Complete</p>
            <p className='plan-price'><span>$</span>649</p>
            <p className='plan-text'>per month. That's just $11 per meal!</p>
            </header>
            <ul className='list'>
              <li className='list-item'>
                <ion-icon name='checkmark-outline'></ion-icon><span><strong>2 meals</strong> per day</span>
              </li>
              <li className='list-item'>
                <ion-icon name='checkmark-outline'></ion-icon><span>Order <strong>24/7</strong></span>
              </li>
              <li className='list-item'>
                <ion-icon name='checkmark-outline'></ion-icon><span>Delivery is free</span>
              </li>
              <li className='list-item'>
                <ion-icon name='checkmark-outline'></ion-icon><span>Get access to latest recipes</span>
              </li>
            </ul>
            <div className='plan-sign-up'>
            <a href="#" className="btn btn--full">
                Start eating well
              </a>
              </div>
            </div>
          </div>
          <div className='container grid margin-bottom-md'>
            <aside className='plan-details'>
            Prices include all applicable taxes. You can cancel at any time.Both plans include the following:
            </aside>
          </div>
          <div className='container grid grid--4-cols'>
            <div className='feature'>
            <ion-icon name="infinite-outline"></ion-icon>
            <p className='feature-title'>Never cook again!</p>
             <p className='feature-text'>Our subscriptions cover 365 days per year, even including major holidays.</p>
            </div>
            <div className='feature'>
            <ion-icon name="nutrition-outline"></ion-icon>
            <p className='feature-title'>Local and organic:</p> 
            <p className='feature-text'>Our cooks only use local, fresh, and organic products to prepare your meals.</p>
            </div>
            <div className='feature'>
            <ion-icon name="leaf-outline"></ion-icon>
            <p className='feature-title'>No waste:</p>
            <p className='feature-text'>All our partners only use reusable containers to package all your meals.</p>
            </div>
            <div className='feature'>
            <ion-icon name="pause-outline"></ion-icon>
            <p className='feature-title'>Pause anytime:</p>
            <p className='feature-text'>Going on vacation? Just pause your subscription, and we refund unused days.</p>
            </div>
          </div>
      </section>
    </>
  )
}

export default Testimonials
