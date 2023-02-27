import React from 'react'

const CTASection = () => {
  return (
    <>
      <section className='section-cta'>
      <div className='container'>
      <div className='cta'>
        <div className='cta-text-box'>
        <h2 className='heading-secondary'>Get your first meal for free!</h2>
        <p className='cta-text'>Healthy, tasty and hassle-free meals are waiting for you. Start eating well today. You can cancel or pause anytime. And the first meal is on us!</p>
        <form className='cta-form'  action='#'>
        <div>
        <label htmlFor='full-name'>Full Name</label>
          <input type='text' placeholder='Your Name' id='full-name' required/>
          </div>
          <div>
          <label htmlFor='email'>Email Address</label>
          <input type='email' placeholder='Enter Your Email' id='email' required/>
          </div>
          <div>
          <label htmlFor='select-where'>Where did you hear from us?</label>
          <select id='select-where'>
          <option value=''>Please choose one option:</option>
            <option value='friends'>Friends and family</option>
            <option value='youtube'>Youtube video</option>
            <option value='podcast'>Podcast</option>
            <option value='facebook'>Facebook add</option>
            <option value='others'>Others</option>
          </select>
          </div>
          <button className='btn btn--form'>Sign up now</button>
        </form>
        </div>
        <div className='cta-img-box' role='img' aria-label='women enjoying food'></div>
        </div>
      </div>
      </section>
    </>
  )
}

export default CTASection
