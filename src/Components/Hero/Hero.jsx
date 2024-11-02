import React from 'react'
import  './Hero.css'



const Hero = () => {
  return (
    <>
        <section className="hero">
          <div className="container">
            <div className="hero__wrapper">

              <div className="hero__box box">

                <h1>Building digital products, brands & experience</h1>

                <p>Digital Agency is your online team mangement tool that easy and prompt
                </p>

            <button>Contact Us</button>
              </div>

              <div className="hero__img">

                    <img src="public/hero.png" alt="" />

              </div>

            </div>
          </div>
        </section>
    </>
  )
}

export default Hero