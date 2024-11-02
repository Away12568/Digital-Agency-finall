import React from 'react'
import './System.css'


const System = () => {
  return (
    <>
        <section className="System">
            <div className="container">
                <div className="System__wrapper">

                    <div className="System__img">
                    <img src="/branding.png" alt="" />

                    </div>

                 <div className="System__box box">

                <h1>Building digital products, brands & experience</h1>

                <p>Digital Agency is your online team mangement tool that easy and prompt
                </p>

                  <img className='arrow-1' src="public/arrow-1.svg" alt="" />

                  <img className='arrow-2' src="public/arrow-2.svg" alt="" />
              </div>

                </div>
            </div>
        </section>
    </>
  )
}

export default System