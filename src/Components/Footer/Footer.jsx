import React from 'react'
import './Footer.css'


const Footer = () => {
  return (
    <>
    <footer className="footer">
        <div className="container">
            <div className="footerp__wrapper">
        <div className="FOOTER-TEXT">
                <div className="footer-link">

                         <h4>Digital Agency</h4>

                    <div className="footer-a">
                        <a href="">Building digital products, 
                        brands & experience</a>
                    </div>

                </div>

                      <div className="footer-link">

                         <h4>Resources</h4>

                    <div className="footer-a">
                        <a href="">Guides</a>
                        <a href="">Blog</a>
                        <a href="">Cuistomer Stories</a>
                        <a href="">Glossery</a>
                    </div>

                </div>

                      <div className="footer-link">

                         <h4>Company</h4>

                    <div className="footer-a">
                        <a href="">About Us</a>
                        <a href="">Careers</a>
                        <a href="">Partners</a>
                        <a href="">Contact Us</a>
                    </div>

                </div>

                      <div className="footer-link">

                         <h4>Social Media</h4>

                    <div className="footer-a">
                        <a href="">LinkedIn</a>
                        <a href="">Facebook</a>
                        <a href="">Instagram</a>
                        <a href="">Twitter</a>
                    </div>

                </div>
                </div>
                <p>© Matheus. Todos os direitos reservados</p>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer