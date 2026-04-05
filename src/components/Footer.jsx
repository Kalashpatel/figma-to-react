import ellipse from '../assets/elements/Ellipse2.png'
import vector6 from '../assets/elements/Vector1.png'
import square from '../assets/elements/Vector2.png'
import useScrollReveal from '../hooks/useScrollReveal'

export default function Footer() {
  const nlRef    = useScrollReveal()
  const linksRef = useScrollReveal()

  return (
    <footer className="footer">

      {/* Newsletter */}
      <div className="footer__newsletter">
        <img src={square}  className="footer__deco footer__deco--square"  alt="" aria-hidden="true" />
        <img src={vector6} className="footer__deco footer__deco--arrow"   alt="" aria-hidden="true" />
        <img src={ellipse} className="footer__deco footer__deco--ellipse" alt="" aria-hidden="true" />

        <div className="container">
          <div ref={nlRef} className="footer__nl-inner reveal">
            <h2 className="title footer__nl-title">
              Subscribe to<br />our newsletter
            </h2>
            <p className="footer__nl-sub">To make your stay special and even more memorable</p>
            <a href="#" className="footer__nl-btn">Subscribe Now</a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="container">
        <hr className="footer__divider" />
      </div>

      {/* Links grid */}
      <div className="footer__links-section">
        <div className="container">
          <div ref={linksRef} className="row footer__grid justify-center reveal">

            <div className="col-3 col-md-6 col-xs-7 reveal-d1">
              <h4 className="footer__col-title">Company</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Studio</a></li>
                <li><a href="#">Service</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>

            <div className="col-3 col-md-6 col-xs-7 reveal-d2">
              <h4 className="footer__col-title">Terms &amp; Policies</h4>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms &amp; Conditions</a></li>
                <li><a href="#">Explore</a></li>
                <li><a href="#">Accesibility</a></li>
              </ul>
            </div>

            <div className="col-3 col-md-6 col-xs-7 reveal-d3">
              <h4 className="footer__col-title">Follow Us</h4>
              <ul>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">LinkedIn</a></li>
                <li><a href="#">Youtube</a></li>
                <li><a href="#">Twitter</a></li>
              </ul>
            </div>

            <div className="col-3 col-md-6 col-xs-7 reveal-d4">
              <h4 className="footer__col-title">Terms &amp; Policies</h4>
              <p className="footer__address">1498w Fluton ste, STE<br />2D Chicgo, IL 63867.</p>
              <p className="footer__contact">(123) 456789000</p>
              <p className="footer__contact">info@elementum.com</p>
            </div>

          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer__copy">
        <p>©2023 Elementum. All rights reserved</p>
      </div>

    </footer>
  )
}
