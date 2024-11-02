import React, { useState } from 'react'
import "./Header.css"


const Header = () => {


const [active, setActive] = useState(false)

  const togglBurger = () => {
    setActive(!active)
  } 

  return (
    <>
    <header className="header">
        <div className="container">
            <div className="header__wrapper">

                <h1>Digital Agency</h1>

                <div className={`menu ${  active ? 'active' : ''}`}>
                    <a href="">home</a>
                    <a href="">About</a>
                    <a href="">Testimonials</a>
                    <a href="">contact</a>
                </div>

                <div onClick={togglBurger } className={`burger ${active ? 'active' : ''}`} >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
            </div>
        </div>
    </header>
    </>
  )
}

export default Header