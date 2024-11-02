import React from 'react'
import './TESTIMONIALS.css'


const TESTIMONIALS = () => {
  return (
    <>
        <section className="Test">
            <div className="container">
                <div className="Test__wrapper">

                    <div className="Test__text">
                            <p>TESTIMONIALS</p>
                            <h1>Read What Other have to Say</h1>
                    </div>

                    <div className="Test__cards">

                    <div className="card">
                        <div className="id">
                        <img src="/andrew.svg" alt="" />
                        <h5>Andrew Rathore</h5>

                     
                        </div>
                  
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. </p>
                    </div>

                    <div className="card">
                        <div className="id">
                        <img src="/vera.svg" alt="" />
                        <h5>Vera Duncan</h5>

                     
                        </div>
                  
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. </p>
                    </div>

                    <div className="card">
                        <div className="id">
                        <img src="/mark.svg" alt="" />
                        <h5>Mark Smith</h5>

                     
                        </div>
                  
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. </p>
                    </div>
                    
                    </div>

                </div>
            </div>
        </section>
    </>
  )
}

export default TESTIMONIALS