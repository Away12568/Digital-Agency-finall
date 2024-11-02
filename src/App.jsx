import React from 'react'
import "./App.css"
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Spotify from './Components/spotify/Spotify'
import System from './Components/System/System'
import Custome from './Components/Custome/Custome'
import TESTIMONIALS from './Components/TESTIMONIALS/TESTIMONIALS'
import Part from './Components/Part/Part'
import Footer from './Components/Footer/Footer'


const App = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <Spotify/>
      <System/>
      <Custome/>
      <TESTIMONIALS/>
      <Part/>
      <Footer/>
    </>
  )
}

export default App